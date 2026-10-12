import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  User,
  MessageSquare,
  Tag,
  Loader2,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const QUICK_SUBJECTS = [
  '💼 Job Opportunity',
  '🚀 Project Collaboration',
  '💬 Freelance Work',
  '☕ Say Hello'
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'shreepatil9259@gmail.com';
  const contactPhone = '+91 8767953427';
  const contactLocation = 'Kolhapur, Maharashtra';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuickSubject = (subjectText) => {
    setFormData((prev) => ({ ...prev, subject: subjectText }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      const textArea = document.createElement('textarea');
      textArea.value = contactEmail;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    // Access key from Vite environment variable
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // If key has not been configured yet, inform the user or provide direct mailto
    if (!accessKey || accessKey === 'your_web3forms_access_key_here') {
      setStatus('error');
      setStatusMessage(
        'Email delivery key is not configured yet. Please configure VITE_WEB3FORMS_ACCESS_KEY or click below to send directly via your email app.'
      );
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || `New inquiry from ${formData.name}`,
          message: formData.message.trim(),
          from_name: `${formData.name} (Portfolio Contact)`,
          replyto: formData.email.trim()
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setStatusMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setStatusMessage('Network connection error. Please check your internet or reach out directly.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setStatus('idle');
    setStatusMessage('');
  };

  // Direct mailto link fallback
  const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Hi Shreyas,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="contact-section section bg-alt">
      <div className="container">
        <h2 className="section-title fade-in visible">Get In Touch</h2>
        <p className="section-subtitle fade-in visible">
          Have an opportunity, a project idea, or just want to chat? I'd love to hear from you.
        </p>

        <div className="contact-content">
          {/* Left Column: Contact Information */}
          <div className="contact-info fade-in visible">
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>Available for opportunities & freelance</span>
            </div>

            <h3 className="contact-heading">Let's Connect & Collaborate</h3>
            <p className="contact-description">
              Whether you're looking for a DevOps/Linux engineer, full-stack developer, or just want to discuss ideas, my inbox is always open.
            </p>

            <div className="contact-details">
              {/* Email */}
              <div className="contact-card">
                <div className="contact-icon email-icon">
                  <Mail size={22} />
                </div>
                <div className="contact-card-info">
                  <h4>Email</h4>
                  <a href={`mailto:${contactEmail}`} className="contact-link" title="Click to email">
                    {contactEmail}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  title={copiedEmail ? 'Copied to clipboard!' : 'Copy email address'}
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                  <span className="copy-tooltip">{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone */}
              <div className="contact-card">
                <div className="contact-icon phone-icon">
                  <Phone size={22} />
                </div>
                <div className="contact-card-info">
                  <h4>Phone</h4>
                  <a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="contact-link" title="Click to call">
                    {contactPhone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-card">
                <div className="contact-icon location-icon">
                  <MapPin size={22} />
                </div>
                <div className="contact-card-info">
                  <h4>Location</h4>
                  <p>{contactLocation}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h4>Follow & Connect</h4>
              <div className="social-links">
                <a
                  href="https://github.com/Shreepatil9259"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="social-btn github"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shreyas-patil-1b66a125b"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="social-btn linkedin"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://x.com/shreerajepatil"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X Profile"
                  className="social-btn twitter"
                >
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-container fade-in visible">
            {status === 'success' ? (
              <div className="form-success-card">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={54} />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you, <strong>{formData.name || 'there'}</strong>! Your message has been sent to Shreyas. A reply will be sent to <strong>{formData.email}</strong> shortly.
                </p>
                <button type="button" className="btn btn-primary reset-btn" onClick={handleReset}>
                  <Sparkles size={18} style={{ marginRight: '8px' }} />
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-header">
                  <h3>Send a Direct Message</h3>
                  <p>Fill out the form below and it will be delivered directly to my email.</p>
                </div>

                {status === 'error' && (
                  <div className="form-alert error-alert">
                    <AlertCircle size={20} className="alert-icon" />
                    <div className="alert-body">
                      <p>{statusMessage}</p>
                      <a href={mailtoUrl} className="fallback-mailto-btn">
                        <ExternalLink size={14} style={{ marginRight: '6px' }} />
                        Send via Default Email App
                      </a>
                    </div>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      Full Name <span className="required-star">*</span>
                    </label>
                    <div className="input-with-icon">
                      <User size={18} className="input-icon" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        required
                        autoComplete="name"
                        disabled={status === 'loading'}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span className="required-star">*</span>
                    </label>
                    <div className="input-with-icon">
                      <Mail size={18} className="input-icon" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                        required
                        autoComplete="email"
                        disabled={status === 'loading'}
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Field */}
                <div className="form-group">
                  <label htmlFor="subject">
                    Subject <span className="required-star">*</span>
                  </label>
                  <div className="input-with-icon">
                    <Tag size={18} className="input-icon" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Project Inquiry / Opportunity"
                      required
                      disabled={status === 'loading'}
                    />
                  </div>

                  {/* Interactive Quick Subject Selector */}
                  <div className="quick-tags">
                    <span className="quick-tags-label">Quick topics:</span>
                    <div className="tags-wrapper">
                      {QUICK_SUBJECTS.map((item) => (
                        <button
                          key={item}
                          type="button"
                          className={`tag-chip ${formData.subject === item ? 'tag-chip-active' : ''}`}
                          onClick={() => handleQuickSubject(item)}
                          disabled={status === 'loading'}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <div className="label-with-counter">
                    <label htmlFor="message">
                      Message <span className="required-star">*</span>
                    </label>
                    <span
                      className={`char-counter ${
                        formData.message.length > 900 ? 'counter-warning' : ''
                      }`}
                    >
                      {formData.message.length} / 1000
                    </span>
                  </div>
                  <div className="input-with-icon textarea-icon-wrapper">
                    <MessageSquare size={18} className="input-icon textarea-icon" />
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      maxLength="1000"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, questions or just say hi..."
                      required
                      disabled={status === 'loading'}
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`btn btn-primary submit-btn ${status === 'loading' ? 'loading' : ''}`}
                  disabled={
                    status === 'loading' ||
                    !formData.name.trim() ||
                    !formData.email.trim() ||
                    !formData.message.trim()
                  }
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="spinner-icon" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="send-icon" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="privacy-note">
                  🔒 Your information is confidential and will only be used to respond to your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
