import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
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
    title: 'It is title',
    text: 'It is text',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'It is text',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'It is title',
};

export const Error = Template.bind({});
Error.args = {
    title: 'It is title',
    text: 'It is text',
    theme: TextTheme.ERROR,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'It is title',
    text: 'It is text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'It is text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'It is title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'It is title',
    text: 'It is text',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
