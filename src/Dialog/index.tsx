import { ReactNode } from 'react'

import * as RadixDialog from '@radix-ui/react-dialog'
import classNames from 'classnames'
import Button from '../Button'

const Overlay = () => {
  return (
    <RadixDialog.Overlay className="bg-shade-dark-500 fixed inset-0 animate-overlayShow" />
  )
}

const Title = () => {
  return <RadixDialog.Title>Edit profile</RadixDialog.Title>
}

const Content = () => {
  const fixedPosition =
    'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'

  return (
    <RadixDialog.Content
      className={classNames(
        fixedPosition,
        'bg-light-100 rounded-lg animate-contentShow p-24',
      )}
    >
      <RadixDialog.Title>Edit profile</RadixDialog.Title>
      <RadixDialog.Description>
        Make changes to your profile here. Click save when you're
        done.
      </RadixDialog.Description>
      <div
        style={{
          display: 'flex',
          marginTop: 25,
          justifyContent: 'flex-end',
        }}
      >
        <RadixDialog.Close asChild>
          <button className="Button green">Save changes</button>
        </RadixDialog.Close>
      </div>
      <RadixDialog.Close asChild>
        <button
          className={classNames('IconButton')}
          aria-label="Close"
        >
          x
        </button>
      </RadixDialog.Close>
    </RadixDialog.Content>
  )
}

const Portal = () => {
  return (
    <RadixDialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content />
    </RadixDialog.Portal>
  )
}

const Trigger = ({ children }: RadixDialog.DialogTriggerProps) => {
  return <RadixDialog.Trigger asChild>{children}</RadixDialog.Trigger>
}

const Dialog = ({ children }: RadixDialog.DialogProps) => {
  return <RadixDialog.Root>{children}</RadixDialog.Root>
}

Dialog.Portal = Portal
Dialog.Trigger = Trigger
Dialog.Content = Content
Dialog.Overlay = Overlay
Dialog.Title = Title

const CompoundDialogSelect = Object.assign(Dialog, {
  Portal: Dialog.Portal,
  Trigger: Dialog.Trigger,
  Content: Dialog.Content,
  Overlay: Dialog.Overlay,
})

export default CompoundDialogSelect
