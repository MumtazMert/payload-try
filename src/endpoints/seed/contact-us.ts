import type { Payload } from 'payload'

export const seedContactUs = async (payload: Payload): Promise<void> => {
  try {
    // Check if Contact Us data already exists
    const existing = await payload.find({
      collection: 'contact-us',
      limit: 1,
    })

    // Only seed if no data exists
    if (!existing.docs || existing.docs.length === 0) {
      await payload.create({
        collection: 'contact-us',
        data: {
          title: 'Contact Us',
          subtitle:
            "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
          content: {
            root: {
              type: 'root',
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
              children: [
                {
                  type: 'paragraph',
                  version: 1,
                  children: [
                    {
                      type: 'text',
                      text: "Whether you have a question about our services, need technical support, or just want to say hello, we're here to help. Our team is dedicated to providing you with the best possible experience.",
                    },
                  ],
                },
                {
                  type: 'paragraph',
                  version: 1,
                  children: [
                    {
                      type: 'text',
                      text: "Feel free to reach out using any of the contact methods below, and we'll get back to you as soon as possible.",
                    },
                  ],
                },
              ],
            },
          },
          contactInfo: {
            email: 'hello@example.com',
            phone: '+1 (555) 123-4567',
            address: '123 Main Street\nSuite 100\nNew York, NY 10001\nUnited States',
          },
          businessHours: [
            { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
            { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
            { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
            { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
            { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
            { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
            { day: 'Sunday', hours: 'Closed' },
          ],
          socialLinks: [
            { platform: 'Twitter', url: 'https://twitter.com/yourcompany' },
            { platform: 'LinkedIn', url: 'https://linkedin.com/company/yourcompany' },
            { platform: 'Facebook', url: 'https://facebook.com/yourcompany' },
            { platform: 'Instagram', url: 'https://instagram.com/yourcompany' },
          ],
          meta: {
            title: 'Contact Us - Get in Touch',
            description:
              "Contact us for questions, support, or partnerships. We're here to help and would love to hear from you.",
          },
        },
        context: {
          disableRevalidate: true,
        },
      })

      console.log('✅ Contact Us data seeded successfully')
    } else {
      console.log('ℹ️  Contact Us data already exists, skipping seed')
    }
  } catch (error) {
    console.error('❌ Error seeding Contact Us data:', error)
    throw error
  }
}
