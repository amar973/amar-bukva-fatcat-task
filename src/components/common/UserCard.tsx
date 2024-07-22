import clsx from 'clsx';

import { ObjectDetails } from '@homework-task/components/ui/ObjectDetails';
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
                'bg-gray5',
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
            <ObjectDetails
                data={{
                    id: String(user.id),
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                }}
            />
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
