import React from 'react';
import '../pages/css/Terms.css'; // Import the CSS file containing the styles

export default function UserAgreement() {
    return (
        <div className="container">
            <h1 className="policy-title">Privacy Policy</h1>

            {/* Privacy Policy Contents */}
            <div className="content-section">
                {/* Introduction */}
                <nav className="toc-container">
                    <ul className="toc">
                        <li className='hover:underline'><a href="#introduction">Introduction</a></li>
                        <li className='hover:underline'><a href="#license">1.License Grant</a></li>
                        <li className='hover:underline'><a href="#property">2.Intellectual Propertyd</a></li>
                        <li className='hover:underline'><a href="#support">3.Support and Updates</a></li>
                        <li className='hover:underline'><a href="#warranty">4.Warranty Disclaimer and Limitation of Liability</a></li>
                        <li className='hover:underline'><a href="#indemnification">5.Indemnification</a></li>
                        <li className='hover:underline'><a href="#modification">6.Modifications to the Agreement</a></li>
                        <li className='hover:underline'><a href="#termination">7.Termination</a></li>
                        <li className='hover:underline'><a href="#general">8.General</a></li>
                    </ul>
                </nav>

                <div id="introduction">
                    <h2><i></i> Introduction:</h2>
                    <p className="far-star text-justify">PLEASE READ THIS END USER LICENSE AGREEMENT CAREFULLY.
                        This End User License Agreement (the &quot;Agreement&quot;) is a legal agreement between
                        you (the &quot;User&quot;) and Sumeru Digital Solutions Private Limited (the &quot;Licensor&quot;) for
                        the use of the software product(s) provided by the Licensor (the &quot;Software&quot;). By
                        installing, accessing, or using the Software, you agree to be bound by the terms and
                        conditions of this Agreement. The Licensor’s Privacy Policy, which can be found on
                        (provide the link of privacy policy), forms an integral part of this Agreement.</p>
                </div>
                <div id="license">
                    <h2><i></i> 1. License Grant</h2>
                    <p className="far-star text-justify">1.1 Grant of License: Subject to the terms and conditions of this Agreement, the
                        Licensor grants the User a non-exclusive, non-transferable and revocable license to
                        use/access the Software solely for the User&#39;s personal or internal business purposes.
                        THIS PRODUCT IS LICENSED TO YOU, NOT SOLD.<br></br>
                        <span className="text-justify">1.2 Use of Trust Scores<br></br>
                            a) The Licensor generates trust scores of job candidates based on multiple data
                            sources and algorithms to provide an assessment of the candidates&#39; professional
                            reputation and credibility.<br></br>
                            b) You agree to use the trust scores provided by the Platform solely for the
                            purpose of evaluating and selecting potential job candidates for your company&#39;s
                            recruitment process.<br></br>
                            c) You understand that the trust scores are provided for informational purposes
                            only and should not be the sole basis for making hiring decisions. You are solely
                            responsible for conducting your own due diligence and evaluations of the job
                            candidates.</span><br></br>
                        <span className="text-justify">1.3 Restrictions: For example purposes, and without limiting LICENSOR’s rights to
                            take action against You, You may not:<br></br>
                            a) copy, modify, or distribute the Software, nor create, use, share and/or publish
                            by any means in relation to the Product any material (text, words, images,
                            sounds, videos, etc.) which would be breach of a duty of confidentiality,
                            infringe any intellectual property right, remove or modify any copyright,
                            trademark, or other proprietary notices contained in the Software; or infringe
                            an individual’s right to privacy or which would incite the committing of an
                            unlawful act (in particular, piracy, cracking or circulation of counterfeit
                            software);<br></br>

                            b) reverse engineer, decompile or disassemble, modify, distort, block,
                            abnormally burden, disrupt, slow down and/or hinder the normal functioning
                            of all or any part of the Product, or their accessibility to other users, or the
                            functioning of the partner networks of the Product, or attempt to do any of the
                            above;<br></br>
                            c) transmit or propagate any virus, trojan horse, worm, bomb, corrupted file
                            and/or similar destructive device or corrupted data in relation to the Product,
                            and/or organize, participate in or be involved in any way in an attack on
                            LICENSOR’s servers and/or the Product and/or those of its service providers
                            and partners;<br></br>
                            d) rent, lease, sublicense, or lend the Software to any third party; nor create,
                            supply or use alternative methods of using the Products, for example server
                            emulators;<br></br>
                            e) spamming chat, whether for personal or commercial purposes, by disrupting
                            the flow of conversation with repeated postings of a similar nature;<br></br>
                            f) transmitting or communicating any material or content which, in the sole and
                            exclusive discretion of LICENSOR, is believed or deemed offensive,
                            including, but not limited to, language that is harmful, threatening, unlawful,
                            abusive, harassing, defamatory, disparaging, obscene, sexually explicit, or
                            racially, ethnically, or otherwise objectionable;<br></br>
                            g) harassing or threatening any other users in the Product;<br></br>
                            h) make inappropriate use of the help service or the claim buttons or send
                            untruthful reports to members of LICENSOR’s personnel;<br></br>
                            i) falsely claim to be an employee or representative of LICENSOR or its
                            partners and/or agents;<br></br>
                            j) falsely claim an endorsement in connection with the Product or with
                            LICENSOR.</span></p>
                </div>
                <div id="property">
                    <h2><i></i>2. Intellectual Property:</h2>
                    <p className="far-star text-justify">W2.1 Ownership: The Licensor retains all rights, title, and interest, including all
                        intellectual property rights, in and to the Software, algorithms, databases, trademarks,
                        logos, and other intellectual property and any and all copies thereof are owned by the
                        Licensor. This License does not grant the User any right, title or ownership in the
                        Product and should not be construed as a sale of any rights in the Product.</p>
                </div>
                <div id="support">
                    <h2><i></i>3. Support and Updates</h2>
                    <p className="far-star text-justify">3.1 Support: The Licensor may provide support services related to the Software at its
                        discretion.<br></br>
                        <span className="text-justify">3.2 Updates: The Licensor may release updates, bug fixes, or new versions of the
                            Software. The User agrees that the Licensor may update the Software without prior
                            notice and that this Agreement shall govern any updates or new versions.</span></p>
                </div>
                <div id="warranty">
                    <h2><i></i>4. Warranty Disclaimer and Limitation of Liability</h2>
                    <p className="far-star text-justify">4.1 Warranty: YOU EXPRESSLY ACKNOWLEDGE THAT USE OF THE
                        PRODUCT IS AT YOUR OWN RISK. TO THE FULLEST EXTENT
                        PERMISSIBLE UNDER APPLICABLE LAW, THE PRODUCT IS SUPPLIED ON
                        AN “AS IS” AND “AS AVAILABLE“ BASIS. THE LICENSOR DOES NOT
                        WARRANT THAT THE SOFTWARE WILL BE ERROR-FREE OR
                        UNINTERRUPTED, AND THE USER ASSUMES ALL RISKS ASSOCIATED
                        WITH ITS USE.<br></br>
                        <span className="text-justify">4.2 Limitation of Liability:<br></br>
                            a) The Platform and its Services are provided &quot;as is&quot; without any warranty or
                            guarantee of any kind. Sumeru Digital does not warrant the accuracy, completeness,
                            or reliability of the trust scores or any information obtained from the Platform.<br></br>
                            b) The Licensor shall not be liable for any direct, indirect, incidental, consequential,
                            or special damages arising out of or in connection with the use or performance of the
                            Software, use of the Platform or reliance on the trust scores, even if advised of the
                            possibility of such damages.<br></br></span></p>
                </div>
                <div id="indemnification">
                    <h2><i></i>5. Indemnification</h2>
                    <p className="far-star text-justify">5.1 The Licensee/User agrees to indemnify, defend, and hold the Licensor harmless
                        from any claims, losses, damages, liabilities, or expenses arising out of or related to
                        the Licensee&#39;s use of the Platform or any violation of this Agreement.</p>
                </div>
                <div id="modification">
                    <h2><i></i> 6. Modifications to the Agreement</h2>
                    <p className="far-star text-justify">6.1 The Licensor reserves the right to modify or update this Agreement at any time.
                        The Licensee will be notified of any material changes to the Agreement, and
                        continued use of the Platform after such changes will constitute acceptance of the
                        modified terms.</p>
                </div>
                <div id="termination">
                    <h2><i></i> 7. Termination</h2>
                    <p className="far-star text-justify">7.1 Termination: This Agreement is effective from the earlier of the date You
                        purchase, download or use the Product, until terminated according to its terms.
                        Termination by the LICENSOR will be effective upon (a) notice to the User or (b)
                        termination of Your Account or (c) non-renewal of your subscription plan. This
                        EULA will terminate automatically if the User fails to comply with any of the terms
                        and conditions of this EULA. The User may terminate this Agreement by
                        discontinuing the use of the Software and uninstalling it from all devices. The
                        Licensor may terminate this Agreement immediately if the User breaches any
                        provision of this Agreement.<br></br>
                        <span className="text-justify">7.2 Effect of Termination: Upon termination, the User shall cease all use of the
                            Software.</span></p>
                </div>
                <div id="general">
                    <h2><i></i> 8. General</h2>
                    <p className="far-star text-justify">8.1 Severability: If any provision of this Agreement is found to be invalid, illegal, or
                        unenforceable, the remaining provisions shall continue in full force and effect.<br></br>
                        <span className="text-justify">8.2 Entire Agreement: This Agreement constitutes the entire agreement between the
                            User and the Licensor regarding the subject matter hereof and supersedes all prior or
                            contemporaneous agreements, understandings, or representations.</span><br></br>
                        <span className="text-justify">8.3 Governing Law and Jurisdiction: This Agreement shall be governed by and
                            construed in accordance with the laws of India. Any legal action or proceeding arising
                            out of or relating to this Agreement shall be subject to the exclusive jurisdiction of the
                            courts in Bangalore.</span><br></br>
                        <span className="text-justify">8.4 Modifications to the EULA:
                            Sumeru Digital reserves the right to modify or update this EULA at any time. Any
                            changes to this EULA will be effective upon posting the revised version on the
                            Platform.</span><br></br>
                        <span className="text-justify"> 8.5 Contact Information:<br></br>
                            If you have any questions or concerns regarding this EULA, please contact us at<br></br>
                            <a href='mailto:support@offerghosting.com'>support@offerghosting.com</a></span>.</p>
                </div>

                {/* The rest of your content here */}
                {/* Just replace 'Introduction' with the title of each section and 'Introduction content' with the actual content. */}
                {/* Remember to also give unique ids to each div for linking in the navigation menu */}
            </div>
        </div>

    );
}
