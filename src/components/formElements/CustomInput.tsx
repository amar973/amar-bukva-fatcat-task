import { LegacyRef, forwardRef } from 'react';
import * as React from 'react';

interface CustomInputProps extends React.HTMLProps<HTMLInputElement> {
    id: string;
    label: string;
    error?: string;
}

export const CustomInput = forwardRef(
    (props: CustomInputProps, ref: LegacyRef<HTMLInputElement>) => {
        const { id, label, error } = props;
        return (
            <div className="xpl-input w-full flex flex-col h-[68px] mb-[15px] gap-1">
                <label htmlFor={id} className="text-sm font-medium">
                    {label}
                </label>
                <div
                    className={`xpl-input-wrapper h-[44px] ${
                        error ? 'mb-0' : 'mb-5'
                    }`}
                >
                    <input
                        ref={ref}
                        disabled={false}
                        placeholder={label}
                        type="text"
                        className={`appearance-none focus:outline-none focus:ring-0 bg-black`}
                        style={{
                            color: '#6a6d7d',
                            padding: '4px',
                            height: '30px',
                        }}
                        {...props}
                    />
                </div>
                {error && <p className="text-red leading-5 text-xs">{error}</p>}
            </div>
        );
    }
);
CustomInput.displayName = 'CustomInput';
