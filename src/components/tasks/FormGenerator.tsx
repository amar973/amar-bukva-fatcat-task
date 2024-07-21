import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useForm, FieldValues } from 'react-hook-form';
import { useMutation } from 'react-query';
import { z as zod } from 'zod';

import { Button } from '@homework-task/components/formElements/Button';
import { CustomInput } from '@homework-task/components/formElements/CustomInput';
import { CustomTextarea } from '@homework-task/components/formElements/CustomTextarea';
import {
    ToastHelper,
    ToastMessageType,
    ToastType,
} from '@homework-task/helper/toast';

const Schema = zod.object({
    title: zod
        .string()
        .max(50, 'Title must be 50 characters or less')
        .min(1, 'Title is required'),
    body: zod
        .string()
        .max(500, 'Body must be 500 characters or less')
        .min(1, 'Body is required'),
});

type FormSchemaType = zod.infer<typeof Schema>;

export const FormGenerator: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormSchemaType>({
        resolver: zodResolver(Schema),
        mode: 'all',
    });

    const updateTaxRateData = useMutation({
        mutationFn: (data: FieldValues) =>
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }),
        onSuccess: () => {
            ToastHelper.showToast(
                'Element',
                ToastType.SUCCESS,
                ToastMessageType.CREATE
            );
            reset({
                title: '',
                body: '',
            });
        },
        onError: (err: Error) => {
            ToastHelper.showToast(
                err.message,
                ToastType.ERROR,
                ToastMessageType.ERROR
            );
        },
    });
    const onSubmit = (data: FieldValues) => {
        updateTaxRateData.mutate(data);
    };

    const handleClick = async () => {
        await handleSubmit(onSubmit)();
    };

    return (
        <section
            className={clsx(
                'place-content-center',
                'bg-lightBlue',
                'flex',
                'flex-col',
                'items-center',
                'gap-10',
                'p-4',
                'sm:p-16'
            )}
        >
            <h1
                className={clsx(
                    'text-2xl',
                    'font-semibold',
                    'w-full',
                    'text-left',
                    'mb-4'
                )}
            >
                Second task: Create a Form Generator Component
            </h1>
            <div
                className={clsx(
                    'flex',
                    'flex-col',
                    'items-left',
                    'gap-1',
                    'md:gap-2',
                    'p-4',
                    'md:p-8',
                    'bg-lightGray',
                    'w-full',
                    'max-w-[600px]'
                )}
            >
                <CustomInput
                    id="title"
                    label="Title"
                    className="w-full"
                    {...register('title')}
                    error={errors['title']?.message}
                />
                <CustomTextarea
                    id="body"
                    label="Body"
                    type="textarea"
                    {...register('body')}
                    error={errors['body']?.message}
                />
                <Button className="w-50" onClick={() => void handleClick()}>
                    Submit
                </Button>
            </div>
        </section>
    );
};
