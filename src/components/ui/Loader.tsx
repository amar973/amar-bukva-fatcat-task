interface LoaderProps {
    fillColor?: string;
    size?: string;
}

export const Loader = ({ fillColor, size }: LoaderProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        height={size ?? '20px'}
        width={size ?? '20px'}
        data-test-route-loading=""
        className="animate-spin"
        data-test-id="loader"
    >
        <path
            d="M16.641 27.76a2.142 2.142 0 1 1-4.284 0 2.142 2.142 0 0 1 4.284 0ZM17.329 3.24a2.83 2.83 0 1 1-5.66 0 2.83 2.83 0 0 1 5.66 0ZM25.51 24.154a2.366 2.366 0 1 1-4.732 0 2.366 2.366 0 0 1 4.731 0ZM7.69 24.154a1.863 1.863 0 1 1-3.725 0 1.863 1.863 0 0 1 3.726 0ZM29.372 15.5a2.613 2.613 0 1 1-5.226 0 2.613 2.613 0 0 1 5.226 0ZM3.931 15.5a1.69 1.69 0 1 1-3.38 0 1.69 1.69 0 0 1 3.38 0ZM25.92 6.819a2.776 2.776 0 1 1-5.552 0 2.776 2.776 0 0 1 5.552 0ZM7.292 6.819a1.465 1.465 0 1 1-2.93 0 1.465 1.465 0 0 1 2.93 0Z"
            fill={fillColor ?? 'white'}
        ></path>
    </svg>
);
