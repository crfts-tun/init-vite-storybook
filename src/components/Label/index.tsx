import classNames from 'classnames'
import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'

export const LabelSizes = ['small', 'medium', 'large'] as const

type Props = HTMLAttributes<HTMLDivElement> & {
  isBorder: boolean
  children: ReactNode
  size: ''
}

const Label = forwardRef((props: Props) => {
  const { isBorder, children, className, size, ...restProps } = props
  return (
    <div className={classNames('', className)} {...restProps}>
      {children}
    </div>
  )
})

export default Label
