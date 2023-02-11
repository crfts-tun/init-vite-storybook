import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './index'

export default {
  title: 'test/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

export const Default = Template.bind({})

const commonArgs = {
  children: 'Test Button',
}

Default.args = commonArgs
