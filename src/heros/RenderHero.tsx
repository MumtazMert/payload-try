import React from 'react'

import { HighImpactHero } from '@/heros/HighImpact'
import { LowImpactHero } from '@/heros/LowImpact'
import { MediumImpactHero } from '@/heros/MediumImpact'

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
}

type HeroProps = {
  type?: 'highImpact' | 'lowImpact' | 'mediumImpact' | 'none'
  [key: string]: any
}

export const RenderHero: React.FC<HeroProps> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  const HeroComponent = HeroToRender as React.ComponentType<any>
  return <HeroComponent {...props} disableInnerContainer />
}
