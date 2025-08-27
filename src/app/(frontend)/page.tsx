import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 6, // Show 6 recent posts on homepage
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      meta: true,
    },
    sort: '-publishedAt', // Show newest posts first
  })

  return (
    <div className="pt-24 pb-24">
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Welcome to Our Blog</h1>
          <p>Discover our latest posts and stories.</p>
        </div>
      </div>

      {posts.docs.length > 0 ? (
        <>
          <div className="container mb-8">
            <div className="prose dark:prose-invert">
              <h2>Recent Posts</h2>
            </div>
          </div>
          <CollectionArchive posts={posts.docs} />
        </>
      ) : (
        <div className="container">
          <div className="prose dark:prose-invert max-w-none">
            <p>No posts available yet. Check back soon!</p>
          </div>
        </div>
      )}
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Home - Payload Website Template',
    description: 'Welcome to our blog. Discover our latest posts and stories.',
  }
}
