import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati animi possimus, quo exercitationem minus dolor sequi perspiciatis fugiat cumque sed necessitatibus tempora quia odit quasi rem autem dolorem? Accusantium, quam?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati animi possimus, quo exercitationem minus dolor sequi perspiciatis fugiat cumque sed necessitatibus tempora quia odit quasi rem autem dolorem? Accusantium, quam?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
