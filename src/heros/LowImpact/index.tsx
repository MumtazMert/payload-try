import React from 'react'

import RichText from '@/components/RichText'

type HeroType = {
  children?: React.ReactNode
  richText?: any
}

type LowImpactHeroType =
  | {
      children?: React.ReactNode
      richText?: never
    }
  | (Omit<HeroType, 'richText'> & {
      children?: never
      richText?: HeroType['richText']
    })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({ children, richText }) => {
  return (
    <div className="container mt-16">
      <div className="max-w-[48rem]">
        {children || (richText && <RichText data={richText} enableGutter={false} />)}
      </div>
    </div>
  )
}
