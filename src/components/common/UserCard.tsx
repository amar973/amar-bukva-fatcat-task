import clsx from 'clsx';

import { User } from '@homework-task/types/user';

interface UserProps {
    user: User;
}

export const UserCard = ({ user }: UserProps) => {
    return (
        <div
            className={clsx(
                'flex',
                'flex-col',
                'gap-4',
                'p-4',
                'bg-cream',
                'py-6',
                'px-2',
                'sm:px-3',
                'md:px-4',
                'rounded-2xl',
                'break-words'
            )}
        >
            <h2
                className={clsx(
                    'text-black',
                    'text-2xl',
                    'leading-normal',
                    'font-medium'
                )}
            >
                {user.name}
            </h2>
            <p className={clsx('text-gray80', 'text-base', 'leading-relaxed')}>
                <strong>ID:</strong> {user.id}
            </p>
            <p className={clsx('text-gray80', 'text-base', 'leading-relaxed')}>
                <strong>Name:</strong> {user.name}
            </p>
            <p className={clsx('text-gray80', 'text-base', 'leading-relaxed')}>
                <strong>Email:</strong> {user.email}
            </p>
            <p className={clsx('text-gray80', 'text-base', 'leading-relaxed')}>
                <strong>Username:</strong> {user.username}
            </p>
            <p className={clsx('text-gray80', 'text-base', 'leading-relaxed')}>
                <strong>Phone:</strong> {user.phone}
            </p>
            <a
                href={`user/${user.id}`}
                className={clsx(
                    'mt-auto',
                    'flex',
                    'items-center',
                    'text-primary',
                    'gap-2.5',
                    'cursor-pointer'
                )}
            >
                More Info
                <img
                    src="/media/landing/arrow-purple.svg"
                    alt=""
                    className="cursor-pointer"
                />
            </a>
        </div>
    );
};
