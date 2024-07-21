import React from 'react';

import clsx from 'clsx';

import { Hero } from '@homework-task/components/pageGeneratorComponent/Hero';
import { ItemsShowcase } from '@homework-task/components/pageGeneratorComponent/ItemsShowcase';
import { TrustBar } from '@homework-task/components/pageGeneratorComponent/TrustBar';
import {
    HeroProps,
    ItemsShowcaseProps,
    PageGeneratorProps,
    TrustBarProps,
} from '@homework-task/types/pageGenerator';

export const PageGenerator: React.FC<PageGeneratorProps> = ({ data }) => {
    return (
        <div className={clsx('bg-lightGreen', 'pt-8', 'sm:pt-16')}>
            <h1
                className={clsx(
                    'text-2xl',
                    'font-semibold',
                    'text-left',
                    'mb-4',
                    'mx-8',
                    'sm:mx-16'
                )}
            >
                Third task: Create a Page Generator Component
            </h1>
            {data.map((section, sectionIndex) => (
                <section
                    key={sectionIndex}
                    className={clsx(section.props.style)}
                >
                    {section.components.map((component, componentIndex) => {
                        switch (component.type) {
                            case 'componentHero':
                                return (
                                    <Hero
                                        key={componentIndex}
                                        {...(component.props as HeroProps)}
                                    />
                                );
                            case 'componentItemsShowcase':
                                return (
                                    <ItemsShowcase
                                        key={componentIndex}
                                        {...(component.props as ItemsShowcaseProps)}
                                    />
                                );
                            case 'componentTrustBar':
                                return (
                                    <TrustBar
                                        key={componentIndex}
                                        {...(component.props as TrustBarProps)}
                                    />
                                );
                            default:
                                return null;
                        }
                    })}
                </section>
            ))}
        </div>
    );
};
