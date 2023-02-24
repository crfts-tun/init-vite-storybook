import classNames from 'classnames'
import React, { forwardRef, HTMLAttributes } from 'react'
import Typo from '../Typo'

export const ChipVariants = ['light', 'dark'] as const

export type ChipVariantsType = typeof ChipVariants[number]

export type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  variants: ChipVariantsType
}

const Chip = forwardRef<HTMLSpanElement, ChipProps>((props, ref) => {
  const { children, variants, ...restProps } = props

  const ChipVariantClasses: { [key in ChipVariantsType]: string } = {
    light: 'bg-light-100 text-dark-100',
    dark: 'bg-green-500 text-light-100',
  }

  return (
    <span
      ref={ref}
      className={classNames(
        'inline-flex rounded rounded-tr-none py-4 px-[10px] select-none',
        ChipVariantClasses[variants],
      )}
      {...restProps}
    >
      <Typo as="p" size="caption" weight="normal" textStyle="italic">
        {children}
      </Typo>
    </span>
  )
})

export default Chip
