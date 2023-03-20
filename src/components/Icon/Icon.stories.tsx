import React from 'react'

/** component */
import Icon from '.'

/** type */
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { IconColors } from '../../constance/Icon'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    color: {
      options: IconColors,
      control: {
        type: 'select',
      },
      defaultValue: 'blue',
      description: 'Set icon color',
      table: {
        category: 'Props',
        defaultValue: { summary: 'blue' },
      },
    },
  },
} as ComponentMeta<typeof Icon>

const SingleIconTemplate: ComponentStory<typeof Icon> = (args): JSX.Element => <Icon {...args} />

export const SingleIcon = SingleIconTemplate.bind({})

SingleIcon.args = {
  icon: 'null-1',
  size: '16',
  color: 'blue',
}
