import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageLoader } from './PageLoader';

export default {
    title: 'widgets/PageLoader',
    component: PageLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageLoader>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof PageLoader> = () => <PageLoader />;

export const Light = Template.bind({});
Light.args = {

};

export const Dark = Template.bind({});
Dark.args = {

};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
