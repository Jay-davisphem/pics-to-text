import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const reg = /\S+@\S+\.\S{2,}/;
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handler = (e) => {
    const t = e.target;
    const val = t.value.trim();
    if (t.name === "name") setName(val);
    else if (t.name === "email") setEmail(val);
    else setMessage(val);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (!(name.length > 2)) alert(`Invalid name ${name}`);
    else if (!reg.test(email)) alert(`Invalid email ${email}`);
    else if (!(message.length > 2)) alert(`Invalid message ${message}`);
    if (name && email && message)
      emailjs
        .sendForm(
          import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
          import.meta.env.VITE_APP_EMAIL_CONTACT_ID,
          form.current,
          import.meta.env.VITE_APP_EMAIL_USER_ID
        )
        .then(
          (result) => {
            alert("SUCESS");
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            alert(error.text);
          }
        );
  };
  return (
    <div className="wrapper">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="pageTitle title">Say Hi / Send Quote</div>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handler}
          className="name formEntry"
          placeholder="NAME"
        />

        <input
          type="email"
          id="email"
          value={email}
          onChange={handler}
          className="email formEntry"
          name="email"
          placeholder="EMAIL"
        />

        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handler}
          className="message formEntry"
          placeholder="MESSAGE"
        ></textarea>

        <input type="submit" value="HALLA ME" className="submit formEntry" />
      </form>
    </div>
  );
}
export default Form;
