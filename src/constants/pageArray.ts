import { LayoutSection } from '@homework-task/types/pageGenerator';

export const pageArray: LayoutSection[] = [
    {
        type: 'layoutSection',
        props: { style: ['bg-lightGreen', 'text-red', 'p-8', 'sm:p-16'] },
        components: [
            {
                type: 'componentHero',
                props: {
                    title: 'Component Hero',
                    image: '/media/cats/cat_2.png',
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: {
            style: [
                'bg-yellow',
                'text-red',
                'flex',
                'flex-col',
                'gap-20',
                'p-8',
                'sm:p-16',
            ],
        },
        components: [
            {
                type: 'componentItemsShowcase',
                props: {
                    items: [
                        {
                            title: 'Title1',
                            description: 'Description1',
                            image: '/media/cards/shape1.svg',
                        },
                        {
                            title: 'Title2',
                            description: 'Description2',
                            image: '/media/cards/shape2.svg',
                        },
                        {
                            title: 'Title3',
                            description: 'Description3',
                            image: '/media/cards/shape3.svg',
                        },
                        {
                            title: 'Title4',
                            description: 'Description4',
                            image: '/media/cards/shape4.svg',
                        },
                    ],
                },
            },
            {
                type: 'componentTrustBar',
                props: {
                    images: [
                        '/media/cards/shape1.svg',
                        '/media/cards/shape2.svg',
                        '/media/cards/shape3.svg',
                        '/media/cards/shape4.svg',
                        '/media/cats/cat_1.png',
                        '/media/cats/cat_2.png',
                        '/media/cats/cat_3.png',
                        '/media/cats/cat_4.png',
                        '/media/cats/cat_5.png',
                        '/media/cats/cat_6.png',
                    ],
                },
            },
        ],
    },
];
