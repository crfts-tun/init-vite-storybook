import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Component/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const ButtonTemplate: ComponentStory<typeof Button> = (
  args,
): JSX.Element => <Button {...args}>GET STARTED</Button>
const ButtonOnlyIconTemplate: ComponentStory<typeof Button> = (
  args,
): JSX.Element => <Button {...args} />

export const SingleButton = ButtonTemplate.bind({})
export const WithIcon = ButtonTemplate.bind({})
export const OnlyIcon = ButtonOnlyIconTemplate.bind({})

const commonArgs: ButtonProps = {
  variants: 'primary',
  sizes: 'medium',
  onlyIcon: false,
}

SingleButton.args = commonArgs

WithIcon.args = {
  ...commonArgs,
  iconLeft: 'null-1',
}

OnlyIcon.args = {
  ...commonArgs,
  iconLeft: 'bar-1',
  onlyIcon: true,
}
