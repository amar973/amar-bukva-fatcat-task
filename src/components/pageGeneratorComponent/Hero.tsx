interface HeroProps {
    title: string;
    image: string;
}
export const Hero = ({ title, image }: HeroProps) => {
    return (
        <div className="flex flex-wrap justify-center items-center  gap-40">
            <div className="w-fit">
                <h1 className="text-3xl font-bold">{title}</h1>
            </div>
            <div className="w-fit">
                <img src={image} width="100%" alt="Hero" loading="eager" />
            </div>
        </div>
    );
};
