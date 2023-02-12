const htmlTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'] as const
const textSizes = [
  'title-large',
  'title-medium',
  'title-small',
  'title-small-alt',
  'body-large',
  'body',
  'body-small',
  'caption',
] as const
const textStyles = ['italic', 'normal'] as const
const textWeights = ['bold', 'normal'] as const

export {
  htmlTags,
  textSizes,
  textWeights,
  textStyles
}