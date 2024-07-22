import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useForm, FieldValues } from 'react-hook-form';
import { UseMutationResult } from 'react-query';
import { z as zod } from 'zod';

import { Button } from '@homework-task/components/formElements/Button';

type FormGeneratorProps<T extends FieldValues> = {
    validationSchema: zod.ZodSchema<T>;
    useMutation: UseMutationResult<Response, Error, FieldValues, unknown>;
    renderForm: (args: {
        register: ReturnType<typeof useForm<T>>['register'];
        errors: ReturnType<typeof useForm<T>>['formState']['errors'];
    }) => React.ReactNode;
};

export const FormGenerator = <T extends FieldValues>({
    validationSchema,
    useMutation,
    renderForm,
}: FormGeneratorProps<T>) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<T>({
        resolver: zodResolver(validationSchema),
        mode: 'all',
    });

    const onSubmit = (data: T) => {
        useMutation.mutate(data);
    };

    return (
        <section
            className={clsx(
                'place-content-center',
                'bg-gray10',
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
                    'bg-gray5',
                    'w-full',
                    'max-w-[600px]'
                )}
            >
                {renderForm({ register, errors })}
                <Button
                    className={clsx('w-50')}
                    onClick={() => void handleSubmit(onSubmit)()}
                >
                    Submit
                </Button>
            </div>
        </section>
    );
};
