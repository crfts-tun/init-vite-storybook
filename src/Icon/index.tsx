/** lib */
import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

/** constance */
export const IconLists = [
  'null-1',
  'null-2',
  'arrowhead-top',
  'arrowhead-left',
  'arrowhead-right',
  'arrowhead-bottom',
  'arrowhead-sm-top',
  'arrowhead-sm-left',
  'arrowhead-sm-right',
  'arrowhead-sm-bottom',
  'round-arrow-top',
  'round-arrow-left',
  'round-arrow-right',
  'round-arrow-bottom',
  'round-solid-arrow-top',
  'round-solid-arrow-left',
  'round-solid-arrow-right',
  'round-solid-arrow-bottom',
  'bar',
  'bar-1',
  'bar-2',
  'double-bar',
  'bow-tie',
  'play',
  'stop',
  'pause',
  'first',
  'last',
  'globe',
  'tako',
  'kebab',
  'cheese',
  'veggie',
  'meatball',
  'hamburger',
  'vespa',
] as const

export const IconColors = [
  'blue',
  'green',
  'light-green',
  'yellow',
  'dark',
  'light',
  'shade-dark',
  'shade-light',
] as const

export const IconSizes = [
  '12',
  '16',
  '20',
  '24',
  '32',
  '40',
  '48',
  '56',
  '60',
  '72',
  '80',
] as const

/** type */
export type IconType = typeof IconLists[number]
export type IconSizeType = typeof IconSizes[number]
export type IconColorType = typeof IconColors[number]

type IconProps = HTMLAttributes<HTMLSpanElement> & {
  icon: IconType
  size?: IconSizeType
  color?: IconColorType
}

const Icon = forwardRef<HTMLSpanElement, IconProps>(
  (props, ref): JSX.Element => {
    const {
      size = '16',
      icon = 'null-1',
      color,
      className,
      ...restProps
    } = props

    const sizeClasses: { [key in IconSizeType]: string } = {
      '12': 'w-[12px] h-[12px]',
      '16': 'w-[16px] h-[16px]',
      '20': 'w-[20px] h-[20px]',
      '24': 'w-[24px] h-[24px]',
      '32': 'w-[32px] h-[32px]',
      '40': 'w-[40px] h-[40px]',
      '48': 'w-[48px] h-[48px]',
      '56': 'w-[56px] h-[56px]',
      '60': 'w-[60px] h-[60px]',
      '72': 'w-[72px] h-[72px]',
      '80': 'w-[80px] h-[80px]',
    }

    const iconColorClasses: { [key in IconColorType]: string } = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      yellow: 'bg-yellow-500',
      dark: 'bg-dark-100',
      light: 'bg-light-100',
      'light-green': 'bg-light-green-500',
      'shade-dark': 'bg-shade-dark-500',
      'shade-light': 'bg-shade-light-500',
    }

    return (
      <span
        ref={ref}
        className={classNames(
          className,
          'inline-block',
          iconColorClasses[color!],
          sizeClasses[size],
        )}
        style={{
          WebkitMaskImage: icon ? `var(--icon-${icon})` : 'none',
          WebkitMaskSize: 'cover',
          maskImage: icon ? `var(--icon-${icon})` : 'none',
          maskSize: 'cover',
        }}
        {...restProps}
      />
    )
  },
)

export default Icon
