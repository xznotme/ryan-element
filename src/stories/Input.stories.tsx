import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Input, { InputProps } from '../components/Input/input'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    size: { control: 'radio', options: ['lg', 'sm'] },
  }
} as Meta;

const ControlledInput = () => {
  const [value, setValue] = useState('')
  return <Input value={value}  onChange={(e) => {setValue(e.target.value)}}/>
}

const Template: Story<InputProps> = (args) => <>
<Input {...args} />
<ControlledInput/>
</>;

export const defaultInput = Template.bind({});
defaultInput.args = {
  size: 'lg',
  placeholder: 'placeholder',
  onChange: action('changed'),
};
defaultInput.storyName = "默认输入框" // 自定义 story 

export const disabledInput = Template.bind({});
disabledInput.args = {
  placeholder: 'placeholder input',
  disabled: true,
};
disabledInput.storyName = "被禁用的" // 自定义 story 


export const iconInput = Template.bind({});
iconInput.args = {
  style: { width: '300px' },
  icon: 'search',
};
iconInput.storyName = "带图标的" // 自定义 story 


const Template2: Story<InputProps> = (args) =>
(
  <>
    <Input
      style={{ width: '300px' }}
      defaultValue="large size"
      size="lg"
    />
    <Input
      style={{ width: '300px' }}
      placeholder="small size"
      size="sm"
    />
  </>
);
export const sizeInput = Template2.bind({})
sizeInput.storyName = "大小不同的" // 自定义 story 

const Template3: Story<InputProps> = (args) =>
(
  <>
    <Input
      style={{ width: '300px' }}
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input
      style={{ width: '300px' }}
      defaultValue="google"
      append=".com"
    />
  </>
);

export const pandInput = Template3.bind({})
pandInput.storyName = "带前后缀的" // 自定义 story 
