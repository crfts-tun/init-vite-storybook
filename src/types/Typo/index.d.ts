type HTMLTagType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
type TextSizeType =
  | 'title-large'
  | 'title-medium'
  | 'title-small'
  | 'title-small-alt'
  | 'body-large'
  | 'body'
  | 'body-small'
  | 'caption'
type TextStyleType = 'italic' | 'normal'
type TextWeightType = 'bold' | 'normal'

export type {
  HTMLTagType,
  TextSizeType,
  TextStyleType,
  TextWeightType
}