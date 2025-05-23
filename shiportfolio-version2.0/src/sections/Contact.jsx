import React from 'react'
import { IoMdMail } from 'react-icons/io'
import { IoIosPhonePortrait } from 'react-icons/io'
import { IoLogoGithub } from 'react-icons/io'
import { ABOUT_ME } from '../utils/data'
import ContactInfoCard from '../components/ContactInfoCard'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.section
      id='contact'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className='container mx-auto p-10'>
        <motion.div
          className='w-full lg:w-[60vw] mx-auto'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className='section-title'>Contact Info</h4>
          <p className='text-sm text-center mt-4 leading-6'>
            Feel free to reach out to me for collaboration, project inquiries,
            or just to say hello—I'd love to connect!
          </p>
        </motion.div>

        <motion.div
          className='grid md:gap-16 mt-10'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactInfoCard icon={<IoIosPhonePortrait />} text={ABOUT_ME.phone} />
            <ContactInfoCard icon={<IoLogoGithub />} text={ABOUT_ME.github} />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
      <div className="bg-white py-1 px-6 md:px-12 text-center mt-10">
        <h4 className='section-title'>Need Fastest Response?</h4>
        <p className="text-sm text-center mt-4 leading-6">
          Connect with me directly through Telegram or Email for the fastest response.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
         {/* Telegram link */}
          <a
            href="https://t.me/shishi_ww"
            target="_blank"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-300 text-gray-900 rounded-md text-sm font-medium transition dark:bg-indigo-500 dark:text-white"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4.5-1.032L3 20l1.5-4.5A8.94 8.94 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Connect on Telegram
          </a>

          {/* Email link */}
          <a
            href="mailto:wahwint72@gmail.com"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-900 transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
              />
            </svg>

            Get in touch by email
          </a>

          {/* LinkTree link */}
          <a
              href="https://linktr.ee/shishii24"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-300 text-black rounded-md text-sm font-medium shadow-sm transition"
            >
          <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
           <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6m0 0v6m0-6H6m6 0h6"
             />
            </svg>
              Check out my Linktree
            </a>
          
        </div>
      </div>
      </motion.div>
    </motion.section>
  )
}

export default Contact
