import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'TITLE',
    text: 'aasfasjidbauishdaiuh',
};

export const Error = Template.bind({});
Error.args = {
    title: 'TITLE',
    text: 'aasfasjidbauishdaiuh',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'TITLE',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'aasfasjidbauishdaiuh',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'TITLE',
    text: 'aasfasjidbauishdaiuh',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'TITLE',
};
OnlyTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'aasfasjidbauishdaiuh',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
