import React, { useState } from 'react';
import './Contactmodule.css';
import toast from 'react-hot-toast'
import axiosInstance from '../../config/axiosInstance.jsx';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // check for empty fields
    if (!formData.email || !formData.name || !formData.message) {
      toast.error("All fields are mandatory");
      return;
    }

    // email validation using regex
    if (
      !formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      toast.error("Invalid email id");
      return;
    }

    try {
      const res = axiosInstance.post("/contact", { ...formData });
      console.log("...formData", formData);
      toast.promise(res, {
        loading: "Submitting your message...",
        success: "Form submitted successfully",
        error: "Failed to submit the form",
      });
      const response = await res;
      console.log("response in contact", response);
      // clearing the input fields after successfull submission of form
      if (response) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.log("error in contact", error);
      toast.error("Operation failed...");
    }
  };

  return (
    <div>
      <div class="container" id='contact'>
        <form onSubmit={handleSubmit} noValidate>
          <h2>Contact Us</h2>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
