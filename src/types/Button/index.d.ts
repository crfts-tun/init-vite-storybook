/** lib */
import { ButtonHTMLAttributes } from 'react'

/** constance */
import { ButtonSizeList, ButtonVariantList } from '../../constance/Button'

/** type */
import { IconType } from '../Icon'

type ButtonVariantType = typeof ButtonVariantList[number]
type ButtonSizeType = typeof ButtonSizeList[number]

type CommonButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  sizes?: ButtonSizeType
  variants: ButtonVariantType
  iconLeft?: IconType
  isLoading?: boolean
}

type ConditionButtonIconType =
  | {
      onlyIcon?: never
      iconRight?: IconType
    }
  | {
      onlyIcon?: boolean
      iconRight?: never
    }

export type {
  ButtonSizeType,
  ButtonVariantType,
  CommonButtonType,
  ConditionButtonIconType,
}