/** lib */
import { forwardRef } from 'react'
import classNames from 'classnames'

/** components */
import Icon from '../Icon'

/** types */
import { ButtonSizeType, ButtonVariantType, CommonButtonType, ConditionButtonIconType } from '../../types/Button'

export type ButtonPropType = CommonButtonType & ConditionButtonIconType

const Button = forwardRef<HTMLButtonElement, ButtonPropType>((props, ref): JSX.Element => {
  /** destructuring */
  const {
    type = 'button',
    className,
    children,
    variants,
    iconLeft,
    iconRight,
    disabled = false,
    sizes = 'medium',
    onlyIcon = false,
    onClick,
    ...restProps
  } = props

  const buttonSizesClasses: { [key in ButtonSizeType]: string } = {
    small: onlyIcon ? 'min-h-[32px]' : 'min-h-[32px] font-normal font-vespa-thai-italic italic text-body-small',
    medium: onlyIcon ? 'min-h-[32px]' : 'min-h-[40px] font-normal font-vespa-thai-italic italic text-body',
    large: onlyIcon ? 'min-h-[32px]' : 'min-h-[40px] font-bold not-italic text-body',
  }

  const buttonVariantsClasses: {
    [key in ButtonVariantType]: string
  } = {
    primary: 'bg-green-500 text-light-100',
    secondary: 'bg-light-100 text-green-500',
    outline: 'bg-light-100 text-light-900',
  }

  const buttonHoverVariantsClasses: {
    [key in ButtonVariantType]: string
  } = {
    primary: '[&:not(:disabled)]:hover:bg-green-600 hover:text-light-100',
    secondary: '[&:not(:disabled)]:hover:bg-light-200',
    outline: '[&:not(:disabled)]:hover:bg-light-200',
  }

  const buttonActiveVariantsClasses: {
    [key in ButtonVariantType]: string
  } = {
    primary: '[&:not(:disabled)]:active:bg-green-700 [&:not(:disabled)]:active:text-light-100',
    secondary: '[&:not(:disabled)]:active:bg-light-200',
    outline: '[&:not(:disabled)]:active:bg-light-200',
  }

  const buttonDisabledVariantsClasses: {
    [key in ButtonVariantType]: string
  } = {
    primary: 'disabled:text-green-700',
    secondary: 'disabled:text-light-200',
    outline: 'disabled:text-light-200',
  }

  const iconDisabledVariantsClasses: {
    [key in ButtonVariantType]: string
  } = {
    primary: disabled ? 'bg-green-700' : 'bg-light-100',
    secondary: disabled ? 'bg-light-200' : 'bg-green-500',
    outline: disabled ? 'bg-light-200' : 'bg-light-900',
  }

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        'flex items-center justify-center gap-4',
        buttonSizesClasses[sizes],
        buttonVariantsClasses[variants],
        buttonHoverVariantsClasses[variants],
        buttonActiveVariantsClasses[variants],
        buttonDisabledVariantsClasses[variants],
        onlyIcon ? 'rounded-full p-8' : 'rounded py-4 px-16',
        className,
      )}
      {...restProps}
    >
      {iconLeft ? <Icon icon={iconLeft} className={iconDisabledVariantsClasses[variants]} /> : null}
      {children ? <span className="pt-4">{children}</span> : null}
      {iconRight ? <Icon icon={iconRight} className={iconDisabledVariantsClasses[variants]} /> : null}
    </button>
  )
})

export default Button
