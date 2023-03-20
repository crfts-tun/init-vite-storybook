import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Chip, { ChipProps } from '.'

export default {
  title: 'Components/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />

export const Default = Template.bind({})

const commonArgs: ChipProps = {
  children: 'NEWS',
  variants: 'dark',
}

Default.args = commonArgs
