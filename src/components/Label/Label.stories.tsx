import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Label from '.'

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    children: {
      controls: 'text',
    },
  },
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Default = Template.bind({})

const commonArgs = {
  children: 'Hello world',
}

Default.args = commonArgs
