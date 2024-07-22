interface ObjectDetailsProps {
    data: Record<string, string | undefined>;
}
export const ObjectDetails = ({ data }: ObjectDetailsProps) => {
    return Object.keys(data).map((key: string) => (
        <p key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
            {data[key] || 'N/A'}
        </p>
    ));
};
