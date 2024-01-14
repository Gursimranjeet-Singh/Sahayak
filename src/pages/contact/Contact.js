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
          <p className="contactformheadp">
            We are always happy to hear from you!{" "}
          </p>
          <p className="contactformheadp">
            For questions or feedback please use the contact form and
            information below.
          </p>
          <div id="contactinfo">
            <div id="contactinfoleft">
              <div id="contactinfolef1">
                <div className="logoandhead">
                  <div className="img1"></div>
                  <h2>Accessibility Audit</h2>
                </div>
                <div>
                  <p className="leftp">
                    We conduct Accessibility Audits. Connect with us and leave
                    it to the experts for making your site universally
                    accessible. Please contact us by sending an email to
                  </p>
                </div>
                <div className="lefta">
                  <a href="">Gursimranjeet@gmail.com</a>
                </div>
                <div className="lefta">
                  <a href="">1234567890</a>
                </div>
              </div>
              <div id="contactinfolef2">
                <div className="logoandhead">
                  <div className="img1"></div>
                  <h2>Accessibility Audit1</h2>
                </div>
                <div>
                  <p className="leftp">
                    We are listening. Send us your ideas, studies, research,
                    think pieces or other recommendations{" "}
                  </p>
                </div>
                <div className="lefta">
                  <a href="">Gursimranjeet@gmail.com</a>
                </div>
                <div className="lefta">
                  <a href="">0123456789</a>
                </div>
              </div>
              <div id="contactinfolef3">
                <div className="logoandhead">
                  <div className="img1"></div>
                  <h2>Social Media</h2>
                </div>
                <div>
                  <p className="leftp">
                    Join our social media communities to get the latest
                    articles, photos, videos and events updates.
                  </p>
                </div>
              </div>
              <div id="contactinfolef4">
                <div className="logoandhead">
                  <div className="img1"></div>
                  <h2>For Press and Media Enquiries</h2>
                </div>
                <div>
                  <p className="leftp">
                    We conduct Accessibility Audits. Connect with us and leave
                    it to the experts for making your site universally
                    accessible. Please contact us by sending an email to
                  </p>
                </div>
                <div className="lefta">
                  <a href="">Gursimranjeet@gmail.com</a>
                </div>
              </div>
            </div>
            <div id="contactinforight">
              <form
                id="demo-form"
                action="https://formspree.io/f/xnqoqjzq"
                method="POST"
              >
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  
                  required
                />
                <br /><br /><br />
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  
                  required
                />
                <br /><br /><br />
                <label htmlFor="subject">Subject</label>
                <br />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  
                  required
                />
                <br /><br /><br />
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  
                  required
                ></textarea>
                <br />
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
