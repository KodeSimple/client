import React from 'react'
// import JoelProfile from '../../components/resources/picture.jpg'
// import JinkyProfile from '../../components/resources/picture.jpg'
// import RenzProfile from '../../components/resources/picture.jpg'
import NavBarComp from '../../components/header/NavBarComp'
import Footer from '../../components/footer/Footer'
import jinkyCatat from '../../components/resources/jinky-catat.png';
import joelSiroy from '../../components/resources/joel-siroy.png';

function About() {
  return (
    <>
                           {/* header section  starts here */}
                                       <NavBarComp />
                            {/* header section ends here */}
        <main>                  
            <div>
                           {/* insert code starts here */}
                          {/* <!--  flex container main --> */}
                    <div className="d-flex flex-row justify-content-center align-self-center bg-body-emphasis pt-3 flex-nowrap container-fluid">
                        <div className="pt-5 w-50 responsive-body">
                                 <h1>About Us</h1>
                                 <hr className="hrLine2" />

                                 <p>
                                      Welcome to KodeSimple, a revolutionary "Turn your mobile into POS" business
                                      that transforms how companies sell and manage inventory. You can easily convert your mobile device into a portable point-of-sale system with Kode Simple's cutting-edge technology, allowing you to sell your goods whenever and wherever you choose.
                                    </p>
                                    <p>
                                      Embrace the convenience of selling while you're on the road and wave goodbye to the inconvenience of large cash registers.
                                    </p>
                                    <p>
                                      The powerful inventory management system that KodeSimple offers is at the core of its approach to streamlining your company's operations. You can easily track and manage your inventory on your mobile device with a few touches, ensuring that you always have the proper products in stock.
                                    </p>
                                    <p>
                                      Never miss a sales opportunity again by maintaining control over your supply chain. We are here to assist you in making the greatest choices for your company as fast and effectively as we can, and that is why we are here.
                                    </p>
                                    <p>
                                      Visit Kode Simple to experience the future of retail, where converting your smartphone into a potent point-of-sale system is just the beginning. Accept the ease of selling while you're on the go, manage your inventory easily, and make wise decisions with useful sales analytics.
                                    </p>
                                    <p>
                                      Join the mobile revolution today and use Kode Simple to realize the full potential of your company.
                                    </p>
                        </div>
                    </div>
                             {/* about content ends here  */}
                      <div className="d-flex  d-block f justify-content-center
                        p-2 flex-row container-fluid about-responses w-50">
                        {/* <!--  flex item 1 starts here--> */}
                        <div className="w-100 bg-body-primary flex-nowrap">     
                        {/* <!--container item set 1 --> */}   
                          <div className="d-flex flex-column container-fluid  ">
                            <div className="p-2 w-100">
                              <p>
                              <img src={joelSiroy} alt="Joel Profile" className="index-brochure w-75" fluid />
                              </p>
                            </div>
                            <div className="p-2  w-100 container-fluid">
                              <p>
                              <a href="https://github.com/jsiroy">Joel Siroy</a>
                              </p>
                            </div>
                          </div>
                        </div>


                        {/* <!--  flex item 1 ends here--> */}
                        {/* <!--  flex item 2 stars here--> */}
                        <div className="w-100 bg-body-primary flex-nowrap"> {/* <!--container item set 2 --> */}   
                          <div className="d-flex flex-column container-fluid ">
                            <div className="p-2  w-100">
                              <p>
                              <img src={jinkyCatat} alt="Jinky Profile" className="index-brochure w-75" fluid />
                              </p>
                            </div>
                            <div className="p-2  w-100 container-fluid">
                              <p>
                                <a href="https://github.com/catatjinky">Jinky Catat</a>
                              </p>
                            </div>
                          </div>
                        </div> 
                        {/* <!--  flex item 2 ends here--> */}
                        {/* <!--  flex item 3 starts here--> */}
                        {/* <div className="w-100 bg-body-primary flex-nowrap">  */}
                        
                        {/* <!--container item set 3 --> */}   
                          {/* <div className="d-flex flex-column container-fluid ">
                            <div className="p-2  w-100">
                              <p>
                              <img src={jinkyCatat} alt="Anthonette Profile" className="index-brochure w-75" fluid />
                              </p>
                            </div>
                            <div className="p-2  w-100 container-fluid">
                              <p>
                                <a href="https://github.com/catatjinky">Maria Anthonette Tambal Cañaveral</a>
                              </p>
                            </div>
                          </div> */}
                        {/* </div>  */}
                        
                        {/* <!--  flex item 3 ends here--> */}
                      </div>   
                  {/* inserterted code ends here */}
           </div>
      </main>  
                 {/* footer section starts here */}
                       <Footer />
                 {/* footer section ends here */}
    </>
    
  )
}

export default About;

   