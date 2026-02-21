import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faEnvelope, 
  faPaperPlane, 
  faCheck, 
  faExclamationCircle 
} from '@fortawesome/free-solid-svg-icons'
import { 
  faTelegram, 
  faGithub, 
  faLinkedin,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import FadeIn from './FadeIn'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const contactMethods = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
      color: '#ea4335',
    },
    {
      icon: faTelegram,
      label: 'Telegram',
      value: '@username',
      href: 'https://t.me/username',
      color: '#0088cc',
    },
    {
      icon: faWhatsapp,
      label: 'WhatsApp',
      value: '+1 234 567 8900',
      href: 'https://wa.me/12345678900',
      color: '#25d366',
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
      href: 'https://linkedin.com/in/username',
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
    
    // Имитация отправки формы
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
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
            Открыт для новых проектов и интересных предложений
          </p>
        </FadeIn>

        <div className="contact-content">
          <FadeIn delay={0.3}>
            <div className="contact-methods">
              {contactMethods.map((method) => (
                <a 
                  key={method.label}
                  href={method.href}
                  className="contact-method-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--accent-color': method.color }}
                >
                  <div 
                    className="method-icon"
                    style={{ 
                      background: `rgba(${hexToRgb(method.color)}, 0.1)`,
                      color: method.color 
                    }}
                  >
                    <FontAwesomeIcon icon={method.icon} />
                  </div>
                  <div className="method-info">
                    <span className="method-label">{method.label}</span>
                    <span className="method-value">{method.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="contact-divider">
              <span>или напишите мне</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <form className="contact-form" onSubmit={handleSubmit}>
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

              <button 
                type="submit" 
                className={`btn btn-primary btn-submit ${status}`}
                disabled={status === 'loading' || status === 'success'}
              >
                {status === 'loading' && (
                  <span className="spinner"></span>
                )}
                {status === 'success' && (
                  <>
                    <FontAwesomeIcon icon={faCheck} />
                    Отправлено!
                  </>
                )}
                {status === 'idle' && (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} />
                    Отправить сообщение
                  </>
                )}
              </button>

              {status === 'error' && (
                <div className="form-error">
                  <FontAwesomeIcon icon={faExclamationCircle} />
                  Произошла ошибка. Попробуйте позже.
                </div>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function hexToRgb(hex) {
  if (hex === '#ffffff') return '255, 255, 255'
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result 
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '100, 100, 100'
}

export default Contact
