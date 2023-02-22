/** lib */
import { forwardRef } from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'
import classNames from 'classnames'

/** component */
import Button from '../Button'

const DialogConfirm = (props: RadixDialog.DialogCloseProps) => {
  return (
    <RadixDialog.Close asChild>
      <Button
        variants="primary"
        aria-label={props.children?.toString()}
      >
        {props.children}
      </Button>
    </RadixDialog.Close>
  )
}

const DialogContent = forwardRef<
  HTMLDivElement,
  RadixDialog.DialogContentProps
>((props, ref) => {
  /** destructuring */
  const { children, ...restProp } = props

  /** style */
  const overlayCss =
    'fixed inset-0 bg-shade-dark-500 animate-overlayShow'
  const fixedPositionCss =
    'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  const contentCss =
    'bg-light-100 rounded-lg animate-contentShow p-40'

  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className={overlayCss} />
      <RadixDialog.Content
        ref={ref}
        className={classNames(fixedPositionCss, contentCss)}
        {...restProp}
      >
        {children}

        {/* <!-- close dialog --> */}
        <RadixDialog.Close asChild>
          <Button
            onlyIcon
            variants="outline"
            iconLeft="bar"
            className="absolute right-8 top-8"
            aria-label="Close"
          />
        </RadixDialog.Close>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  )
})

const Dialog = (props: RadixDialog.DialogProps) => {
  /** destructuring */
  const { children, ...restProp } = props

  return <RadixDialog.Root {...restProp}>{children}</RadixDialog.Root>
}

const CompoundDialog = Object.assign(Dialog, {
  Confirm: DialogConfirm,
  Content: DialogContent,
  Trigger: RadixDialog.Trigger,
})

export default CompoundDialog
