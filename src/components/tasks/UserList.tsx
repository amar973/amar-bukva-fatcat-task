import clsx from 'clsx';

import { UserCard } from '@homework-task/components/common/UserCard';
import { ErrorPage } from '@homework-task/components/ui/ErrorPage';
import { Loader } from '@homework-task/components/ui/Loader';
import { User } from '@homework-task/types/user';

interface UsersListProps {
    users: User[];
    loading: boolean;
    error: string | null;
}

export const UsersList = ({ users, error, loading }: UsersListProps) => {
    return (
        <section
            className={clsx(
                'col-span-full',
                'grid',
                'gap-8',
                'grid-cols-1',
                'min-h-[400px]',
                'bg-lightGray'
            )}
        >
            {loading ? (
                <div
                    className={clsx(
                        'w-full',
                        'flex',
                        'justify-center',
                        'items-center'
                    )}
                >
                    <Loader fillColor="black" size="50" />
                </div>
            ) : error || users?.length === 0 ? (
                <ErrorPage
                    error={error ? 'Error fetching user' : 'No users found'}
                />
            ) : (
                <div
                    className={clsx(
                        'min-h-screen',
                        'min-w-full',
                        'grid',
                        'grid-cols-1',
                        'lg:grid-cols-landing',
                        'gap-4',
                        'place-content-center',
                        'p-8',
                        'sm:p-16'
                    )}
                >
                    <h1
                        className={clsx(
                            'text-2xl',
                            'font-semibold',
                            'text-left',
                            'mb-4'
                        )}
                    >
                        First task: Create a List Component
                    </h1>
                    <div
                        className={clsx(
                            'col-span-full',
                            'grid',
                            'gap-8',
                            'grid-cols-1',
                            'md:grid-cols-2'
                        )}
                    >
                        {users.map((user: User) => (
                            <UserCard user={user} key={user.id} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};
