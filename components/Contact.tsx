import React, { useState, useRef } from 'react'
import { Section } from './ui/Section'
import { Card } from './ui/Card'
import { Button } from './ui/Button'
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, XCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const fieldName = e.target.name
    // Map EmailJS field names to state keys
    const stateKey =
      fieldName === 'user_name'
        ? 'name'
        : fieldName === 'user_email'
          ? 'email'
          : fieldName

    setFormData({
      ...formData,
      [stateKey]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      if (!formRef.current) return

      await emailjs.sendForm(
        'service_7s820hf', // Service ID
        'template_vd21isj', // Template ID
        formRef.current,
        'KdbPtntBA5-mFWHD3', // Public Key
      )

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      })
      setFormData({ name: '', email: '', message: '' })
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' })
      }, 5000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section
      id="contact"
      title="Let's Build Something"
      subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-lg text-slate-300">
            I'm currently available for internship opportunities and freelance
            projects. Feel free to reach out if you're looking for a developer
            who cares about code quality and user experience.
          </p>

          <div className="space-y-6">
            <Card className="p-4 flex items-center gap-4 bg-slate-800/30 border-none">
              <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <a
                  href="mailto:rihansenrith@gmail.com"
                  className="text-white font-medium hover:text-emerald-400 transition-colors"
                >
                  rihansenrith@gmail.com
                </a>
              </div>
            </Card>

            <Card className="p-4 flex items-center gap-4 bg-slate-800/30 border-none">
              <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <a
                  href="tel:+94779835388"
                  className="text-white font-medium hover:text-blue-400 transition-colors"
                >
                  +94 77 9835 388
                </a>
              </div>
            </Card>

            <Card className="p-4 flex items-center gap-4 bg-slate-800/30 border-none">
              <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Location</p>
                <p className="text-white font-medium">
                  Galle / Malabe, Sri Lanka
                </p>
              </div>
            </Card>
          </div>

          <div className="flex gap-4 pt-4">
            <Button variant="secondary" size="sm" href="https://github.com/SenrithFernando" external>
              <Github size={18} className="mr-2" />
              GitHub
            </Button>
            <Button variant="secondary" size="sm" href="https://www.linkedin.com/in/senrith-fernando-176559234/" external>
              <Linkedin size={18} className="mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>

        <Card className="p-8">
          <form
            ref={formRef}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus.type === 'success'
                    ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}
              >
                {submitStatus.type === 'success' ? (
                  <CheckCircle size={20} />
                ) : (
                  <XCircle size={20} />
                )}
                <p className="text-sm">{submitStatus.message}</p>
              </div>
            )}

            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-slate-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} className="ml-2" />
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  )
}
