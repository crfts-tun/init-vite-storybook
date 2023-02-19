/** lib */
import { ButtonHTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'

/** components */
import Icon, { IconType } from '../Icon'

/** types */
export type ButtonVariantType = 'primary' | 'secondary' | 'outline'
export type ButtonSizeType = 'small' | 'medium' | 'large'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconLeft?: IconType
  iconRight?: IconType
  sizes?: ButtonSizeType
  variants: ButtonVariantType
  onlyIcon?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref): JSX.Element => {
    const {
      type = 'button',
      className,
      children,
      variants = 'primary',
      iconLeft,
      iconRight,
      disabled = false,
      sizes = 'medium',
      onlyIcon = false,
      onClick,
      ...restProps
    } = props

    const ButtonSizesClasses: { [key in ButtonSizeType]: string } = {
      small: onlyIcon
        ? 'min-h-[32px]'
        : 'min-h-[32px] font-normal italic text-body-small',
      medium: onlyIcon
        ? 'min-h-[32px]'
        : 'min-h-[40px] font-normal italic text-body',
      large: onlyIcon
        ? 'min-h-[32px]'
        : 'min-h-[40px] font-bold not-italic text-body',
    }

    const ButtonVariantsClasses: {
      [key in ButtonVariantType]: string
    } = {
      primary: 'bg-green-500 text-light-100',
      secondary: 'bg-light-100 text-green-500',
      outline: 'bg-light-100 text-light-900',
    }

    const ButtonHoverVariantsClasses: {
      [key in ButtonVariantType]: string
    } = {
      primary:
        '[&:not(:disabled)]:hover:bg-green-600 hover:text-light-100',
      secondary: '[&:not(:disabled)]:hover:bg-light-200',
      outline: '[&:not(:disabled)]:hover:bg-light-200',
    }

    const ButtonActiveVariantsClasses: {
      [key in ButtonVariantType]: string
    } = {
      primary:
        '[&:not(:disabled)]:active:bg-green-700 [&:not(:disabled)]:active:text-light-100',
      secondary: '[&:not(:disabled)]:active:bg-light-200',
      outline: '[&:not(:disabled)]:active:bg-light-200',
    }

    const ButtonDisabledVariantsClasses: {
      [key in ButtonVariantType]: string
    } = {
      primary: 'disabled:text-green-700',
      secondary: 'disabled:text-light-200',
      outline: 'disabled:text-light-200',
    }

    const IconVariantsClasses: {
      [key in ButtonVariantType]: string
    } = {
      primary: 'bg-light-100',
      secondary: 'bg-green-500',
      outline: 'bg-light-900',
    }

    const IconDisabledVariantsClasses: {
      [key in ButtonVariantType]: string
    } = {
      primary: disabled ? 'bg-green-700' : '',
      secondary: disabled ? 'bg-light-200' : '',
      outline: disabled ? 'bg-light-200' : '',
    }

    const TextDisabledVariantsClasses: {
      [key in ButtonVariantType]: string
    } = {
      primary: disabled ? 'text-green-700' : '',
      secondary: disabled ? 'text-light-200' : '',
      outline: disabled ? 'text-light-200' : '',
    }

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={classNames(
          'flex items-center justify-center gap-4',
          ButtonSizesClasses[sizes],
          ButtonVariantsClasses[variants],
          ButtonHoverVariantsClasses[variants],
          ButtonActiveVariantsClasses[variants],
          ButtonDisabledVariantsClasses[variants],
          onlyIcon ? 'rounded-full p-8' : 'rounded py-4 px-16',
          className,
        )}
        {...restProps}
      >
        {iconLeft ? (
          <Icon
            icon={iconLeft}
            className={classNames(
              IconVariantsClasses[variants],
              IconDisabledVariantsClasses[variants],
            )}
          />
        ) : null}
        {children}
        {iconRight ? (
          <Icon
            icon={iconRight}
            className={classNames(
              IconVariantsClasses[variants],
              IconDisabledVariantsClasses[variants],
            )}
          />
        ) : null}
      </button>
    )
  },
)

export default Button
