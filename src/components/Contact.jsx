import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPaperPlane, faCheck, faRobot } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import FadeIn from './FadeIn'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const contactMethods = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'hello@aidev.com',
      href: 'mailto:hello@aidev.com',
      color: '#ea4335',
    },
    {
      icon: faTelegram,
      label: 'Telegram',
      value: '@aidev',
      href: 'https://t.me/aidev',
      color: '#0088cc',
    },
    {
      icon: faGithub,
      label: 'GitHub',
      value: 'esthe4amb',
      href: 'https://github.com/esthe4amb',
      color: '#ffffff',
    },
    {
      icon: faLinkedin,
      label: 'LinkedIn',
      value: 'LinkedIn',
      href: 'https://linkedin.com/in/aidev',
      color: '#0077b5',
    },
  ]

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Контакты</h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="section-subtitle">
            Готов обсудить ваш следующий проект
          </p>
        </FadeIn>

        <div className="contact-content">
          <FadeIn delay={0.3}>
            <div className="contact-methods">
              {contactMethods.map((method) => (
                <motion.a 
                  key={method.label}
                  href={method.href}
                  className="contact-method-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, borderColor: method.color }}
                  style={{ '--accent-color': method.color }}
                >
                  <div 
                    className="method-icon"
                    style={{ 
                      background: `${method.color}15`,
                      color: method.color 
                    }}
                  >
                    <FontAwesomeIcon icon={method.icon} />
                  </div>
                  <div className="method-info">
                    <span className="method-label">{method.label}</span>
                    <span className="method-value">{method.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="contact-divider">
              <span>или напишите мне</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <motion.form 
              className="contact-form" 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Тема</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="О проекте"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Расскажите о вашем проекте..."
                  rows={5}
                  required
                />
              </div>

              <motion.button 
                type="submit" 
                className={`btn btn-primary btn-submit ${status}`}
                disabled={status === 'loading' || status === 'success'}
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
              >
                {status === 'loading' && <span className="spinner"></span>}
                {status === 'success' && (
                  <>
                    <FontAwesomeIcon icon={faCheck} />
                    Отправлено!
                  </>
                )}
                {status === 'idle' && (
                  <>
                    <FontAwesomeIcon icon={faRobot} />
                    Отправить с AI
                  </>
                )}
              </motion.button>
            </motion.form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default Contact
