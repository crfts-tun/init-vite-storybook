import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Chip from '.'

export default {
  title: '',
  component: Chip,
  argTypes: {},
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = (args) => (
  <Chip {...args} />
)

export const Default = Template.bind({})

const commonArgs = {}

Default.args = commonArgs
