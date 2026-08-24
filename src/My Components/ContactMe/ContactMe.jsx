import React, { useState, useEffect, useRef } from "react";
import Bio from "../Data/data.js";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import "../../CSS/contact.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [visible, setVisible] = useState(false);
  const [sent, setSent] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const mailtoLink = `mailto:${Bio.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.fullName}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.open(mailtoLink, "_blank");
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setFormData({ fullName: "", email: "", subject: "", message: "" });
      }, 3000);
    }
  };

  return (
    <div className="contact" ref={ref}>
      <div className={`contact-container ${visible ? "reveal" : ""}`}>
        <div className="contact-left">
          <div className="section-label light">Let's Talk</div>
          <h2 className="contact-heading">Let's build something great together</h2>
          <p className="contact-subheading">
            Have a project in mind? Looking for a developer who ships fast and
            cares about the details? Let's talk.
          </p>
          <div className="contact-info-list">
            <div
              className="contact-info-item"
              onClick={() => window.open(`mailto:${Bio.email}`)}
            >
              <EmailIcon className="contact-info-icon" />
              <span>{Bio.email}</span>
            </div>
            <div
              className="contact-info-item"
              onClick={() => window.open(Bio.linkedin, "_blank")}
            >
              <LinkedInIcon className="contact-info-icon" />
              <span>LinkedIn</span>
            </div>
            <div
              className="contact-info-item"
              onClick={() => window.open(Bio.github, "_blank")}
            >
              <GitHubIcon className="contact-info-icon" />
              <span>GitHub</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Your Name"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? "error-input" : ""}
            />
            {errors.fullName && <span className="error-text">{errors.fullName}</span>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error-input" : ""}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? "error-input" : ""}
            />
            {errors.subject && <span className="error-text">{errors.subject}</span>}
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error-input" : ""}
            />
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>
          <button type="submit" className={`contact-submit ${sent ? "sent" : ""}`}>
            {sent ? "Opening your email..." : "Send Message"}
            {!sent && <SendIcon className="submit-icon" />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
