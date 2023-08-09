import React from 'react';
import '../pages/css/Terms.css';
export default function CookiePolicy() {

    return (
        <div >
            <h1 className="policy-title">Cookie Policy</h1>

            {/* Privacy Policy Contents */}
            <div className="content-section">
                {/* Introduction */}
                <nav className="toc-container">
                    <ul className="toc">
                        <li className='hover:underline'><a href="#introduction">1. Introduction</a></li>
                        <li className='hover:underline'><a href="#about" > 2. About Cookies</a></li>
                        <li className='hover:underline'><a href="#types" >3. Types of Cookies we Use</a></li>
                        <li className='hover:underline'><a href="#consent">4. Cookie Consent</a></li>
                        <li className='hover:underline'><a href="#retention">5. Cookie Retention</a></li>
                        <li className='hover:underline'><a href="#settings">6. Cookie Settings</a></li>
                        <li className='hover:underline'><a href="#changes">7. Changes to this cookie Policy</a></li>
                        <li className='hover:underline'><a href="#contact">8. Contact Us</a></li>
                    </ul>
                </nav>

                <div id="introduction">
                    <h2><i ></i> 1. Introduction</h2>
                    <p className="far-star text-justify">This Cookie Policy explains how Sumeru Digital Solutions Private Limited (“Sumeru
                        Digital”) uses cookies and similar technologies. This policy should be read in
                        conjunction with our Privacy Policy.<br></br>
                        <span className="text-justify">This Site uses cookies to better the users experience while visiting the Site. Where
                            applicable this Site uses a cookie control system allowing the user on their first visit
                            to the Site to allow or disallow the use of cookies on their computer / device. This
                            complies with recent legislation requirements for Sites to obtain explicit consent from
                            users before leaving behind or reading files such as cookies on a user’s computer /
                            device.</span><br></br>
                        <span className="text-justify">This Cookie Policy sets out how we use cookies and similar technologies on this Site.
                            We may update this Cookie Policy from time to time in order to keep you fully
                            informed about our latest practices involving cookies and similar technologies on this
                            Site. You should check this Cookie Policy each time you visit our Site in order to find
                            out whether our use of cookies and similar technologies has changed.</span>
                    </p>
                </div>
                <div id="about">
                    <h2><i ></i> 2. About Cookies:</h2>
                    <p className="far-star text-justify">Cookies are small text files that are placed on your computer or mobile device when
                        you access our Platform. They allow us to collect certain information about your
                        browsing activities and enhance your user experience. These Cookies are data files
                        that are sent between web servers and web browsers, processor memory or hard
                        drives (clients) to recognize a particular user’s device when the user accesses a
                        website. They are used for a range of different purposes, such as customizing a
                        website for a particular user, helping a user navigate a website, improving that user’s
                        website experience, and storing that user’s preferences and login information.
                        Cookies do not usually contain personal information. Cookies may, however, be used
                        in combination with other information to identify you.<br></br>
                        <span>Cookies can be classified as either ‘session’ or ‘persistent’ cookies. Session cookies
                            are placed on your browser when you access a website and last for as long as you
                            keep your browser open. They expire when you close your browser.</span><br></br>
                        <span>Persistent cookies are placed on your computer when you access a website and expire
                            at a fixed point in time or if you manually delete them from your browser, whichever
                            occurs first.</span><br></br>
                        <span>Cookies will be set either by our Site domain or by third party domains on our behalf.
                            Cookies set by us on our Site domain are referred to as ‘first party’ cookies. Cookies
                            set by third party domains, or set on or via our domain on behalf of third parties, are
                            referred to as ‘third party’ cookies. Though, we would like to bring to your notice that
                            our Platform does not use cookies from third-party service providers.</span>
                    </p>
                </div>
                <div id="types">
                    <h2><i></i>3. Types of Cookies we Use:</h2>
                    <p className="far-star text-justify">We use the following types of cookies on our Platform:<br></br>
                        a. Essential Cookies: These cookies are necessary for the operation of our Platform and enable you to access certain features. They are typically set in response to your actions, such as logging in or completing forms. Without these cookies, the Platform may not function properly.<br></br>
                        b. Analytical/Performance Cookies: These cookies help us analyze how users interact with our Platform, including the number of visitors, the pages visited, and the sources of traffic. This information is used to improve the performance and functionality of our Platform.<br></br>
                        c. Functional Cookies: These Cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these Cookies, then some or all of the Services may not function properly.<br></br>
                        d. Advertising Cookies: These Cookies may be set through our Site by our advertising
                        partners. They may be used by those companies to build a profile of your interests and
                        show you relevant advertisements on other websites. If you do not allow these
                        Cookies, you will experience less targeted advertising.<br></br>
                    </p>
                </div>
                <div id="consent">
                    <h2><i ></i>4. Cookie Consent:</h2>
                    <p className="far-star text-justify">By continuing to use our Platform, you consent to the use of cookies as described in this Cookie Policy. You can manage your cookie preferences through the settings of your browser or device. However, please note that blocking or disabling certain cookies may impact the functionality and performance of the Platform.</p>
                </div>
                <div id="retention">
                    <h2><i ></i> 5. Cookie Retention:</h2>
                    <p className="far-star text-justify">The duration for which a cookie remains on your device depends on its type. Session cookies are deleted when you close your browser, while persistent cookies may remain on your device for a longer period until manually deleted or until they expire.</p>
                </div>
                <div id="settings">
                    <h2><i ></i>6. Cookie Settings:</h2>
                    <p className="far-star text-justify">You can manage your cookie preferences and opt-out of certain cookies through our <a href="#">Cookie Settings</a>. You can also adjust your browser settings to control the acceptance or rejection of cookies. Please note that disabling cookies may affect your ability to access and use certain features of the Platform.</p>
                </div>
                <div id="changes">
                    <h2><i ></i> 7. Changes to the Cookie Policy:</h2>
                    <p className="far-star text-justify">We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and the "Last Updated" date will be revised accordingly. We encourage you to review this policy periodically for the latest information on our use of cookies.</p>
                </div>
                <div id="contact">
                    <h2><i ></i> 8. Contact Us:</h2>
                    <p className="far-star text-justify">If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us at <a href='mailto:support@offerghosting.com'>support@offerghosting.com</a>.</p>
                </div>

                {/* The rest of your content here */}
                {/* Just replace 'Introduction' with the title of each section and 'Introduction content' with the actual content. */}
                {/* Remember to also give unique ids to each div for linking in the navigation menu */}
            </div>
        </div>

    );
}
