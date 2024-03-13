import React, { Fragment } from "react";
import "./contact.css";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";

const arrr=[{id:0,detail:"name"},{id:1,detail:"email"},{id:2,detail:"subject"}]
const arrl=[
{id:"contactinfolef1",h2:"Accessibility Audit",leftp:"We conduct Accessibility Audits. Connect with us and leave it to the experts for making your site universally accessible. Please contact us by sending an email to",lefta1:'Gursimranjeet@gmail.com',lefta2:234567890,img:'img1'},
{id:"contactinfolef2",h2:"Unity in Action",leftp:"Join our movement toward universal accessibility. We celebrate milestones, creating inclusive locations and transport services that foster connections and shared achievements.",lefta1:'Gursimranjeet@gmail.com',lefta2:234567890,img:'img2'},
{id:"contactinfolef3",h2:"Social Media",leftp:"We conduct Accessibility Audits. Connect with us and leave it to the experts for making your site universally accessible. Please contact us by sending an email to",lefta1:null,lefta2:null,img:'img3'},
{id:"contactinfolef4",h2:"For Press and Media Enquiries",leftp:"We conduct Accessibility Audits. Connect with us and leave it to the experts for making your site universally accessible. Please contact us by sending an email to",lefta1:'Gursimranjeet@gmail.com',lefta2:null,img:'img4'}
]

                 


function Contactinfoleft() {
  let listitems=arrl.map(items=><Fragment key={items.id}>
   <div  id={items.id}>
                <div className="logoandhead">
                  <div className={items.img}></div>
                  <h2>{items.h2}</h2>
                </div>
                <div>
                  <p className="leftp">
                    {items.leftp}
                  </p>
                </div>
                <div className="lefta">
                  <a href="">{items.lefta1}</a>
                </div>
                <div className="lefta">
                  <a href="">{items.lefta2}</a>
                </div>
              </div>
   </Fragment>)

   return(<>{listitems}</>);
}


function Forminput() {
  let listitems=arrr.map(items=> <Fragment key={items.id}>
    <label htmlFor={items.detail}>{items.detail.toUpperCase()}</label>
   <br />
   <input className="textcontact" type="text" id={items.detail} name={items.detail} required />
   <br />
   <br />
   <br /></Fragment>)
    return(<>{listitems}
    </>)
  }

  function Formlinkleft(){

  }

function handleFormSubmission(token) {
  document.getElementById("demo-form").submit();
}
// for recaptcha but not working
//   </head>
// was for recaptcha  but not working future use

export default function Contact() {
  return (
    <>
    <Navbar  webpagename="Sahayak"/>
      <div id="contactcontent">
        <h2>Contact Us</h2>
        <hr />
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
              <Contactinfoleft/>
            </div>
            <div id="contactinforight">
              <form
                id="demo-form"
                action="https://formspree.io/f/xnqoqjzq"
                method="POST"
              >

                <Forminput/>

                <label htmlFor="message">Message</label>
                <br />
                <textarea id="message" name="message" required></textarea>
                <br />
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
