import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import Menu, { MenuProps } from '../components/Menu/menu';
import MenuItem from '../components/Menu/menuItem';

export default {
  title: 'Example/Menu',
  component: Menu,
  argTypes: {
    mode: {control: 'radio',options: ['horizontal','vertical']}
  },
} as Meta;

const Template: Story<MenuProps> = (args) =>
(
  <Menu {...args}>
    <MenuItem>
      cool link
    </MenuItem>
    <MenuItem>
      cool link
    </MenuItem>
    <MenuItem>
      cool link
    </MenuItem>
  </Menu>
);


export const defaultMenu = Template.bind({});
defaultMenu.args = {
  defaultIndex: '0',
  mode: 'horizontal',
  onSelect: (index) => { action(`clicked ${index} item`) },
};
defaultMenu.storyName = "导航菜单" // 自定义 story 名