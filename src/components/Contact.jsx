import React, { useRef }  from "react";
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

const SERVICE_ID = "service_uyb86zr";
const TEMPLATE_ID = "template_ipsu96x";
const PUBLIC_KEY = "p-dBaZrqlV17MLUDT";

function Contact() {
    const form = useRef();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset();
      };
    
    return (
        <div className="contact-page">
            <div className="contact-form">
                <center>
                    <h2 className="contact-form-header">Send me an email!</h2>
                </center>

                <Form ref={form} onSubmit={handleOnSubmit} className="cf">
                    <FormGroup className="form-input">
                        <FormLabel ><b>Your Name:</b></FormLabel>
                        <FormControl name="from_name" type="text" placeholder="Enter Name Here"></FormControl>
                    </FormGroup>

                    <FormGroup className="form-input">
                        <FormLabel ><b>Your Email Address:</b></FormLabel>
                        <FormControl name="email" type="email" placeholder="Enter Email Here"></FormControl>
                    </FormGroup>

                    <FormGroup className="form-input" control="message">
                        <FormLabel ><b>Message:</b></FormLabel>
                        <FormControl name="message" as="textarea" rows={6} type="email" placeholder="Tell me anything!"></FormControl>
                    </FormGroup>

                    <div className="d-grid gap-2">
                        <Button variant="dark" className="contact-submit-btn" type='submit' color='green'>Say hello!</Button>
                    </div>
                    
                </Form>
            </div>
        </div>
        
    )
}

export default Contact;