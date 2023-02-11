/** lib */
import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

/** constance */
import { iconList, iconSizes, iconColors } from '@const/icons'

/** type */
export type IconType = typeof iconList[number]
export type IconSizeType = typeof iconSizes[number]
export type IconColorType = typeof iconColors[number]

type IconProps = HTMLAttributes<HTMLSpanElement> & {
  icon: IconType
  size?: IconSizeType
  color?: IconColorType
}

const Icon = forwardRef<HTMLSpanElement, IconProps>(
  (props, ref): JSX.Element => {
    const {
      className,
      icon,
      size = '16',
      color = 'blue',
      ...restProps
    } = props

    const sizeClasses: { [key in IconSizeType]: string } = {
      '12': 'w-[12px] h-[12px]',
      '16': 'w-[16px] h-[16px]',
      '20': 'w-[20px] h-[20px]',
      '24': 'w-[24px] h-[24px]',
      '32': 'w-[32px] h-[32px]',
      '40': 'w-[40px] h-[40px]',
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
          'block',
          iconColorClasses[color],
          sizeClasses[size],
          className,
        )}
        style={{
          WebkitMaskImage: icon ? `var(--icon-${icon})` : 'none',
          maskImage: icon ? `var(--icon-${icon})` : 'none',
        }}
        {...restProps}
      />
    )
  },
)

export default Icon
