import React, { useState } from "react";
import '../../CSS/contact.css'

const ContactMe = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handling Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile Number must be exactly 10 digits";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handling Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      alert("Message Sent Successfully!");
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="contact">
      <div className="sub_contact">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <div className="form1">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="contactinput"
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="contactinput"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.fullName && <p className="error">{errors.fullName}</p>}
          {errors.email && <p className="error">{errors.email}</p>}

          <div className="form1">
            <input
              type="number"
              name="mobile"
              placeholder="Mobile Number"
              className="contactinput"
              value={formData.mobile}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,10}$/.test(value)) {
                  setFormData({ ...formData, mobile: value });
                }
              }}
            />
            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              className="contactinput"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          {errors.mobile && <p className="error">{errors.mobile}</p>}
          {errors.subject && <p className="error">{errors.subject}</p>}

          <textarea
            rows={10}
            cols={87}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
