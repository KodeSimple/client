import React from 'react';
import NavBarComp from '../../components/header/NavBarComp';
import Footer from '../../components/footer/Footer';
import AiFillFacebook from '../../components/resources/fb-icon.png';
import AiFillInstagram from '../../components/resources/insta-icon.png';
import { Form, Button, Spinner, Modal} from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import '../contact/contact.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import emailjs from 'emailjs-com';


// import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

function Contact() {

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const emailData = {
      To_email: 'jonescarla2022@gmail.com',
      email_contact: event.target.emailPublic.value,
      client_phone: event.target.phonePublic.value,
      email_subject:'Inquriy',
      from_name: event.target.nameFirst.value,
      company_name: event.target.companyPublic.value,
      industry_name: event.target.industryPublic.value,
      annual_revenue: event.target.revenuePublic.value,
      name_country: event.target.countryPublic.value,
      concern_message: event.target.formMessage.value
    };

    emailjs
      .send('service_dshiyj8', 'template_66cq8zg', emailData, 'y8KcAyItpP1kCao23')
      .then((response) => {
        console.log('Email sent successfully!', response);
        setLoading(false);
        setShowModal(true);
        event.target.reset();
        setTimeout(() => {
          setShowModal(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setLoading(false);
      });
  };


  
  return(
     <> 
         {/* header section  starts here */}
                  <NavBarComp />
         {/* header section ends here */}
     <main>   
         <secction className="contact">
              <div className="d-flex flex-row justify-content-center align-self-center bg-gradient pt-3 flex-nowrap container-fluid">
                <div className="pt-5 w-50 responsive-body">
                     <h1>Contact Us</h1>
                     <hr className="hrLine2" />
                     <p className="mt-4 mb-4">
                     Fill out the form and a member from our sales team will get back to you within 24 hours, or scroll down for more ways to get in touch.
                     </p>
                      

<Container>
      <Row className="container-row">
        {/* First Column */}
        <Col className="col-contact container-fluid" sm={6} style={{ background: 'lightblue', padding: '20px' }}>
        <h4>Contact Business Solution Sales</h4>
         
          <p className="p-contact">
            Already a customer or need help with a Mobile POS? Contact Support
          </p>

          <div>
          <Badge variant="secondary">📞</Badge> +639 56947 7780
          </div>

          <div className="iframe-contact">
          <iframe
            title="Map"
            width="100%"
            height="200"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.987654!3d40.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sYour%20Business%20Address%20Here!5e0!3m2!1sen!2sus!4v1234567890123"
            allowFullScreen
          />
          </div>

          {/* <p>Phone: +1234567890</p> */}
          <div className="image-contact">
          <a href="https://www.facebook.com">
            <img src={AiFillFacebook} size={30} height="50px" alt="fb icon" fluid/>
          </a>

          <a href="https://www.instagram.com">
            <img src={AiFillInstagram} size={30} height="40px" alt="insta icon" fluid/>
          </a>      
          </div>
        </Col>
           
        {/* Second Column */}
        <Col sm={6} lg={6} style={{ padding: '20px' }}>
         
        <Form className="contact-item" onSubmit={handleSubmit}>
            <Row>
              <Col sm={6}>
                <Form.Group controlId="nameFirst">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control required name="nameFirst" type="text" placeholder="" style={{ marginBottom: '10px' }}/>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control required name="lastName" type="text" placeholder="" style={{ marginBottom: '10px' }}/>
                </Form.Group>
              </Col>
            </Row>

            <Row>
            <Col sm={6}>
            <Form.Group controlId="emailPublic">
              <Form.Label>Email</Form.Label>
              <Form.Control required name="emailPublic" type="email" placeholder="" style={{ marginBottom: '10px' }}/>
            </Form.Group>
            </Col>

            <Col sm={6}>
            <Form.Group controlId="phonePublic">
              <Form.Label>Phone</Form.Label>
              <Form.Control required name="phonePublic" type="text" placeholder="" style={{ marginBottom: '10px' }}/>
            </Form.Group>
            </Col>
            </Row>

            <Row>
              <Col sm={6}>
                <Form.Group controlId="companyPublic">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control required name="companyPublic" type="text" placeholder="" style={{ marginBottom: '10px' }}/>
                </Form.Group>
             </Col>

              <Col sm={6}>
                <Form.Group controlId="industryPublic">
                  <Form.Label>Industry</Form.Label>
                  <Form.Control required name="industryPublic" ype="text" placeholder="" style={{ marginBottom: '10px' }}/>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                <Form.Group controlId="revenuePublic">
                  <Form.Label>Annual Revenue</Form.Label>
                  <Form.Control required name="revenuePublic" type="text" placeholder="" style={{ marginBottom: '10px' }}/>
                </Form.Group>
              </Col>

              <Col sm={6}>
                <Form.Group controlId="countryPublic">
                  <Form.Label>Country</Form.Label>
                  <Form.Control required name="countryPublic" type="text" placeholder="" style={{ marginBottom: '25px' }}/>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control required as="textarea" rows={3} placeholder="" style={{ marginBottom: '10px' }}/>
            </Form.Group>
<Button className="submit-concern-buton" type="submit" disabled={loading}>
        {loading ? (
          <>
            <Spinner className="contact-button-spinner" animation="border" size="sm" /> Submitting...
          </>
        ) : (
          'Submit'
        )}
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Email Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your email has been sent successfully. Thank you!
        </Modal.Body>
      </Modal>    
          </Form>
        </Col>
      </Row>
    </Container>
 


           {/* contents ends here */}
                </div>
              </div>
        </secction>
     </main>
          {/* footer section starts here */}
                          <Footer />
          {/* footer section ends here */}
     </>
  )
}

export default Contact
