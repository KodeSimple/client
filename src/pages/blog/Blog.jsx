import React from 'react';
import NavBarComp from '../../components/header/NavBarComp';
import Footer from '../../components/footer/Footer';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import Button from 'react-bootstrap/Button';
import Mobilepos from '../content/mobilepos';
import mobilePos from '../../components/resources/mobile-pos.png';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


function Blog() {
  return(
     <>
       
          {/* header section  starts here */}
               <NavBarComp />
          {/* header section ends here */}
      <main>
         <div>
              <section class="blog">
                    <div class="d-flex flex-row justify-content-center align-self-center bg-body-emphasis pt-3 flex-nowrap container-fluid">
                        <div class="pt-5 w-50 responsive-body text-left">
                         <h1>Blog</h1>
                         <hr className="hrLine2" />
                            {/* blogs contents start here */}

                            <div className='mb-5 pb-5 '>

                              <CardGroup style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <Card style={{ maxWidth: '750px' }}>
                                        <Card.Img variant="top" src={mobilePos} alt="Mobile Pos" className="index-brochure w-100" fluid/>
                                        <Card.Body>
                                        <Card.Title>Mobile POS: Revolutionizing the Way Businesses Accept Payments</Card.Title>
                                        <Card.Text>
                                        Given the fast-paced environment we live in today, where smartphones have become an essential part of our everyday lives, it is not unexpected that businesses are using mobile technology to expedite their procedures.
                                        </Card.Text>
                                        </Card.Body>
                                        {/* <Navbar>
                                        <Nav> */}
                                        <div className="p-0 d-flex justify-content-center">
                                           <a className="hrefLink " href="/mobile-pos" onClick={Mobilepos}>Learn more</a>
                                        </div>
                                        {/* </Nav>
                                        </Navbar> */}
                                        </Card>

                                        {/* <Card> */}
                                          
                                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                        {/* <Card.Body>
                                        <Card.Title>Inventory Management on Mobile POS</Card.Title>
                                        <Card.Text>
                                        Successful inventory management is essential to the growth of firms in a variety of industries. It entails monitoring, planning, and managing the flow of goods, making sure that stock levels are ideal, and expediting the order fulfillment procedures.{' '}
                                        </Card.Text>
                                        </Card.Body>
                                        <div className="p-0 d-flex justify-content-center">
                                           <a className="hrefLink" href="/mobile-pos" onClick={Mobilepos}>Learn more</a>
                                        </div>
                                        </Card> */}

                              </CardGroup>

                            </div>

                              {/* blogs contents ends here */}
                        </div>
                    </div>
             </section>
          </div>
     </main>
          {/* footer section starts here */}
                <Footer />
          {/* footer section ends here */}

     </>
   )
}

export default Blog;
// 000000000000