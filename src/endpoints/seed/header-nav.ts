import type { Payload } from 'payload'

export const seedHeaderNav = async (payload: Payload): Promise<void> => {
  try {
    // Update Header global with navigation links
    await payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              url: '/posts',
              label: 'Posts',
              newTab: false,
            },
          },
          {
            link: {
              type: 'custom',
              url: '/contact-us',
              label: 'Contact Us',
              newTab: false,
            },
          },
        ],
      },
    })

    console.log('✅ Header navigation seeded successfully')
  } catch (error) {
    console.error('❌ Error seeding header navigation:', error)
    throw error
  }
}
