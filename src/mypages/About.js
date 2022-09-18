import React from "react";
import background from "../pics/background.jpeg";
import "./About.css";

function About() {
   return (
    <div className="aboutdesign">
      <h1>Our Company</h1>
      <br></br>
      <div className="aboutstyle">
        <center><h2 style={{color: "red"}}> Our Vision </h2></center>
        <p class="para" style={{color: "brown"}}>
            Founded in 2022 , Tienda believe the best way to deliver a great
            user experience is by deeply understanding what people want and
            love. Then deliver the features , messages and content that are most
            helpful, relevant and timely. That's what makes users happy and
            loyal. We want customers to be happy because that's what makes our
            mission successful .
        </p>
        <center><h2 style={{color: "red"}}> Our Vision </h2></center>
        <p class="para" style={{color: "brown"}}>
            We have served over <b>100+</b> customers till now. We are super happy with
            the customer feedbacks . We are even looking forward to adding more
            features that will make our customers' life more easy.
        </p>
        
        <center><h2 style={{color: "red"}}> Our Vision </h2></center>
          <p class="para" style={{color: "brown"}}>
            We build and strengthen our reputation through our customer's trust,
            in alignment with our promises and actions. We are responsible,
            respect each other, dedicated to safety, care for our environment
            and manage our business ethically. We aim to work together as we can
            achieve better results through unity. We are passionate about our
            people, our products and our service excellence.
          </p>
      </div>
    </div>
   );
   }
   export default About;
 