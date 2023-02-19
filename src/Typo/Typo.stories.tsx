/** component */
import Typo from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Component/Typo',
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
