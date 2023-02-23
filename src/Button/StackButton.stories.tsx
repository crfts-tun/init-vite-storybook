/** component */
import Button from '.'
import Stack from '../Stack'

/** type */
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Component/Button',
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

const StackButtonsTemplate: ComponentStory<typeof Stack> = (
  args,
): JSX.Element => (
  <Stack {...args}>
    <Button variants="secondary">Cancel</Button>
    <Button variants="primary">Confirm</Button>
  </Stack>
)

export const StackButtons = StackButtonsTemplate.bind({})

StackButtons.args = {}
