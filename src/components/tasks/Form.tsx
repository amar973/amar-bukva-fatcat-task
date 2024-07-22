import { FieldValues } from 'react-hook-form';
import { useMutation } from 'react-query';
import { z as zod } from 'zod';

import { CustomInput } from '@homework-task/components/formElements/CustomInput';
import { CustomTextarea } from '@homework-task/components/formElements/CustomTextarea';
import {
    ToastHelper,
    ToastMessageType,
    ToastType,
} from '@homework-task/helper/toast';

import { FormGenerator } from './FormGenerator';

export const Form: React.FC = () => {
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

    const useCreatePostMutation = useMutation({
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
        },
        onError: (err: Error) => {
            ToastHelper.showToast(
                err.message,
                ToastType.ERROR,
                ToastMessageType.ERROR
            );
        },
    });

    return (
        <FormGenerator
            validationSchema={Schema}
            useMutation={useCreatePostMutation}
            renderForm={({ register, errors }) => (
                <>
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
                </>
            )}
        />
    );
};
