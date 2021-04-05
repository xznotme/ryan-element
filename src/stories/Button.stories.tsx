import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button,ButtonProps } from '../components/Button/button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    btnType: {control: 'radio',options:['primary','default','danger','link']},
    size: {control: 'radio',options: ['lg','sm']}
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 'lg',
  children: 'Button'
};
Primary.storyName = "默认按钮" // 自定义 story 名

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, children: '😄👍😍💯' }; // 复用上一个 story 的配置

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, children: '📚📕📈🤓' } // 再来一个

