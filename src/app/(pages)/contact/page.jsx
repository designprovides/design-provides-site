import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";

export const metadata = {
    title: {
        default: "Contact",
    },
    description: AppData.settings.siteDescription,
}

const Contact = () => {
  return (
    <>
        <PageBanner pageTitle={"We’d love to talk"} breadTitle={"Contact"} bgImage={"/img/photo/12.jpg"} />

        {/* about */}
        <section>
            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row justify-content-between">
                    <div className="col-lg-6">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">Connect With Us Today!</h2>
                            <p className="mil-up mil-mb-40">At Design Provides, we're always here to help. Whether you have questions, need support, or just want to share your feedback, we're all ears. Your experience and satisfaction are our top priorities. So, if you encounter any issues, have any concerns, or simply wish to chat with us about our services, please don't hesitate to reach out. Our dedicated team is ready to assist you with a smile. You can contact us via email, phone, or our convenient online form. Plus, our FAQ section might have the quick answers you're looking for. Let's stay connected because your voice matters to us!"</p>
                        </div>

                    </div>
                    <div className="col-lg-4 mil-relative">

                        <div className="mil-contact-sidebar">

                            <img src="img/photo/2.jpg" alt="img" style={{"width": "100%", "height": "200px", "objectFit": "cover", "objectPosition": "0 -60px"}} className="mil-mb-30" />

                            <div className="mil-sidebar-info">

                                <h6 className="mil-upper mil-up mil-mb-30">Headquarters</h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">
                                    <li>Bangladesh</li>
                                    <li>GPO - 6000, Boalia</li>
                                    <li>Rajshahi City Corporation, Rajshahi</li>
                                </ul>
                                <h6 className="mil-upper mil-up mil-mb-30">Phone</h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">
                                    <li>+880 1792184034</li>
                                    <li>+880 1521575131</li>
                                </ul>
                                <h6 className="mil-upper mil-up mil-mb-30">Email</h6>
                                <ul className="mil-list mil-dark mil-up">
                                 
                                    <li>designprovides@gmail.com</li>
                                </ul>
                                
                            </div>

                        </div>

                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                       
                            <div className="col-lg-4">
                                <div className="mil-up mil-mb-60">
                                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">Design Provides-1</span>

                                    <p className="mil-up"> <br/>Hossaini Ganj <br/>GPO - 6000, Boalia, Rajshahi City Corporation, Rajshahi <br/>(+880) 1792184034</p>

                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mil-up mil-mb-60">
                                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">Design Provides-2</span>
                                    <p className="mil-up"> <br/>Hossaini Ganj <br/>GPO - 6000, Boalia, Rajshahi City Corporation, Rajshahi <br/>(+880) 1521575131</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* about end */}

        {/* map */}
        <div className="mil-map-frame mil-up">
            <div className="mil-map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.4627655023005!2d88.592045!3d24.365199999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef3709b8ff8f%3A0xad39759ed14f1c8c!2sDesign%20Provides!5e0!3m2!1sen!2sbd!4v1706299736976!5m2!1sen!2sbd" 
                    style={{"border": "0"}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
        {/* map end */}

        {/* contact */}
        <section className="mil-relative">
            <div className="container mil-p-120-30">
                <div className="mil-background-grid mil-softened"></div>
                <div className="row justify-content-between">
                    <div className="col-lg-4">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">We’d love to talk</h2>
                            <p className="mil-up mil-mb-30">Have a question? We’d love to hear from you. Send us a note to get the conversation started - or click on an office above and talk to us. Especially about designing something, or something we’ve designed.</p>
                            <div className="mil-divider-lg mil-up mil-mb-30"></div>
                            <p className="mil-up mil-mb-30">Interested in joining the team? Browse our current openings.</p>
                            <div className="mil-up">
                                <Link href="/team" className="mil-link mil-upper">Join Us <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-7">

                        <ContactForm />

                    </div>
                </div>
            </div>
        </section>
        {/* contact end */}
    </>
  );
};
export default Contact;
