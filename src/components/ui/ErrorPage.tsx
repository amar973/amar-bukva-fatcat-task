import clsx from 'clsx';

interface ErrorPageProps {
    error: string;
}
export const ErrorPage = ({ error }: ErrorPageProps) => {
    return (
        <div
            className={clsx(
                'font-medium',
                'font-md',
                'text-center',
                'w-full',
                'flex',
                'justify-center',
                'items-center',
                'bg-cream'
            )}
        >
            <p
                className={clsx(
                    'text-2xl',
                    'font-semibold',
                    'text-left',
                    'mb-4',
                    'text-red'
                )}
            >
                {error}
            </p>
        </div>
    );
};
