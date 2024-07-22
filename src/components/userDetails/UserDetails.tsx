import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

import { ObjectDetails } from '@homework-task/components/ui/ObjectDetails';
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
            <div>
                <ObjectDetails
                    data={{
                        id: String(user.id),
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        phone: user.phone,
                    }}
                />
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
            </div>
            <div>
                <h2 className={clsx('text-lg', 'font-semibold')}>Address</h2>
                <ObjectDetails
                    data={{
                        street: user.address.street,
                        suite: user.address.suite,
                        city: user.address.city,
                        latitude: user.address.geo.lat,
                        Longitude: user.address.geo.lng,
                    }}
                />
            </div>
            <div>
                <h2 className={clsx('text-lg', 'font-semibold')}>Company</h2>
                <ObjectDetails
                    data={{
                        company: user.company.name,
                        catchphrase: user.company.catchPhrase,
                        BS: user.company.bs,
                    }}
                />
            </div>
        </div>
    );
};
