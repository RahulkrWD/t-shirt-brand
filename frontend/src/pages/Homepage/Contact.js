import React from "react";
import styles from "./styles/Contact.module.css";
import TextField from "@mui/material/TextField";

function Contact() {
  return (
    <section id="contact">
      <h4 className="text-center p-2">Contact Us</h4>
      <div className={styles.contact_container}>
        <div className="contact">
          <div className="email">
            <h5 className="text-danger">
              <i className="fa-regular p-2 text-danger fa-envelope"></i>
              General Enquiries
            </h5>
            <h6 style={{ color: "blueviolet" }}>rahulkrnodejs@gmail.com</h6>
          </div>
          <hr />
          <div className="call">
            <h5 className="text-danger">
              <i className="fa-solid p-2 fa-phone-volume"></i>
              Call Us
            </h5>
            <h6 style={{ color: "blueviolet" }}>+91 7320810579</h6>
          </div>
          <hr />
          <div className="timing">
            <h5 className="text-danger">
              <i className="fa-regular p-2 fa-clock"></i>
              Our Timing
            </h5>

            <h6 style={{ color: "blueviolet" }}>
              Mon -Sun : 10:00 AM - 07:00 PM
            </h6>
          </div>
          <div className="social media p-2">
            <i className="fa-brands fs-2 text-danger p-2 fa-instagram"></i>
            <i className="fa-brands text-primary  fs-2 p-2 fa-facebook-f"></i>
            <i className="fa-brands text-success fs-2 p-2 fa-whatsapp"></i>
          </div>
        </div>
        <div className={styles.message_container}>
          <form>
            <TextField
              className={styles.message_input}
              style={{ marginBottom: "20px" }}
              id="name-basic"
              label="Full Name"
              variant="standard"
              fullWidth
            />

            <TextField
              className={styles.message_input}
              style={{ marginBottom: "20px" }}
              id="email-basic"
              label="Email ID"
              variant="standard"
              fullWidth
            />

            <TextField
              className={styles.message_input}
              style={{ marginBottom: "20px" }}
              id="phone-basic"
              label="Phone No."
              variant="standard"
              fullWidth
            />

            <TextField
              className={styles.message_input}
              style={{ marginBottom: "20px" }}
              id="message-multiline-static"
              label="Message"
              multiline
              rows={4}
              variant="standard"
              fullWidth
            />

            <center>
              <button className="btn text-bg-success m-2">Send</button>
            </center>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
