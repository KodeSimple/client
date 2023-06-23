import React from 'react';
import '../home/Home.css';
import mainPageBanner from '../../components/resources/mp2banner.png'
import pricing from '../../components/resources/pricing.png'
import Accordion from 'react-bootstrap/Accordion';
// import RegistrationForm from '../../components/registration-form/RegistrationForm';
import SignInRegistrationButton from '../../components/drawer/offCanvas';
import About from '../about/About';
import Faq from '../faq/Faq';
import NavBarComp from '../../components/header/NavBarComp';
import Footer from '../../components/footer/Footer'
import scanningPackage from '../../components/resources/scanning-package.jpg';
import scanningBox from '../../components/resources/close-up-scanning-box.jpg';
import growthArrow from '../../components/resources/hand-holding-growth-arrow-with-coins.jpg';
import responsive from '../../components/resources/responsive.png';



function Home() {
 
          
  return (
    <> 
                                          <NavBarComp />
      <div className=''>

                          {/* registrtion form and sign in button starts here*/}
            <div className="w-100">
                   <div className="d-flex justify-content-end w-75 d-block container-fluid flex-row"> 
                          <div className="pt-2" ><SignInRegistrationButton /></div>
                          {/* <div className="px-3"><RegistrationForm /></div>  */}
                   </div>      
            </div>
                           {/* home page body content starts here */}
        <div className="home-Bgcolor">         
            <img src={mainPageBanner} alt="POS brochure" className="index-brochure w-100" fluid />
              {/* POS banner ends herelogo */}

                         {/* Features section starts here */}
                <section className="features bg-success-subtle">  {/* <!-- starts of features section here*/}
                          <div class="d-flex flex-row justify-content-center pt-5 flex-nowrap container-fluid">
                                 <div class=" w-75">
                                  <h1 class="text-center pt-5">KodeSimple Features</h1>
                                  <hr class="bs-secondary-color border-2 opacity-50" />
                                 </div>
                          </div>     
                          
                             {/* flex container set-1 starts here  */}
                                   <div className="d-flex d-block flex-row container-fluid justify-content-center
                                             features-responses w-75 pt-0">   
                                             
                                       <div className="p-2 w-100 align-self-center">  {/* <!--  flex container main*/}                         
                                           <h4>Selling is easy using your mobile as portable POS</h4>
                                           <p class="text-start pt-3 container-fluid text-decoration-none">
                                            <div className="">
                                              <ul >    
                                                    <li>
                                                      <p>
                                                        Paperless receipt.
                                                     </p> 
                                                   </li>  
                                                    <li>
                                                      <p>
                                                        No installation and license required.
                                                     </p> 
                                                   </li>   
                                                   <li>
                                                    <p>
                                                      Easy to manage multiple shop's on a different location.
                                                   </p> 
                                                 </li>                          
                                              </ul>
                                            </div>
                                           </p>
                                       </div>
                                       <div className="p-2  w-100">
                                             <p>
                                             <img src={scanningPackage} alt="scanning-package" className="index-brochure w-100" fluid />
                                              <a href="https://www.freepik.com/free-photo/online-store-employee-scanning-information-product-package_31298535.htm#query=barcode&position=4&from_view=search&track=robertav1_2_sidr">Image by zinkevych</a> on Freepik
                                            </p>
                                      </div>
                                 </div>
                          
                                  {/* flex container set-1 ends here */}
                                   {/* <!--  flex container set-2 starts here-->           */}
                                     <div className="d-flex flex-row container-fluid justify-content-center
                                           flex d-block flex-row w-75 features-responses">  {/* <!--  flex container main */}
                                         <div class="p-2 w-100 align-self-center">
                                             <h4>Inventory management</h4>
                                             <p className="text-start pt-3 container-fluid">
                                                <ul>
                                                     <li>
                                                          <p>
                                                            Quick and easy adding items to the inventory list. 
                                                         </p> 
                                                     </li>
                                                     <li>
                                                          <p>
                                                            View and can retrieves inventories history. 
                                                         </p> 
                                                    </li>
                                                    <li>
                                                          <p>
                                                            Show current stock status. 
                                                         </p> 
                                                   </li>
                                                </ul>
                                            </p>
                                         </div>
                                         <div className="p-2  w-100">
                                               <p>
                                               <img src={scanningBox} alt="scanning-box" className="index-brochure w-100" fluid />
                                                Image by <a href="https://www.freepik.com/free-photo/close-up-scanning-box_13450095.htm#query=barcode&position=3&from_view=search&track=robertav1_2_sidr">Freepik</a>
                                              </p>
                                        </div>
                                   </div>
                         {/* <!--  flex container set-2 ends here-->  */}
                                 {/* <!--  flex container set-3 starts here--> */}
                             <div className="d-flex d-block flex-row container-fluid justify-content-center
                                               features-responses w-75 flex-nowrap ">
                                    <div className="p-2 w-100 align-self-center">  {/* <!--  flex container main --> */}         
                                      <h4>Sales Summary</h4>
                                        <p className="text-start pt-3 container-fluid">
                                        <ul>
                                          <li>
                                            <p>
                                              Access records of all selling history.
                                            </p>
                                          </li>
                                          <li>
                                            <p>
                                              Compute's the profit base on the declared selling price.
                                            </p>
                                          </li>
                                          <li>
                                            <p>
                                              Project income ahead of time.
                                            </p>
                                          </li>
                                        </ul>
                                        </p>
                                    </div>
                                    <div className="p-2  w-100">
                                      <p>
                                        <img src={growthArrow} alt="growth arrow" className="index-brochure w-100" fluid />
                                        Image by <a
                                          href="https://www.freepik.com/free-photo/hand-holding-growth-arrow-with-coins_11383316.htm#query=profit&position=0&from_view=search&track=sph">Freepik</a>
                                      </p>
                                    </div>
                                  </div>
                                  {/* <!--  flex container set-3 ends here--> */}
                                  {/* <!--  flex container set-4 starts here--> */}
                                  <div className="d-flex d-block flex-row container-fluid justify-content-center
                                                            features-responses w-75 flex-nowrap">
                                    <div className="p-2 w-100 align-self-center"> {/* <!--  flex container main --> */}
                                      <h4>System's compatibility</h4>
                                      <p className="text-start pt-3 container-fluid">
                                      <ul>
                                        <li>
                                          <p>Compatible with bluetooth wireless barcode scanner.</p>
                                        </li>
                                        <li>
                                          <p>Compatible with mobile wireless printer.</p>
                                        </li>
                                        <li>
                                          <p>Mobile responsive system.</p>
                                        </li>
                                      </ul>
                                      </p>
                                    </div>
                                    <div className="p-2  w-100">
                                      <p>
                                      <img src={responsive} alt="responsive" className="index-brochure w-100" fluid />
                                      <div className="text-center">
                                        <a
                                          href="https://www.freepik.com/free-vector/technology-devices-illustration_7057091.htm#query=mobile%20responsive&position=29&from_view=search&track=ais">Image
                                          by studiogstock</a> on Freepik
                                      </div>
                                      </p>
                                    </div>
                          </div>  {/* <!--  flex container set-4 ends here--> */}     
             </section>

                            {/* features section ends here */}
                           {/* <!-- starts of pricing section --> */}        
                   {/* <section id="pricing" className=" bg-info-subtle">
                          <img src={pricing} alt="POS brochure" className="index-brochure w-100" fluid />
                   </section> */}
                        <section id="pricing" className="bg-info-subtle">
                          <div className="pricing-container">
                            <img src={pricing} alt="POS brochure" className="index-brochure" />
                            <div className="pricing-text">
                              <h2>Our Pricing Plans</h2>
                              <p>
                                KodeSimple mobile POS is a cutting-edge point-of-sale (POS) system designed for small and medium-sized businesses. It provides a convenient and efficient way for merchants to manage their sales and transactions using their mobile devices.</p>
                            </div>
                          </div>
                        </section>
             </div> {/* background end tag */}
                   {/* <!-- End of pricing section here --> */}
                                {/* <!-- About us section starts here --> */}
                    <section id="about" className="firstLandingPage pt-5 ">
                                <h2 className="text-center">About us</h2>
                                {/* short content introduction below here */}
                                <div className='text-left d-flex justify-content-center w-100'>
                                   <div className="w-75">
                                       <p>
                                       <span className='paragraph-start'>KodeSimple</span> is a leading provider of mobile Point of Sale (POS) solutions. Our innovative platform empowers businesses of all sizes to transform their smartphones or tablets into powerful sales tools. With KodeSimple, you can easily accept payments, track inventory, manage customer data, and generate real-time sales reports, all from the convenience of your mobile device.
                                       </p>
                                  </div>
                                </div>
                                    {/* to view more link below here */}
                                    <div className="p-0 d-flex justify-content-center">
                                           <a className="hrefLink" href="/about" onClick={About}>Learn more</a>
                                    </div>
                              
                    </section>
                    {/* about section ends here */}
                   {/* end of about us section */}
                   {/* <!-- FAQ section starts here --> */}
                      <section id="faqhome" className="pt-5"> 
                        <div className="text-left pt-5">
                          <div className="p-2">
                           <h2 className="text-center">Frequently Asked Questions</h2>
                            <div className=" faq d-flex d-block w-100 justify-content-center 100"> {/* <!--- flex container main start tag----> */}  
                              <div className="p-0 w-75 faq-accordion">  {/* <!------firt item start tag------> */}
                                {/* <!---------accrodion starts here---------> */}
                                <Accordion>
                                        <Accordion.Item eventKey="0">
                                          <Accordion.Header> Is this system is free?</Accordion.Header>
                                          <Accordion.Body>
                                          No, the Kodesimple Mobile POS system is not available for free. It is a commercial product that requires a subscription or payment to access its features and functionality. The pricing and subscription plans may vary, so it's recommended to visit the official Kodesimple website or contact our customer support for detailed information regarding the cost and pricing structure of their Mobile POS system. 
                                          </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                          <Accordion.Header>How many users are the limit per email?</Accordion.Header>
                                          <Accordion.Body>
                                          The user limit per email in the Kodesimple Mobile POS system may vary depending on the specific subscription or pricing plan you choose. To get accurate information about the user limit, it is best to visit our official Kodesimple website. We will be able to provide you with detailed information.
                                          </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                          <Accordion.Header> Are invetory and sales data are availbale to download?</Accordion.Header>
                                          <Accordion.Body>
                                          Yes, the Kodesimple Mobile POS system typically provides the functionality to download inventory and sales data. This feature allows users to export data related to their inventory and sales transactions in a downloadable format. By having access to this data, you can analyze and manage your inventory levels, track sales performance, and generate reports for further analysis or integration with other systems.
                                          </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                          <Accordion.Header> Is there a user manual?</Accordion.Header>
                                          <Accordion.Body>
                                          Yes, typically the Kodesimple Mobile POS system provides a user manual or documentation to assist users in understanding and using the system effectively. The user manual is designed to provide step-by-step instructions, guidance, and information on various features, settings, and functionalities of the system.
                                          </Accordion.Body>
                                        </Accordion.Item>
                                      </Accordion>
                                {/* <!---------accordion ends here------------> */}
                              </div> {/* <!------firt item end tag------> */}
                            </div> {/* <!--- flex container main end tag---->*/}
                          </div>
                        </div>
                                        {/* faq learn more button starts here */}
                                        <div className="p-0 d-flex justify-content-center pb-5">
                                             <a className="hrefLink" href="/faq" onClick={Faq}>Learn more</a>
                                         </div>
                                        {/* faq learn more button ends here */}
                                    
                      </section>{/* <!-- FAQ section ends here --> */}                 
       </div>  {/* main div end tag */}
               {/* footer section starts here */}
                          <Footer />
                {/* footer section ends here */}
        
    </>
  );
}

export default Home;

