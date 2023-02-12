/** lib */
import { ButtonHTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'

/** type */
import { Variants, Sizes } from '@type/button'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconPosition?: 'left' | 'right'
  sizes: Sizes
  variants: Variants
  rounded: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref): JSX.Element => {
    const {
      type,
      iconPosition,
      children,
      sizes = 'medium',
      variants,
      disabled,
      onClick,
      ...restProps
    } = props

    const ButtonSizes: { [key in Sizes]: string } = {
      small: '',
      medium: '',
      large: '',
    }

    const ButtonVariants: { [key in Variants]: string } = {
      primary: 'bg-green-500 text-light-100',
      secondary: '',
      outline: '',
    }

    const ButtonHoverVariants: { [key in Variants]: string } = {
      primary: '',
      secondary: '',
      outline: '',
    }

    const ButtonActiveVariants: { [key in Variants]: string } = {
      primary: '',
      secondary: '',
      outline: '',
    }

    const ButtonDisabledVariants: { [key in Variants]: string } = {
      primary: '',
      secondary: '',
      outline: '',
    }

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        className={classNames(
          'text-green-500',
          ButtonSizes[sizes],
          ButtonVariants[variants],
          ButtonHoverVariants[variants],
          ButtonActiveVariants[variants],
          ButtonDisabledVariants[variants],
        )}
        {...restProps}
      >
        {children}
      </button>
    )
  },
)

export default Button
