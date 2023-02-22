import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button, {
  ButtonProps,
  ButtonVariantList,
  ButtonSizeList,
} from '.'

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'GET STARTED',
      description: '`children` inside button is `ReactNode`',
      table: {
        category: 'Props',
        defaultValue: { summary: 'ReactNode' },
      },
    },
    variants: {
      control: { type: 'radio', option: ButtonVariantList },
      table: {
        category: 'Props',
        defaultValue: { summary: 'primary' },
      },
    },
    sizes: {
      control: { type: 'radio', option: ButtonSizeList },
      table: {
        category: 'Props',
        defaultValue: { summary: 'medium' },
      },
    },
    iconLeft: {
      description: 'Icon name list',
    },
    iconRight: {
      description: 'Icon name list',
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

const ButtonTemplate: ComponentStory<typeof Button> = (
  args,
): JSX.Element => <Button {...args} />
const ButtonOnlyIconTemplate: ComponentStory<typeof Button> = (
  args,
): JSX.Element => <Button {...args} />

export const DefaultButton = ButtonTemplate.bind({})
export const WithIcon = ButtonTemplate.bind({})
export const OnlyIcon = ButtonOnlyIconTemplate.bind({})

const commonArgs: ButtonProps = {
  sizes: 'medium',
  onlyIcon: false,
  variants: 'primary',
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
