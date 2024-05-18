// ContactUsSection.tsx

import React from 'react'

const ContactUsSection: React.FC = () => {
  return (
    <section id="contact-us">
      <div className="container mx-auto py-12">
        <h2 className="mb-8 text-center text-4xl font-bold">Contact Us</h2>
        <p className="text-center">
          Have questions or want to get in touch? Feel free to reach out to us at{' '}
          <a href="mailto:talam@auroville.org.in" className="text-blue-500 hover:underline">
            talam@auroville.org.in
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export default ContactUsSection
