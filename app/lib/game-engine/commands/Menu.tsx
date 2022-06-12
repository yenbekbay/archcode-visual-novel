import type {CommandProps} from '../components'
import {Command} from '../components'
import type {ImageViewProps, MenuViewProps} from './views'
import {ImageView, MenuView} from './views'

export interface MenuProps
  extends Pick<CommandProps, 'hide' | 'next' | 'zIndex'>,
    Omit<MenuViewProps, 'controls'> {
  image?: string | Omit<ImageViewProps, 'controls'>
}

export function Menu({image, hide, next, zIndex, ...menuProps}: MenuProps) {
  const imageProps = typeof image === 'string' ? {uri: image} : image
  return (
    <Command
      name="Menu"
      behavior={['non_skippable']}
      hide={hide}
      next={next}
      zIndex={zIndex}>
      {(controls) => (
        <>
          {imageProps && <ImageView controls={controls} {...imageProps} />}
          <MenuView controls={controls} {...menuProps} />
        </>
      )}
    </Command>
  )
}
