import React from "react";
import Container from "../components/Container";
import Title from "../components/Title"; 

function Contact() {
  return (
    <div>
         <Container>
           <Title children="Contact Information" />
           <p>Linked In Profile: <a href="https://www.linkedin.com/in/stevensonangela/">stevensonangela</a></p>
           <p>Resume: <a href="/images/AStevenson2018.pdf">Click here for my resume</a></p> 
           <p>Github link: <a href="https://www.github.com/amsgwbootcamp">amsgwbootcamp</a></p>
           <p>Please address all inquiries to the following:</p> 
           <p>Angela Stevenson<br />
           703-623-2708<br />
           ams42870@me.com</p>
      </Container>
    </div>
  );
}

export default Contact;
