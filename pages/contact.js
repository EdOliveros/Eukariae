import React from 'react'
import { ContactFormSection } from '@sections/ContactFormSection'
import { ContactInfoSection } from '@sections/ContactInfoSection'

const ContactPage = () => {
  return (
    <div className="bg-bg-base dark:bg-bg-base-dark min-h-screen">
      <ContactInfoSection />
      <div className="pb-20">
        <ContactFormSection />
      </div>
    </div>
  )
}

export default ContactPage
