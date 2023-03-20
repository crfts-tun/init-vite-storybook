/** component */
import Icon from '.'
import Stack from '../Stack'

/** type */
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { IconLists } from '../../constance/Icon'

export default {
  title: 'Components/Icon',
  component: Stack,
  argTypes: {
    direction: {
      control: 'radio',
      defaultValue: 'horizon',
      description: 'set direction of icons',
      table: {
        category: 'Props',
        defaultValue: { summary: 'horizon' },
      },
    },
    gap: {
      control: 'select',
      defaultValue: 4,
      description: 'set gap space between icons',
      table: {
        category: 'Props',
        defaultValue: { summary: 4 },
      },
    },
  },
} as ComponentMeta<typeof Stack>

const StackIconsTemplate: ComponentStory<typeof Stack> = (args): JSX.Element => (
  <Stack {...args}>
    {IconLists.map((icon) => (
      <Icon icon={icon} color="blue" />
    ))}
  </Stack>
)

export const StackIcons = StackIconsTemplate.bind({})

StackIcons.args = {}
