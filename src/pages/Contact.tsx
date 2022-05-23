import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';
import bryson from '../resources/images/bryson.jpg';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PageTitle from '../components/PageTitle/PageTitle';

type ContactProps = {
  
};

type Inputs = {
  firstName: string,
  lastName: string,
  email: string,
  message: string
};

const Contact:React.FC<ContactProps> = () => {
  
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "TEMPLATE ID REQUIRED";
  const userId = process.env.REACT_APP_EMAILJS_USER_ID || "USER ID REQUIRED";
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "SERVICE ID REQUIRED";

  const [submitted, setSubmitted] = useState(false);
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    setSubmitted(true);
    try {
      emailjs.send(serviceId, templateId, data, userId);
    } catch (err) {
      console.log(err);
    }
  };

  const handleActiveSubmitClass = () => {
    const validateForm =  (
        (watch("firstName") === "" || watch("firstName") === undefined) || 
        (watch("lastName") === "" || watch("lastName") === undefined) || 
        (watch("email") === "" || watch("email") === undefined) || 
        (watch("message") === "" || watch("message") === undefined)
      );
    if (!validateForm) return "contact-form__submit";
    return "contact-form__submit inactive";
  }

  return (
    <div className="contact">
      <PageTitle text="Contact" />
      <div className="contact-content">
        <div className="contact__left">
          <div className="contact-card">
            <div className="contact-card__upper">
              <div className="contact-card__image">
                <img className="contact-card__image-tag" src={ bryson } alt="Bryson, software developer" />
              </div>
            </div>
            <div className="contact-card__lower">
              <div className="contact-card-lower__name">
                <div className="contact-card-name__first">
                  Bryson
                </div>
                <div className="contact-card-name__last">
                  Taylor
                </div>
              </div>
              <div className="contact-card__row">
                <div className="contact-card-row__text">
                  <a href="tel:562-286-1576">562.286.1576</a>
                </div>
              </div>
              <div className="contact-card__row">
                <div className="contact-card-row__text">
                  <a href="mailto:brysonttaylor@gmail.com">BrysonTTaylor@gmail.com</a>
                </div>
              </div>
              <div className="contact-card__row">
                <div className="contact-card-row__text">
                  <a href="https://www.linkedin.com/in/bryson-taylor/" target="_blank" rel="noreferrer">linkedin.com/in/bryson-taylor</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__right">
          {
            submitted ? (
              <div>
                <div className="submitted-message">
                  <div className="submitted-message__check-container">
                    <div className="submitted-message__check">
                      <FontAwesomeIcon icon={ faCheck }/>
                    </div>Thanks for reaching out!
                  </div>
                </div>
              </div>
            ) : (
              <form 
                className="contact-form" 
                action="mailto:brysonttaylor@gmail.com"
                method="POST"
                encType="multipart/form-data"
                name="EmailForm"
                onSubmit={ handleSubmit(onSubmit) }
              >
                <div className="contact-form__name">
                  <div className="contact-form__input contact-form__first-name">
                    <label htmlFor="name">First Name:</label>
                    <input className="contact-form-input__text" type="text" placeholder="First Name" {...register("firstName", { required: true })} />
                    {errors.firstName && <span className="contact-form__error">This field is required</span>}
                  </div>
                  <div className="contact-form__input contact-form__last-name">
                    <label htmlFor="name">Last Name:</label>
                    <input className="contact-form-input__text" type="text" placeholder="Last Name" {...register("lastName", { required: true })} />
                    {errors.lastName && <span className="contact-form__error">This field is required</span>}
                  </div>
                </div>
                <div className="contact-form__input">
                  <label htmlFor="name">Email:</label>
                  <input className="contact-form-input__text" type="email" placeholder="Email" {...register("email", { required: true })} />
                  {errors.email && <span className="contact-form__error">This field is required</span>}
                </div>
                <div className="contact-form__input">
                  <label htmlFor="message">Message:</label>
                  <textarea className="contact-form-input__text-area" {...register("message", { required: true })} />
                  {errors.message && <span className="contact-form__error">This field is required</span>}
                </div>
                <input className={ handleActiveSubmitClass() } type="submit" value="Submit" />
              </form>
            )
          }
        </div>
      </div>
      
      
    </div>
  );
};

export default Contact;