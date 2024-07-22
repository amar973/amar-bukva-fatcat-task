interface ItemsShowcaseProps {
    items: { title: string; description: string; image: string | undefined }[];
}
export const ItemsShowcase = ({ items }: ItemsShowcaseProps) => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-8/12">
                {items.map(({ title, description, image }) => (
                    <div key={title} className="flex flex-col gap-2">
                        <img src={image} width={25} alt="Checkmark" />
                        <div className="text-2xl font-bold">{title}</div>
                        <p className="">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
