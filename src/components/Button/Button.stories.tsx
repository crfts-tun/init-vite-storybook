import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button, { type ButtonPropType } from '.'

import { ButtonSizeList, ButtonVariantList } from '../../constance/Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'onClick',
      table: {
        category: 'Function',
      },
    },
    children: {
      control: 'text',
      defaultValue: 'GET STARTED',
      description: '`children` inside button is `ReactNode`',
      table: {
        category: 'Props',
        defaultValue: {
          summary: 'ReactNode | ""',
        },
      },
    },
    variants: {
      control: { type: 'radio', option: ButtonVariantList },
      description: 'Select variant of button',
      table: {
        category: 'Props',
        defaultValue: { summary: 'primary' },
      },
    },
    sizes: {
      control: { type: 'radio', option: ButtonSizeList },
      description: 'adjust button sizes',
      table: {
        category: 'Props',
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
      },
    },
    isLoading: {
      control: 'boolean',
      description: 'On maintenance',
      defaultValue: false,
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
      },
    },
    iconLeft: {
      table: {
        category: 'Props',
      },
    },
    iconRight: {
      table: {
        category: 'Props',
      },
    },
    onlyIcon: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props',
        defaultValue: { summary: 'false' },
      },
    },
  },
} as ComponentMeta<typeof Button>

/** Simple button template */
const ButtonTemplate: ComponentStory<typeof Button> = (args): JSX.Element => <Button {...args} />

/** Simple button only icon template */
const ButtonOnlyIconTemplate: ComponentStory<typeof Button> = (args): JSX.Element => <Button {...args} />

export const DefaultButton = ButtonTemplate.bind({})
export const WithIcon = ButtonTemplate.bind({})
export const OnlyIcon = ButtonOnlyIconTemplate.bind({})

const commonArgs: ButtonPropType = {
  sizes: 'medium',
  onlyIcon: false,
  variants: 'primary',
  isLoading: false,
}

DefaultButton.args = commonArgs

WithIcon.args = {
  ...commonArgs,
  iconLeft: 'null-1',
}

OnlyIcon.args = {
  ...commonArgs,
  children: '',
  iconLeft: 'bar-1',
  iconRight: undefined,
  onlyIcon: true,
}
