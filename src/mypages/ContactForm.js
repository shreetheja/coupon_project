import React from "react";

const ContactForm = ({ values, setValues, onSubmit }) => (
    
  <center><div className="App">
  <br></br>
  <br></br>
    <h1 style={{color: "black"}}>Contact Us</h1>
    <div>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          onSubmit();
        }}
      >
        <label style={{color: "black"}}>Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
          value={values.name}
          onChange={evt => setValues({ ...values, name: evt.target.value })}
        />
        {/*      <label>Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        /> */}

        <label style={{color: "black"}}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          value={values.email}
          onChange={evt => setValues({ ...values, email: evt.target.value })}
        />

        <label style={{color: "black", height:"fit-content", width:"fit-content"}}>Message</label>
        <textarea
          value={values.message}
          placeholder="Type you message here.."
          onChange={evt => setValues({ ...values, message: evt.target.value })}
        />
        <br></br>
        <br></br>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  </div>
  </center>
);

export default ContactForm;