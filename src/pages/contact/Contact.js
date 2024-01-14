import React from "react";
import "./contact.css";

function handleFormSubmission(token) {
  document.getElementById("demo-form").submit();
}
// for recaptcha but not working
//   </head>
// was for recaptcha  but not working future use

export default function Contact() {
  return (
    <>
      <div id="contactcontent">
        <h2>Contact Us</h2>
        <div id="contactform">
          <p>We are always happy to hear from you! For questions or feedback</p>
          <p> please use the contact form and information below.</p>
          <div id="contactinfo">
            <div id="contactinfoleft">
              <div id="contactinfolef1"></div>
              <div id="contactinfolef2"></div>
              <div id="contactinfolef3"></div>
              <div id="contactinfolef4"></div>
            </div>
            <div id="contactinforight">
              <form>
                <label htmlFor="name">Name</label><br />
                <input type="text" id="name" name="name" /><br />
                <label htmlFor="email">Email Id</label><br />
                <input type="text" id="email" name="email" /><br />
                <label htmlFor="subject">Subject</label><br />
                <input type="text" id="subject" name="subject" /><br />
                <label htmlFor="message">Message</label><br />
                <textarea id="message" name="message" rows="5" cols="50"></textarea><br />
                <button
                  className="g-recaptcha"
                  data-sitekey="6LdgrFApAAAAAJ6lA4TR54TtOJGk-1mVxjHhki9C"
                  onClick={() => handleFormSubmission()}
                >
                  
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

