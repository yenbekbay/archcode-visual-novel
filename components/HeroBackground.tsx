import clsx from 'clsx'
import {StaticImageData} from 'next/future/image'
import React from 'react'
import {ParallaxBanner} from 'react-scroll-parallax'

export interface HeroBackgroundProps
  extends React.ComponentPropsWithoutRef<'div'> {
  src?: string | StaticImageData
  speed?: number
  containerClassName?: string
}

export function HeroBackground({
  src,
  speed = -16,
  containerClassName,
  className,
  style,
  ...restProps
}: HeroBackgroundProps) {
  return (
    <div className={clsx('absolute inset-0 -z-10', containerClassName)}>
      <ParallaxBanner
        className="h-full"
        layers={[
          {
            children: (
              <div
                className={clsx('h-full w-full', className)}
                style={{
                  backgroundImage: `url(${
                    typeof src === 'object' ? src.src : src
                  })`,
                  ...style,
                }}
                {...restProps}
              />
            ),
            speed,
          },
        ]}
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  )
}