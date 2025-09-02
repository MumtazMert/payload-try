import type { Metadata } from 'next/types'

import RichText from '@/components/RichText'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function ContactUsPage() {
  const payload = await getPayload({ config: configPromise })

  const contactUsResult = await payload.find({
    collection: 'contact-us',
    limit: 1,
  })

  const contactUsData = contactUsResult.docs[0]

  if (!contactUsData) {
    return (
      <div className="container pt-24 pb-24">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Contact Us</h1>
          <p>Contact information is not available at this time.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              {contactUsData.title || 'Contact Us'}
            </h1>
            {contactUsData.subtitle && (
              <p className="text-xl text-muted-foreground">{contactUsData.subtitle}</p>
            )}
          </div>

          {/* Main Content */}
          {contactUsData.content && (
            <div className="prose dark:prose-invert max-w-none mb-16">
              <RichText data={contactUsData.content} enableGutter={false} />
            </div>
          )}

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Contact Info */}
            {contactUsData.contactInfo && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

                {contactUsData.contactInfo.email && (
                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href={`mailto:${contactUsData.contactInfo.email}`}
                        className="text-primary hover:underline"
                      >
                        {contactUsData.contactInfo.email}
                      </a>
                    </div>
                  </div>
                )}

                {contactUsData.contactInfo.phone && (
                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href={`tel:${contactUsData.contactInfo.phone}`}
                        className="text-primary hover:underline"
                      >
                        {contactUsData.contactInfo.phone}
                      </a>
                    </div>
                  </div>
                )}

                {contactUsData.contactInfo.address && (
                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {contactUsData.contactInfo.address}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Business Hours and Social Links */}
            <div className="space-y-8">
              {/* Business Hours */}
              {contactUsData.businessHours && contactUsData.businessHours.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
                  <div className="space-y-2">
                    {contactUsData.businessHours.map((item: any, index: number) => (
                      <div
                        key={index}
                        className="flex justify-between py-2 border-b border-border last:border-b-0"
                      >
                        <span className="font-medium">{item.day}</span>
                        <span className="text-muted-foreground">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Links */}
              {contactUsData.socialLinks && contactUsData.socialLinks.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
                  <div className="space-y-3">
                    {contactUsData.socialLinks.map((social: any, index: number) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-primary hover:underline"
                      >
                        <span className="font-medium">{social.platform}</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise })

  const contactUsResult = await payload.find({
    collection: 'contact-us',
    limit: 1,
  })

  const contactUsData = contactUsResult.docs[0]

  return {
    title: contactUsData?.meta?.title || contactUsData?.title || 'Contact Us',
    description:
      contactUsData?.meta?.description || "Get in touch with us. We'd love to hear from you.",
  }
}
