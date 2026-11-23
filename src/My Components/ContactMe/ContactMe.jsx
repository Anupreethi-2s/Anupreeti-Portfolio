import React, { useState, useEffect, useRef } from "react";
import Bio from "../Data/data.js";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import "../../CSS/contact.css";

// Free key from https://web3forms.com (messages go to the email it was created with). Set it in .env as
// REACT_APP_WEB3FORMS_KEY=... ; it's a public key, safe in the built site.
const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_KEY || "";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [visible, setVisible] = useState(false);
  // idle | sending | sent | error | mailapp
  const [status, setStatus] = useState("idle");
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
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
    if (status !== "idle" && status !== "sending") setStatus("idle");
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) newErrors.email = "Enter a valid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => setFormData({ fullName: "", email: "", subject: "", message: "" });

  // Without a Web3Forms key: open the visitor's email app with the message filled in
  const openMailApp = () => {
    window.location.href = `mailto:${Bio.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    setStatus("mailapp");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm() || status === "sending") return;
    if (!WEB3FORMS_KEY) return openMailApp();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio: ${formData.subject}`,
          from_name: formData.fullName,
          name: formData.fullName,
          email: formData.email,
          replyto: formData.email,
          message: formData.message,
          botcheck: formData.botcheck || "",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || "Send failed");
      setStatus("sent");
      resetForm();
    } catch {
      setStatus("error");
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

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {/* Spam trap: hidden from people, filled in by bots */}
          <input type="checkbox" name="botcheck" className="form-botcheck" tabIndex="-1" autoComplete="off"
            onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked ? "on" : "" })} />
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
          <button
            type="submit"
            className={`contact-submit ${status === "sent" ? "sent" : ""}`}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : status === "sent" ? "Message sent!" : "Send Message"}
            {status === "idle" || status === "error" || status === "mailapp" ? <SendIcon className="submit-icon" /> : null}
          </button>
          {status === "sent" && (
            <p className="form-status success">Thanks! Your message has been sent — I'll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="form-status error">
              Sorry, the message couldn't be sent. Please email me directly at{" "}
              <a href={`mailto:${Bio.email}`}>{Bio.email}</a>.
            </p>
          )}
          {status === "mailapp" && (
            <p className="form-status">
              Your email app should open with the message ready to send. If nothing opened, email me at{" "}
              <a href={`mailto:${Bio.email}`}>{Bio.email}</a>.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
