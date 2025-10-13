import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="container">
        <div className="contactContainer">
            <div className="contactButton">

            </div>
            <div className="contactForm">
                <form action="GET">
                    <input type="text" placeholder='Enter your name' required/><br />
                    <input type="mail" placeholder='Enter your mail address'required/><br />
                    <input type="text" placeholder='Subject'required/><br />
                    <textarea id="contactText" placeholder='Hi there!'></textarea><br />
                    <button type='Submit'>Submit</button>
                </form>
                <form action="GET">
                    <input type="phone" placeholder='Enter your mobile number'/><br />
                    <input type="text" placeholder='Subject'/><br />
                    <textarea id="contactText" placeholder='Hi there!'></textarea><br />
                    <button type='Submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
