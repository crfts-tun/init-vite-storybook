import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Dialog from './index'
import * as RadixDialog from '@radix-ui/react-dialog'

export default {
  title: '',
  component: Dialog,
} as ComponentMeta<typeof Dialog>

const Template: ComponentStory<typeof Dialog> = (args) => (
  <Dialog {...args}></Dialog>
)

export const Default = Template.bind({})

const commonArgs = {}

Default.args = commonArgs
