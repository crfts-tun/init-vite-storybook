/** component */
import Typo from './index'
import {
  textSizes,
  textStyles,
  textWeights,
} from '../../constance/typo'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: '',
  component: Typo,
} as ComponentMeta<typeof Typo>

const SingleTypoTemplate: ComponentStory<typeof Typo> = (args) => (
  <Typo {...args} />
)

export const SingleTypo = SingleTypoTemplate.bind({})

SingleTypo.args = {
  size: 'body',
  textStyle: 'normal',
  weight: 'normal',
}

SingleTypo.argTypes = {
  size: {
    control: { type: 'select' },
    options: textSizes,
  },
  textStyle: {
    control: { type: 'select' },
    options: textStyles,
  },
  weight: {
    control: { type: 'select' },
    options: textWeights,
  },
}
