import React from 'react'
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { Upload,UploadProps } from '../components/Upload/upload'
import Icon from '../components/Icon/icon'

export default {
  title: 'Example/Upload',
  component: Upload,
  argTypes: {
  },
} as Meta;

// const defaultFileList: UploadFile[] = [
//   { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
//   { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
//   { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
// ]
const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert('file too big')
    return false;
  }
  return true;
}
// const filePromise = (file: File) => {
//   const newFile = new File([file], 'new_name.docx', {type: file.type})
//   return Promise.resolve(newFile)
// }

const Template: Story<UploadProps> = (args) =>
(
  <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action('changed')}
      beforeUpload={checkFileSize}
      // defaultFileList={defaultFileList}
      onRemove={action('removed')}
      name="fileName"
      multiple
      drag
    >
      <Icon icon="upload" size="5x" theme="secondary" />
      <br/>
      <p>Drag file over to upload</p>
    </Upload>
);



export const SimpleUpload = Template.bind({});
SimpleUpload.storyName = "上传" // 自定义 story 名