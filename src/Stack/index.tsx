import classNames from 'classnames'
import { forwardRef, HTMLAttributes } from 'react'

type StackProps = HTMLAttributes<HTMLDivElement> & {
  direction: 'horizon' | 'vertical'
  gap: 0 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40
}

const Stack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const { children, direction = 'horizon', gap = 4 } = props

  const IconDirectionClasses: {
    [key in StackProps['direction']]: string
  } = {
    horizon: 'flex-row',
    vertical: 'flex-col',
  }
  const IconGapClasses: {
    [key in StackProps['gap']]: string
  } = {
    0: 'gap-0',
    4: 'gap-4',
    8: 'gap-8',
    12: 'gap-12',
    16: 'gap-16',
    20: 'gap-20',
    24: 'gap-24',
    32: 'gap-32',
    40: 'gap-40',
  }

  return (
    <div
      ref={ref}
      className={classNames(
        'flex flex-wrap',
        IconDirectionClasses[direction],
        IconGapClasses[gap],
      )}
    >
      {children}
    </div>
  )
})

export default Stack
