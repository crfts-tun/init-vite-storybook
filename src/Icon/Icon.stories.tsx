/** component */
import Icon from '.'

/** type */
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Component/Icon',
  component: Icon,
  argTypes: {
    color: {
      control: 'select',
      defaultValue: 'blue',
      description: 'set icon color',
      table: {
        category: 'Props',
        defaultValue: { summary: 'blue' },
      },
    },
  },
} as ComponentMeta<typeof Icon>

const SingleIconTemplate: ComponentStory<typeof Icon> = (
  args,
): JSX.Element => <Icon {...args} />

export const SingleIcon = SingleIconTemplate.bind({})

SingleIcon.args = {
  icon: 'null-1',
  size: '16',
  color: 'blue',
}
