import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import "./contact.css";
import { FaPhoneAlt } from "react-icons/fa";

import { MdOutgoingMail } from "react-icons/md";
import { PiWhatsappLogoDuotone } from "react-icons/pi";

import { ImLocation2 } from "react-icons/im";

const Contact = () => {
  const contact = [
    {
      icon: <FaPhoneAlt />,
      title: "Call Me",
      type: "+(02)1010838632",
    },
    {
      icon: <MdOutgoingMail />,
      title: "Email Me",
      type: " moohesham83@gmail.com",
    },
    { icon: <ImLocation2 />, title: "Location", type: "Egypt , Cairo" },
    {
      icon: <PiWhatsappLogoDuotone />,
      title: "WhatsApp",
      type: "01555245948 ",
    },
  ];
  const filtrationContact = contact.map((contacts, index) => (
    <Grid item xs={12} md={4} key={index}>
      <div className="box-contact">
        {contacts.icon}
        <div className="boxes">
          <h4>{contacts.title}</h4>
          <span>{contacts.type}</span>
        </div>
      </div>
    </Grid>
  ));
  return (
    <div className="contact">
      <Container fixed>
        <h2>Quick Contact Address</h2>
        <p></p>
        <Grid container spacing={2}>
          {filtrationContact}
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
