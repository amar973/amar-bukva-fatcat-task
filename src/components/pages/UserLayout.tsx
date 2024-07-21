import { useEffect, useState } from 'react';

import clsx from 'clsx';
import { useParams, useNavigate } from 'react-router-dom';

import { ErrorPage } from '@homework-task/components/ui/ErrorPage';
import { Loader } from '@homework-task/components/ui/Loader';
import { User } from '@homework-task/types/user';

export const UserLayout = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [user, setUser] = useState<User | undefined>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((data: User) => {
                setUser(data);
                setLoading(false);
            })
            .catch((err: Error) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    const handleBackClick = () => {
        navigate('/');
    };

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
            ) : error || !user ? (
                <ErrorPage
                    error={error ? 'Error fetching user' : 'No user found'}
                />
            ) : (
                <div
                    className={clsx(
                        'flex',
                        'flex-col',
                        'gap-4',
                        'p-4',
                        'bg-white',
                        'rounded-2xl',
                        'shadow-lg'
                    )}
                >
                    <button
                        onClick={handleBackClick}
                        className={clsx(
                            'bg-gray10',
                            'text-white',
                            'p-2',
                            'rounded',
                            'mb-4',
                            'hover:bg-gray20',
                            'w-40'
                        )}
                    >
                        Back
                    </button>
                    <h1 className={clsx('text-2xl', 'font-bold', 'mb-4')}>
                        User Details
                    </h1>
                    <p>
                        <strong>ID:</strong> {user.id}
                    </p>
                    <p>
                        <strong>Name:</strong> {user.name}
                    </p>
                    <p>
                        <strong>Username:</strong> {user.username}
                    </p>
                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>
                    <p>
                        <strong>Phone:</strong> {user.phone}
                    </p>
                    <p>
                        <strong>Website:</strong>{' '}
                        <a
                            href={`http://${user.website}`}
                            className="text-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {user.website}
                        </a>
                    </p>
                    <div>
                        <h2 className={clsx('text-lg', 'font-semibold')}>
                            Address
                        </h2>
                        <p>
                            <strong>Street:</strong> {user.address.street}
                        </p>
                        <p>
                            <strong>Suite:</strong> {user.address.suite}
                        </p>
                        <p>
                            <strong>City:</strong> {user.address.city}
                        </p>
                        <p>
                            <strong>Zipcode:</strong> {user.address.zipCode}
                        </p>
                        <p>
                            <strong>Latitude:</strong> {user.address.geo.lat}
                        </p>
                        <p>
                            <strong>Longitude:</strong> {user.address.geo.lng}
                        </p>
                    </div>
                    <div>
                        <h2 className={clsx('text-lg', 'font-semibold')}>
                            Company
                        </h2>
                        <p>
                            <strong>Name:</strong> {user.company.name}
                        </p>
                        <p>
                            <strong>Catchphrase:</strong>{' '}
                            {user.company.catchPhrase}
                        </p>
                        <p>
                            <strong>BS:</strong> {user.company.bs}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};
