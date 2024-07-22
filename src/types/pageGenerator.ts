interface LayoutProps {
    style?: string[];
}

interface ComponentProps {
    type:
        | 'componentHero'
        | 'componentItemsShowcase'
        | 'componentTrustBar'
        | 'componentPanelShowcase';
    props: HeroProps | ItemsShowcaseProps | TrustBarProps;
}

export interface LayoutSection {
    type: 'layoutSection';
    props: LayoutProps;
    components: ComponentProps[];
}

export interface PageGeneratorProps {
    data: LayoutSection[];
}

interface Item {
    title: string;
    description: string;
    image: string | undefined;
}

export interface PanelShowcaseProps {
    items: Item[];
}
export interface ItemsShowcaseProps {
    items: Item[];
}
export interface HeroProps {
    title: string;
    image: string;
}
export interface TrustBarProps {
    images: string[];
}
