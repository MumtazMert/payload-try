import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { authenticated } from '../access/authenticated'
import { anyone } from '../access/anyone'
import { revalidateContactUs } from './hooks/revalidateContactUs'

export const ContactUs: CollectionConfig = {
  slug: 'contact-us',
  access: {
    read: anyone,
    update: authenticated,
    create: authenticated,
    delete: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Contact Us',
      admin: {
        description: 'Main heading for the contact page',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      admin: {
        description: 'Optional subtitle or tagline',
      },
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor(),
      admin: {
        description: 'Main content for the contact page',
      },
    },
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Contact Information',
      fields: [
        {
          name: 'email',
          type: 'email',
          admin: {
            description: 'Primary contact email',
          },
        },
        {
          name: 'phone',
          type: 'text',
          admin: {
            description: 'Phone number',
          },
        },
        {
          name: 'address',
          type: 'textarea',
          admin: {
            description: 'Physical address',
          },
        },
      ],
    },
    {
      name: 'businessHours',
      type: 'array',
      label: 'Business Hours',
      fields: [
        {
          name: 'day',
          type: 'text',
          required: true,
        },
        {
          name: 'hours',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        description: 'Operating hours for each day',
        initCollapsed: true,
      },
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Media Links',
      fields: [
        {
          name: 'platform',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'https://example.com',
          },
        },
      ],
      admin: {
        description: 'Social media profiles',
        initCollapsed: true,
      },
    },
    {
      name: 'meta',
      type: 'group',
      label: 'SEO Meta',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'SEO title for the contact page',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'SEO description for the contact page',
          },
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateContactUs],
  },
}
