import { useEffect, useState } from 'react';

import clsx from 'clsx';

import { FormGenerator } from '@homework-task/components/tasks/FormGenerator';
import { PageGenerator } from '@homework-task/components/tasks/PageGenerator';
import { UsersList } from '@homework-task/components/tasks/UsersList';
import { pageArray } from '@homework-task/constants/pageArray';
import { User } from '@homework-task/types/user';

export const Landing = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data: User[]) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err: Error) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);
    return (
        <section
            className={clsx(
                'bg-cream',
                'min-h-screen',
                'min-w-screen',
                'place-content-center',
                'p-8',
                'sm:p-10',
                'md:p-16',
                'flex',
                'flex-col'
            )}
        >
            <div>
                <h1
                    className={clsx(
                        'text-4xl',
                        ' font-bold',
                        'text-center',
                        'mb-8'
                    )}
                >
                    TECH TASK
                </h1>
            </div>
            <UsersList users={users} loading={loading} error={error} />
            <FormGenerator />
            <PageGenerator data={pageArray} />
        </section>
    );
};
