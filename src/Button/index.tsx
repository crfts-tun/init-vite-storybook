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
      iconPosition,
      children,
      type,
      sizes = 'medium',
      variants,
      ...restProps
    } = props

    const ButtonSizes: { [key in Sizes]: string } = {
      'ex-small': '',
      small: '',
      medium: '',
      large: '',
      'ex-large': '',
    }

    const ButtonVariants: { [key in Variants]: string } = {
      outline: '',
      primary: '',
      secondary: '',
    }

    return (
      <button
        ref={ref}
        type={type}
        {...restProps}
        className={classNames(
          ButtonVariants[variants],
          ButtonSizes[sizes],
        )}
      >
        {children}
      </button>
    )
  },
)

export default Button
