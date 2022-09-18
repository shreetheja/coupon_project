/* import React from "react";
import "./contact.css";
function Contact() {
  return (
    
    <div className="contactbase">
      Hello World
    </div> 
    
  );
}

export default Contact; */
import React, { useState } from "react";
import ContactForm from "./ContactForm";
import "./contact.css";

const BACKEND_URL = "https://y8m38.sse.codesandbox.io/";

export default function App() {
  const [values, setValues] = useState({
    name: "Anees",
    email: "my@example.com",
    message: "foo"
  });

  const saveForm = () => {
    const sendAction = fetch(BACKEND_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(values)
    });

    sendAction.then(() => {
      alert("thanks");
      setValues({ name: "", email: "", message: "" });
    });
    sendAction.catch(err => {
      alert(err.message);
    });
  };
  return (
    <div className="contactbase">
      <ContactForm values={values} setValues={setValues} onSubmit={saveForm} />
    </div>
  );
}