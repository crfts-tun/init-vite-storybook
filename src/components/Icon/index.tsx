/** lib */
import { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

/** type */
import { IconColorType, IconSizeType, IconType } from '../../types/Icon'

export type IconProps = HTMLAttributes<HTMLDivElement> & {
  icon: IconType
  size?: IconSizeType
  color?: IconColorType
}

const Icon = forwardRef<HTMLDivElement, IconProps>((props, ref): JSX.Element => {
  /** destructuring */
  const { size = '16', icon = 'null-1', color = 'blue', className, ...restProps } = props

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
    <div ref={ref} className={classNames('text-[0px]', sizeClasses[size])} {...restProps}>
      <span
        className={classNames('inline-block w-full h-full', className, iconColorClasses[color])}
        style={{
          WebkitMaskImage: icon ? `var(--icon-${icon})` : 'none',
          WebkitMaskSize: 'cover',
          maskImage: icon ? `var(--icon-${icon})` : 'none',
          maskSize: 'cover',
        }}
      />
    </div>
  )
})

export default Icon
