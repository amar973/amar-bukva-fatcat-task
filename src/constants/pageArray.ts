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
                            title: 'First Task',
                            description:
                                'First task involves transitioning this project from JavaScript to TypeScript.',
                            image: '/media/cards/shape1.svg',
                        },
                        {
                            title: 'Second Task',
                            description:
                                'Develop a React component that is both scalable and reusable, designed to fetch and display data from an API in a list format. ',
                            image: '/media/cards/shape2.svg',
                        },
                        {
                            title: 'Third Task',
                            description:
                                'Third task is create a Form Generator Component',
                            image: '/media/cards/shape3.svg',
                        },
                        {
                            title: 'Fourth Task',
                            description:
                                'Your task is to create a reusable React component for building web pages. This component should be designed to handle a variety of page layouts and components dynamically, based on the props it receives.',
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
    {
        type: 'layoutSection',
        props: { style: ['bg-blue', 'text-mainGreen', 'p-8', 'sm:p-16'] },
        components: [
            {
                type: 'componentPanelShowcase',
                props: {
                    items: [
                        {
                            title: 'First Task',
                            description:
                                'First task involves transitioning this project from JavaScript to TypeScript.',
                            image: '/media/cards/shape1.svg',
                        },
                        {
                            title: 'Second Task',
                            description:
                                'Develop a React component that is both scalable and reusable, designed to fetch and display data from an API in a list format. ',
                            image: '/media/cards/shape2.svg',
                        },
                        {
                            title: 'Third Task',
                            description:
                                'Third task is create a Form Generator Component',
                            image: '/media/cards/shape3.svg',
                        },
                        {
                            title: 'Fourth Task',
                            description:
                                'Your task is to create a reusable React component for building web pages. This component should be designed to handle a variety of page layouts and components dynamically, based on the props it receives.',
                            image: '/media/cards/shape4.svg',
                        },
                        {
                            title: 'Fifth Task',
                            description:
                                'It must contain a Readme.md file that has instructions on how to run the project as well as a brief explanation of how you have implemented these features. In the project, there is already a Readme.md file present. Feel free to override it completely',
                            image: '/media/cards/shape4.svg',
                        },
                        {
                            title: 'Sixth Task',
                            description:
                                'There should be no TypeScript or Eslint errors in your code.',
                            image: '/media/cards/shape4.svg',
                        },
                    ],
                },
            },
        ],
    },
];
