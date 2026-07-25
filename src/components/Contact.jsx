import React, { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    // TODO: The client will receive the Access Key in their email. Paste it here!
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-container">
        <div className="contact-info">
          <h2>Questions or comments?<br/>Get in touch:</h2>
        </div>
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="input-group">
              <input type="text" name="name" id="name" placeholder="Name" required />
            </div>
            <div className="input-group">
              <input type="email" name="email" id="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <textarea name="message" id="message" placeholder="Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <span style={{ marginTop: '10px', fontSize: '1rem', color: 'var(--text-dark)' }}>{result}</span>
          </form>
        </div>
      </div>
    </section>
  );
}
