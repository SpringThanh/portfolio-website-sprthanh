import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./FormStyles.css";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    for (let [key, value] of formData.entries()) {
      if (!value.trim()) {
        alert("Please fill in all fields before submitting.");
        return;
      }
    }

    emailjs
      .sendForm(
        "service_bqndvwj",
        "template_dafwhek",
        form.current,
        "D9N8mDypEdKyooSGf"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Your message has been sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send message. Please try again!");
        }
      );
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input
          type="text"
          name="user_name"
          placeholder="Enter your name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="Enter your email"
          required
        />

        <label>Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Enter subject"
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Type your message here"
          required
        />

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
