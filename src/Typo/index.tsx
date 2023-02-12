import React, { forwardRef, HTMLAttributes } from 'react'

import {
  htmlTags,
  textSizes,
  textStyles,
  textWeights,
} from '@const/typo'
import classNames from 'classnames'

export type HTMLTagType = typeof htmlTags[number]
export type TextSizeType = typeof textSizes[number]
export type TextStyleType = typeof textStyles[number]
export type TextWeightType = typeof textWeights[number]

type TypoProps = HTMLAttributes<
  HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement
> & {
  as: HTMLTagType
  size: TextSizeType
  textStyle: TextStyleType
  weight: TextWeightType
}

type TypoForwardRefType = HTMLHeadingElement &
  HTMLParagraphElement &
  HTMLSpanElement

const Typo = forwardRef<TypoForwardRefType, TypoProps>(
  (
    {
      as,
      size = 'body',
      weight = 'normal',
      textStyle = 'normal',
      className,
      ...restProps
    },
    ref,
  ) => {
    /** change font size */
    const fontSizeClasses: { [key in TextSizeType]: string } = {
      'title-large': 'title-large',
      'title-medium': 'title-medium',
      'title-small': 'title-small',
      'title-small-alt': 'title-small-alt',
      'body-large': 'body-large',
      body: 'body',
      'body-small': 'body-small',
      caption: 'caption',
    }

    /** change font weight */
    const fontWeightClasses: { [key in TextWeightType]: string } = {
      normal: 'font-normal',
      bold: 'font-bold',
    }

    /** change font style */
    const fontStyleClasses: { [key in TextStyleType]: string } = {
      normal: 'not-italic',
      italic: 'italic',
    }

    /** change tag name */
    const TagName = as

    return (
      <TagName
        ref={ref}
        className={classNames(
          fontSizeClasses[size],
          fontWeightClasses[weight],
          fontStyleClasses[textStyle],
          className,
        )}
        {...restProps}
      >
        Typo
      </TagName>
    )
  },
)

export default Typo
