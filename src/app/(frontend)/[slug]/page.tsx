import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { generateMeta } from '@/utilities/generateMeta'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page() {
  // Since we removed pages collection, show 404 for unknown routes
  return notFound()
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise

  return generateMeta({ doc: null, title: `${slug} - Page Not Found` })
}
