import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Dialog from './index'
import Button from '../Button'

export default {
  title: 'Utilities/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>

const InternalStateTemplate: ComponentStory<typeof Dialog> = (args) => {
  return (
    <Dialog {...args}>
      <Dialog.Trigger asChild>
        <Button variants="primary">Internal state</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Confirm asChild>Confirm</Dialog.Confirm>
      </Dialog.Content>
    </Dialog>
  )
}

const ExternalStateTemplate: ComponentStory<typeof Dialog> = (args) => {
  // state
  const [dialog, setDialog] = useState<boolean>(false)

  return (
    <>
      <Button variants="primary" onClick={() => setDialog(true)}>
        External state
      </Button>
      <Dialog {...args} open={dialog} onOpenChange={setDialog}>
        <Dialog.Content>
          <Dialog.Confirm asChild>Confirm</Dialog.Confirm>
        </Dialog.Content>
      </Dialog>
    </>
  )
}

export const InternalState = InternalStateTemplate.bind({})
export const ExternalState = ExternalStateTemplate.bind({})
