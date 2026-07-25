import React from 'react';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-container">
        <div className="contact-info">
          <h2>Questions or comments?<br/>Get in touch:</h2>
        </div>
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input type="text" id="name" placeholder="Name" required />
            </div>
            <div className="input-group">
              <input type="email" id="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <textarea id="message" placeholder="Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
