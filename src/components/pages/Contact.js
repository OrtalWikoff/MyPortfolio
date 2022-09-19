import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import '../styles/index.css';
import Footer from '../footer';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lhh62ih",
        "template_ldzkvhs",
        form.current,
        "Q9azYaDWsvhRaLSsH"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
   <Footer/>
       </StyledContactForm> 

   
  );

};
    
export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
    justify-content: center;
    margin: 20px;
    margin-left: 10em;
    margin-right: 10em;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
   input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 3px solid rgb(102, 178, 255);
      &:focus {
        border: 2px solid rgba(102, 178, 255);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 3px solid rgb(102, 178, 255);
      &:focus {
        border: 2px solid rgb(102, 178, 255);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(102, 178, 255);
      color: white;
      border: none;
    }
  }
`;