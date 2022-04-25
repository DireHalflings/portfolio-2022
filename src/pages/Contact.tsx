import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPhone, faCopy, faEnvelope } from '@fortawesome/free-solid-svg-icons';

type ContactProps = {
  
};

type Inputs = {
  name: string,
  email: string,
  message: string
};

const Contact:React.FC<ContactProps> = () => {

  const [submitted, setSubmitted] = useState(false);
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    setSubmitted(true);
    console.log(data);
  };

  const handleActiveSubmitClass = () => {
    const validateForm =  (watch("name") === "" || watch("name") === undefined) || 
      (watch("email") === "" || watch("email") === undefined) || 
      (watch("message") === "" || watch("message") === undefined);
    if (!validateForm) return "contact-form__submit";
    return "contact-form__submit inactive";
  }

  return (
    <div className="contact">
      <h1>CONTACT</h1>
      <div className="contact-content">
        <div className="contact__left">
          <div className="contact-card">
            <div className="contact-card__row">
              <div className="contact-card-row__label">
                PHONE:
              </div>
              <div className="contact-card-row__text">
                562.286.1576
              </div>
              <div className="contact-card-row__icons">
                <FontAwesomeIcon className="contact-card-row__phone-icon" icon={ faPhone } title="Call" />
                <FontAwesomeIcon className="contact-card-row__copy-icon" icon={ faCopy } title="Copy" />
              </div>
            </div>
            <div className="contact-card__row">
              <div className="contact-card-row__label">
                EMAIL:
              </div>
              <div className="contact-card-row__text">
                BrysonTTaylor@gmail.com
              </div>
              <div className="contact-card-row__icons">
                <FontAwesomeIcon className="contact-card-row__email-icon" icon={ faEnvelope } title="Email" />
                <FontAwesomeIcon className="contact-card-row__copy-icon" icon={ faCopy } title="Copy" />
              </div>
            </div>
            <div className="contact-card__row">
              <div className="contact-card-row__label">
                LINKEDIN:
              </div>
              <div className="contact-card-row__text">
                <a href="https://www.linkedin.com/in/bryson-taylor/">linkedin.com/in/bryson-taylor</a>
              </div>
              <div className="contact-card-row__icons">
                <FontAwesomeIcon className="contact-card-row__copy-icon" icon={ faCopy } title="Copy" />
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
              <form className="contact-form" onSubmit={ handleSubmit(onSubmit) }>
                <div className="contact-form__input">
                  <label htmlFor="name">Name:</label>
                  <input className="contact-form-input__text" type="text" placeholder="Your Name" {...register("name", { required: true })} />
                  {errors.name && <span className="contact-form__error">This field is required</span>}
                </div>
                <div className="contact-form__input">
                  <label htmlFor="name">Email:</label>
                  <input className="contact-form-input__text" type="email" placeholder="youremail@email.com" {...register("email", { required: true })} />
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