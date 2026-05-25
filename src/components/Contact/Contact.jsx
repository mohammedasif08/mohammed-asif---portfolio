import React, { useState } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const [form, setForm]       = useState({ name:'', email:'', message:'' });
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [leftRef,  leftVis]   = useScrollReveal();
  const [rightRef, rightVis]  = useScrollReveal();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1400);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div
          ref={leftRef}
          className={`contact__info reveal-left${leftVis ? " visible" : ""}`}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Let's work
            <br />
            together
          </h2>
          <p>
            Have a project idea or want to collaborate? I'd love to hear from
            you. I usually reply within 24 hours.
          </p>

          <div className="contact__links">
            {[
              {
                icon: "✉️",
                label: "Email",
                value: "mohammedasifoffl@gmail.com",
                href: "mailto:mohammedasifoffl@gmail.com",
              },
              {
                icon: "💼",
                label: "LinkedIn",
                value: "linkedin.com/in/mohammed-asif",
                href: "https://www.linkedin.com/in/mohammed-asif-m-4707952a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              },
              {
                icon: "🐙",
                label: "GitHub",
                value: "github.com/mohammedasif08",
                href: "https://github.com/mohammedasif08",
              },
            ].map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`contact__link reveal-left d${i + 2}${leftVis ? " visible" : ""}`}
              >
                <span className="contact__link-icon">{l.icon}</span>
                <div>
                  <div className="contact__link-label">{l.label}</div>
                  <div className="contact__link-value">{l.value}</div>
                </div>
                <svg
                  className="contact__link-arrow"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div
          ref={rightRef}
          className={`contact__form-wrap reveal-right${rightVis ? " visible" : ""}`}
        >
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-ring">🎉</div>
              <strong>Message sent!</strong>
              <p>Thanks for reaching out — I'll reply soon.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder=""
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder=""
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="contact__submit"
                disabled={loading}
              >
                {loading ? (
                  <span className="contact__loading">
                    Sending
                    <span className="dots" />
                  </span>
                ) : (
                  <>
                    Send Message{" "}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
