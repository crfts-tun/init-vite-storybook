import { IconLists, IconSizes, IconColors } from '../../constance/Icon'

type IconType = typeof IconLists[number]
type IconSizeType = typeof IconSizes[number]
type IconColorType = typeof IconColors[number]

export type {
  IconType,
  IconSizeType,
  IconColorType
}