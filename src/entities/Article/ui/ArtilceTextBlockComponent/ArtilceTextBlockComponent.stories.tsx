import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArtilceTextBlockComponent } from './ArtilceTextBlockComponent';

export default {
    title: 'shared/ArtilceTextBlockComponent',
    component: ArtilceTextBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArtilceTextBlockComponent>;

const Template: ComponentStory<typeof ArtilceTextBlockComponent> = (args) => <ArtilceTextBlockComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
