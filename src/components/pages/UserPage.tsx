import { useEffect, useState } from 'react';

import clsx from 'clsx';
import { useParams } from 'react-router-dom';

import { ErrorPage } from '@homework-task/components/ui/ErrorPage';
import { Loader } from '@homework-task/components/ui/Loader';
import { UserDetails } from '@homework-task/components/userDetails/UserDetails';
import { User } from '@homework-task/types/user';

export const UserPage = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User | undefined>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((data: User) => {
                setUser(data);
                if (Object.keys(data).length === 0) {
                    setError('User not found');
                }
                setLoading(false);
            })
            .catch((err: Error) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    return (
        <section
            className={clsx(
                'col-span-full',
                'grid',
                'gap-8',
                'grid-cols-1',
                'h-screen',
                'w-screen',
                'bg-cream',
                'p-8'
            )}
        >
            {loading ? (
                <Loader fillColor="black" size="50" />
            ) : error || !user ? (
                <ErrorPage
                    error={error ? error : 'An unexpected error occurred'}
                />
            ) : (
                <UserDetails user={user} />
            )}
        </section>
    );
};
