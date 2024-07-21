import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

import { User } from '@homework-task/types/user';

interface UserDetailsProps {
    user: User;
}
export const UserDetails = ({ user }: UserDetailsProps) => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/');
    };
    return (
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
                <h2 className={clsx('text-lg', 'font-semibold')}>Address</h2>
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
                <h2 className={clsx('text-lg', 'font-semibold')}>Company</h2>
                <p>
                    <strong>Name:</strong> {user.company.name}
                </p>
                <p>
                    <strong>Catchphrase:</strong> {user.company.catchPhrase}
                </p>
                <p>
                    <strong>BS:</strong> {user.company.bs}
                </p>
            </div>
        </div>
    );
};
