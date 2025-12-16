import { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [output, setOutput] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = form;

    // Basic validation
    if (!form.firstName || !form.email || !form.message) {
  setOutput('Please fill in all the required fields.');
  //setTimeout(() => setOutput(null), 3000); 
  return; // Make sure to return immediately
}

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setOutput('Please enter a valid email.');
      //setTimeout(() => setOutput(null), 3000); 
      return ;
    }

    // Submit to backend
    axios.post('http://localhost:3001/contact/send', form)
      .then(() => {
        setOutput('Message sent successfully!');
        setForm({ firstName: '', lastName: '', email: '', message: '' });
        //setTimeout(() => setOutput(null), 3000); 
      })
      .catch(() => {
        setOutput('Failed to send message. Please try again.');
        //setTimeout(() => setOutput(null), 3000); 
      });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

       {output && <p className="contact-output">{output}</p>} {/* Display message */}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={form.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your message *"
          rows="6"
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
