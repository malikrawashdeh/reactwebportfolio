import React from "react";
import Modal from "./Modal";
import styles from "./Contact.module.css";
import axios from "axios";
import { useState } from "react";
const Contact = (props) => {
  const initialForm = {
    senderName: "",
    email: "",
    message: "",
  };
  const [formState, setFormState] = useState(initialForm);
  const formId = "dV2adWgR";
  const formSparkUrl = `https://submit-form.com/${formId}`;
  const submitForm = async (event) => {
    event.preventDefault();

    await postSubmission();
    props.hideContact();
    setFormState(initialForm);
  };
  const postSubmission = async () => {
    const payload = {
      ...formState,
    };
    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const updateFormHandler = (event) => {
    const { id, value } = event.target;
    const formkey = id;
    const updatedFormState = { ...formState };
    updatedFormState[formkey] = value;
    setFormState(updatedFormState);
  };
  return (
    <Modal title={"Contact"}>
      <form onSubmit={submitForm} className={styles.contactForm}>
        <label htmlFor="name">Name</label>
        <input
          onChange={updateFormHandler}
          type="text"
          id="senderName"
          value={formState.senderName}
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={updateFormHandler}
          type="text"
          id="email"
          value={formState.email}
        />
        <label htmlFor="message">Message</label>
        <textarea
          onChange={updateFormHandler}
          type="text"
          id="message"
          value={formState.message}
        />
        <div className={styles.actions}>
          <button onClick={submitForm} className={styles.submit}>
            Submit
          </button>
          <button onClick={props.hideContact} className={styles.cancel}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Contact;
