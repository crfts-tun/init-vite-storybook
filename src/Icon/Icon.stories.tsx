/** style */
/** lib */
/** hooks */
/** component */
import Icon from './index'

/** type */
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  iconList,
  iconSizes,
  iconColors,
} from '../../constance/icons'

export default {
  title: 'Vespa/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const SingleIconTemplate: ComponentStory<typeof Icon> = (
  args,
): JSX.Element => <Icon {...args} />

export const SingleIcon = SingleIconTemplate.bind({})

// Primary.args = {...commonArgs, icon: 'null-1' }

SingleIcon.args = {
  icon: 'null-1',
  size: '16',
  color: 'blue',
}

SingleIcon.argTypes = {
  icon: {
    control: { type: 'select' },
    options: iconList,
  },
  color: {
    control: { type: 'select' },
    options: iconColors,
  },
  size: {
    control: { type: 'select' },
    options: iconSizes,
  },
}

// export const HoverIcon = SingleIconTemplate.bind({})
// HoverIcon.args = {
//   icon: 'null-1',
//   size: '24',
//   color: 'blue',
//   className: 'vespa-cursor-pointer hover:vespa-bg-dark-200',
// }

// HoverIcon.argTypes = {
//   color: {
//     control: { type: 'select' },
//     options: iconColors,
//   },
// }
