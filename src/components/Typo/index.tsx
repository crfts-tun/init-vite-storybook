/** libs */
import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

/** types */
import { HTMLTagType, TextSizeType, TextStyleType, TextWeightType } from '../../types/Typo'

type TypoProps = HTMLAttributes<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement> & {
  as: HTMLTagType
  size: TextSizeType
  textStyle: TextStyleType
  weight: TextWeightType
}

type TypoForwardRefType = HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement

const Typo = forwardRef<TypoForwardRefType, TypoProps>((props, ref) => {
  /** destructuring */
  const { as = 'p', size = 'body', weight = 'normal', textStyle = 'normal', className, children, ...restProps } = props

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
        as === 'span' ? 'inline-block' : 'block',
        fontSizeClasses[size],
        fontWeightClasses[weight],
        fontStyleClasses[textStyle],
        className,
      )}
      {...restProps}
    >
      {children}
    </TagName>
  )
})

export default Typo
