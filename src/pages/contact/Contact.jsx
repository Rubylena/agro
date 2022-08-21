import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import './ContactUs.css';
// import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  return (
    <>
      <Box className="flex flex-wrap my-10 justify-center gap-10">
        <Box className="bg-nblack rounded-xl flex flex-col justify-center p-10 text-white">
          <Typography className="text-center">
            Have any questions or concerns?
          </Typography>
          <Typography className="text-center">
            Contact us by filling the form below.
          </Typography>

          <Formik
            initialValues={{
              email: "",
              message: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .required("email is required")
                .email("invalid email address"),
              message: Yup.string().required("please type a message"),
            })}
            onSubmit={async (values) => {
              const body = {
                email: values.email,
              };
              alert(JSON.stringify(body));
            }}
            className="form"
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="login_input_wrapper">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholeder="Email Address"
                    className={
                      touched.email && errors.email ? "info-error" : null
                    }
                    placeholder="Enter your email address"
                  />
                  {errors.email && touched.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                <div className="login_input_wrapper">
                  <ChatBubbleOutlineIcon />
                  <input
                    type="text"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    placeholeder="message Address"
                    className={
                      touched.message && errors.message ? "info-error" : null
                    }
                    placeholder="Type a message"
                  />
                  {errors.message && touched.message && (
                    <span className="error">{errors.message}</span>
                  )}
                </div>

                <Button className="contactus-send-btn">
                  {/* <Box component="img" alt="send" src={SendIcon} /> */}
                  <SendIcon />
                  Send
                </Button>
              </form>
            )}
          </Formik>
        </Box>
        <Box className="contactus-details">
          <Typography className="contact-details-top">
            Contact Us:
            </Typography>
          <Typography className="contact-details-text">
           <LocationOnIcon />
          Lagos, Nigeria
          </Typography>
          <Typography className="contact-details-text">
            <MailOutlineIcon />
            solokufarms.com
          </Typography>
          <Typography className="contact-details-text">
          <PhoneIcon />
          +23478912354
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
