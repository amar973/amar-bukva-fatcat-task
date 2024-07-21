import { LegacyRef, forwardRef } from 'react';
import * as React from 'react';

interface CustomTextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
    id: string;
    label: string;
    error?: string;
}

export const CustomTextarea = forwardRef(
    (props: CustomTextareaProps, ref: LegacyRef<HTMLTextAreaElement>) => {
        const { id, label, error } = props;
        return (
            <div className="xpl-textarea w-full flex flex-col h-auto mb-[15px] gap-1">
                <label htmlFor={id} className="text-sm font-medium">
                    {label}
                </label>
                <div
                    className={`xpl-textarea-wrapper overflow-auto ${
                        error ? 'mb-0' : 'mb-6'
                    }`}
                >
                    <textarea
                        ref={ref}
                        placeholder={label}
                        className={`appearance-none focus:outline-none focus:ring-0 p-1 w-full h-[68px] min-h-[68px] max-h-[200px]`}
                        style={{ color: '#6a6d7d' }}
                        {...props}
                    />
                </div>
                {error && <p className="text-red leading-5 text-xs">{error}</p>}
            </div>
        );
    }
);

CustomTextarea.displayName = 'CustomTextarea';
