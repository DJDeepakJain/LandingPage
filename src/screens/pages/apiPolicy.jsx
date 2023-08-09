import React from 'react';
import '../pages/css/Terms.css'; 
export default function ApiAgreement() {
    return (
            <div >
                <h1 className="policy-title">API SERVICE AGREEMENT</h1>

                {/* Privacy Policy Contents */}
                <div className="content-section">
                    {/* Introduction */}
                    <nav className="toc-container">
                        <ul className="toc">
                            <li className='hover:underline'><a href="#recitals">RECITALS</a></li>
                            <li className='hover:underline'><a href="#definitions">Article 1: Definitions</a></li>
                            <li className='hover:underline'><a href="#dol">Article 2: Development, Ownership, and Licensing of API</a></li>
                            <li className='hover:underline'><a href="#aur">Article 3: API usage and Restrictions</a></li>
                            <li className='hover:underline'><a href="#fee">Article 4: Fees and Payment</a></li>
                            <li className='hover:underline'><a href="#lip">Article 5: License and Intellectual Property</a></li>
                            <li className='hover:underline'><a href="#upo">Article 6: Users and Providers Obligations</a></li>
                            <li className='hover:underline'><a href="#confidentiality">Article 7: Confidentiality</a></li>
                            <li className='hover:underline'><a href="#indemnification">Article 8: Indemnification</a></li>
                            <li className='hover:underline'><a href="#etr">Article 9: Effective Date, Term and Termination, Refund Policy</a></li>
                            <li className='hover:underline'><a href="#general">Article 10: General</a></li>
                        </ul>
                    </nav>

                    <div id="recitals">
                        <h2 className='relative'><i></i> Recitals:</h2>
                        <p className="far-star text-justify"><strong>WHEREAS,</strong> the Provider is a Company that offers a block-chain based
                            Platform, which assist the Users in the recruitment process and provides
                            access to the trust scores of the candidates/job applicants, which is based on
                            the Provider’s proprietary algorithm;<br></br><span>
                                <strong>WHEREAS,</strong> User wishes to utilize Provider&#39;s API service to access and
                                retrieve trust scores and other necessary data of candidates/job applicants for
                                ensuring a transparent recruitment process.</span><br></br>
                            <span className="text-justify"><strong>WHEREAS,</strong> the Provider and the User desire to set forth herein their
                                agreement regarding the development of an interface between their
                                respective systems through access to the Provider’s application programming
                                interface (“API”).</span><br></br>
                            <span className="text-justify"><strong>WHEREAS,</strong> by entering this Agreement, the Parties shall ensure that their
                                business and activities are conducted in such a manner that the reputation,
                                status and goodwill of each party is in no way adversely affected or
                                compromised.</span><br></br>
                            <span className="text-justify"><strong>NOW, THEREFORE,</strong> in consideration of the foregoing recitals, the mutual
                                promises, agreements and covenants set forth herein, and other good and
                                valuable consideration, the receipt and sufficiency of which are hereby
                                acknowledged, IT IS HEREBY AGREED by and between the parties as follows:</span><br></br>
                            <span className="text-justify">The parties have agreed to enter into this Agreement on such terms and
                                conditions as are set out herein and in the Annexure(s) to this Agreement.</span><br></br>
                            <span className="text-justify">All Annexures to this Agreement shall be an integral part of this Agreement
                                and will be in full force and effect as though they were expressly set out in
                                the body of this Agreement.</span><br></br><span>The words and expressions beginning with capital letters and defined in this
                                    Agreement (including Schedules and Annexures) shall, unless the context
                                    otherwise requires, have the meaning ascribed thereto herein;</span></p>
                    </div>
                    <div id="definitions">
                        <h2><i></i> Article 1: Definitions</h2>
                        <p className="far-star text-justify">1.1 &quot;API&quot; refers to the application-programming interface provided by the
                            Provider, allowing the User to access and utilize certain services or data.<br></br>
                            <span className="text-justify">1.2 &quot;API Documentation&quot; means the technical documentation provided by the
                                Provider, which describes the functionalities, methods, and usage guidelines
                                for the API, which is attached herein as Annexure A.</span><br></br>
                            <span className="text-justify">1.3 “Applicable Laws” means all laws and regulations, including any
                                binding guidance and codes of practice, relating to the processing of data,
                                including but not limited to the General Data Protection Regulation (GDPR)
                                and any national implementing laws, regulations, and secondary legislations
                                applicable to this Agreement.</span><br></br>
                            <span className="text-justify">1.4 “API Information” means all candidates data, trust score generated by
                                the Provider’s proprietary algorithm, candidates documents, employee
                                session, subscription plan, and all other material and information reasonably
                                needed by the User to use API service.</span><br></br>
                            <span className="text-justify">1.5 &quot;PII&quot; stands for personally identifiable information. It refers to any
                                information relating to an identified or identifiable natural person, including but
                                not limited to name, address, email address, phone number, and any other
                                information that can be used to directly or indirectly identify an individual.</span><br></br>
                            <span className="text-justify">1.6 “Confidential Information” includes the following:
                                (i) any business or technical information of the Provider or its affiliates, including, but not limited
                                to, any information relating to the Provider, or Provider’s Intellectual Property
                                or product plans, designs, costs, product prices and names, customer
                                information and lists, lists of prospects, data of candidates/job applicants,
                                finances, marketing plans, business opportunities, personnel, research,
                                development or know-how; and (ii) the terms and conditions of the
                                Agreement.</span><br></br>
                            <span className="text-justify">1.7 “Intellectual Property Rights” means patent rights, copyrights, database
                                rights, trademark rights, trade secret rights, and any and all other intellectual
                                property rights available under any applicable laws</span></p>
                    </div>
                    <div id="dol">
                        <h2><i></i> Article 2: Development, Ownership, and Licensing of API</h2>
                        <p className="far-star text-justify">2.1. Development. The Provider has developed the API and the
                            specifications for the API to be used by the User pursuant to this Agreement
                            are provided in Annexure A hereto.<br></br>
                            <span className="text-justify">2.2.Ownership of API. The Provider shall exclusively own all rights, title, and
                                interest in and to the API and to all Samples and API Information created,
                                conceived, developed, made, or otherwise obtained in the course of
                                development of the API, including all Intellectual Property Rights therein.</span><br></br>
                            <span className="text-justify">2.3. License Grant. Subject to the terms and conditions of this Agreement, the
                                Provider grants the User a non-exclusive, non-transferable and revocable
                                license to access and use the API solely for the User’s internal business
                                purposes during the term of this Agreement.</span><br></br>
                            <span className="text-justify">2.4.API Documentation. The Provider shall provide the User with access to
                                the API Documentation to assist the User in integrating and utilizing the API
                                effectively.</span></p>
                    </div>
                    <div id="aur">
                        <h2><i></i>Article 3: API usage and Restrictions</h2>
                        <p className="far-star text-justify"><strong>3. API Usage and Restrictions</strong><br></br>
                            <span className="text-justify">3.1 Usage. The User agrees to use the API in compliance with this Agreement
                                and, all applicable laws and regulations. The User shall not use the API in any
                                manner that may cause harm, disruption, or unauthorized access to the
                                Provider&#39;s systems or services.</span><br></br>
                            <span className="text-justify">3.2 Restrictions. The User shall not, directly or indirectly:<br></br>
                                (a) Reverse engineer, decompile, or disassemble the API;<br></br>
                                (b) Modify, adapt, or create derivative works based on the API;<br></br>
                                (c) Use the API to develop a competing product or service;<br></br>
                                (d) Disclose or share the API credentials or access tokens with any third party
                                without the Provider&#39;s prior written consent.<br></br></span></p>
                    </div>
                    <div id="fee">
                        <h2><i></i>Article 4: Fees and Payment</h2>
                        <p className="far-star text-justify">4.1 Fees:<br></br> The Parties shall agree upon the fees for the API services
                            separately, including any applicable usage limits, pricing tiers, or additional
                            charges.<br></br>
                            <span className="text-justify">4.2 Payment Terms:<br></br> The User shall pay the fees to the Provider according to
                                the agreed-upon API subscription plan as attached herein as Annexure B.

                                The User shall be charged and delivered the service accordingly as per the
                                chosen subscription plan.</span></p>
                    </div>
                    <div id="lip">
                        <h2><i></i> Article 5: License and Intellectual Property</h2>
                        <p className="far-sta text-justify">5.1 License to Use API.  <br></br>
                            (a) Subject to the terms and conditions of this Agreement, the Service
                            Provider hereby grants to the User a non-exclusive, non-transferable and
                            revocable license to use the API during the term of this Agreement and the
                            License to Use API shall automatically terminate upon the termination of this
                            Agreement.<br></br>
                            (b) The License to Use API shall not include the right of User to sublicense
                            the API to any third party.<br></br>
                            (c) The User shall not use the API in any way other than as expressly
                            permitted or granted under this Agreement.<br></br>
                            (d) The License to Use API shall not include the right of User to use alone or
                            in conjunction with any third party in any way that results in or could result in
                            any security breach with respect to the Service Provider or a violation of any
                            applicable law or regulation or Provider’s informational technology security<br></br>
                            policies, as published by Provider from time to time.<br></br>
                            <span className="text-justify">5.2 Intellectual Property.<br></br>
                                (a) Ownership: The Provider retains all right, title, and interest in and to the
                                API, including any modifications, enhancements, or improvements made by
                                the Provider.<br></br>
                                (b) The trademark licenses granted by each party to the other hereunder shall
                                automatically terminate upon any termination of this Agreement.<br></br>
                                (c) All goodwill arising from the use by either party of the other party’s
                                trademarks shall inure solely to the benefit of the trademark owner. <br></br>
                                (d) Nothing in this Agreement grants to either party any ownership of or any
                                rights in or to the other party’s intellectual property or trademarks.</span></p>
                    </div>
                    <div id="upo">
                        <h2><i></i>Article 6: Users and Providers Obligations</h2>
                        <p className="far-star text-justify">6.1 Users Obligations.<br></br>
                            (a)The User warrants that it has obtained all necessary consents and
                            authorizations required for the processing of personal data by the Data
                            Processor.<br></br>
                            (b) The User shall ensure that the personal data shared with the Data
                            Processor is accurate, complete, and up to date.<br></br>
                            (c) The User shall ensure that it has the necessary legal basis for the processing
                            of PII and that such processing does not infringe on the rights and freedoms of
                            data subjects.<br></br>
                            (d) The User shall promptly notify the Provider in writing if it becomes aware
                            of any changes or updates to the instructions or information provided to the
                            Provider regarding the processing of PII.
                            <span className="text-justify">Provider's Obligation<br></br>
                                (a) The Provider shall process PII only in accordance with the documented
                                instructions of this API Service Agreement and API Documentation, and shall not
                                process PII for any other purpose.<br></br>
                                (b) The Provider shall ensure that the personal data processed is adequate, relevant,
                                and limited to what is necessary for the specified purposes.<br></br>
                                (c) The Provider shall implement appropriate technical and organizational measures
                                to ensure the security of PII, including but not limited to measures to prevent
                                unauthorized access, use, alteration, or disclosure of PII.<br></br>
                                (d) The Provider shall ensure that its employees and agents who have access to PII
                                are subject to appropriate confidentiality obligations.</span></p>
                    </div>
                    <div id="confidentiality">
                        <h2><i></i> Article 7: Confidentiality</h2>
                        <p className="far-star text-justify">7.1 Confidentiality.<br></br>
                            (a) Confidential Information: Both Parties may disclose certain confidential
                            information to each other during the term of this Agreement. The Parties
                            agree to treat all confidential information as strictly confidential and to use it
                            solely for the purposes of this Agreement.<br></br>
                            (b) During the terms of this Agreement and also after the termination or
                            expiration of this Agreement, each Party shall hold in confidence and use only
                            in furtherance of its rights and obligations under this Agreement all
                            Confidential Information that it acquires from the other Party pursuant to this
                            Agreement, unless (i) the Disclosing Party consents to the Receiving Party’s
                            disclosure or use, or (ii) disclosure of the Disclosing Party’s Confidential
                            Information by the Receiving Party is required by order of any Governmental
                            Authority, in which event the Receiving Party will notify the Disclosing Party of
                            that order as soon as practicable, shall use reasonable efforts (at the
                            Disclosing Party’s expense) to obtain a protective order covering the
                            Confidential Information and shall disclose only such Confidential Information
                            that its legal counsel determines is legally required. Each Party shall make
                            Confidential Information that it acquires from the other Party pursuant to this
                            Agreement available only to those of its affiliates, directors, officers,
                            employees, consultants, advisors or representatives who need to have access
                            thereto for the purposes of this Agreement and who are bound by an
                            obligation of confidentiality consistent with the provisions herein.<br></br>
                            <span className="text-justify">7.2 For purposes of the Agreement:<br></br>
                                (i) “Disclosing Party” refers to the party disclosing Confidential Information.<br></br>
                                (ii) “Receiving Party” refers to the party receiving Confidential Information.”<br></br>
                                (iii) “Representatives” includes a party’s directors, officers, employees, agents
                                or advisors (including, without limitation, attorneys, accountants, consultants,
                                bankers and financial advisors) and those of the party’s affiliates.<br></br></span></p>
                    </div>
                    <div id="indemnification">
                        <h2><i></i> Article 8: Indemnification</h2>
                        <p className="far-star text-justify">8.1 By the User Company. The User shall defend, indemnify, and hold the
                            Provider, its Affiliates, and their directors, officers, employees, and agents
                            harmless from and against any and all claims, losses, liabilities, damages,
                            costs, and expenses (including attorneys’ fees, expert witness fees, and court
                            costs) directly or indirectly arising from or relating to any negligence, willful
                            misconduct, or violation of Applicable Laws by the User or its directors,
                            officers, employees, or agents in the performance of this Agreement.<br></br>
                            <span className="text-justify">8.2 By the Provider Company. The Provider shall defend, indemnify, and
                                hold the User, its Affiliates and their directors, officers, employees, and agents
                                harmless from and against any and all claims, losses, liabilities, damages,
                                costs, and expenses (including attorneys’ fees, expert witness fees, and court
                                costs) directly or indirectly arising from or relating to any negligence, willful
                                misconduct, or violation of Applicable Laws by the provider or its directors,
                                officers, employees, or agents in the performance of this Agreement.</span><br></br>
                            <span className="text-justify">8.3 Indemnity Conditions. A Party’s obligation to indemnify as provided in this
                                Agreement is conditioned upon the indemnified Party promptly notifying the
                                indemnifying Party in writing within a reasonable period of time of any and all
                                claims for which the indemnified Party is entitled to indemnification, giving the
                                indemnifying Party sole control of the defense thereof and any related
                                settlement negotiations, and indemnified Party cooperating and, at
                                indemnifying Party’s request and expense, assisting in such defense.</span></p>
                    </div>
                    <div id="etr">
                        <h2><i></i> Article 9: Effective Date, Term and Termination, Refund Policy</h2>
                        <p className="far-star text-justify">9.1 Term. This Agreement shall commence on the Effective Date and shall
                            continue in full force and effect for a term, which is opted by the User in the
                            subscription plan or continue until terminated as per the terms mentioned
                            herein. Thereafter, this subscription plan can be renewed, upgraded or changed
                            by the User by paying the consideration amount accordingly as per the new plan
                            that is opted, unless either party terminates this Agreement by giving 30 days
                            prior written notice of such termination to the other party.<br></br>
                            <span className="text-justify">9.2 Termination for Material Breach. Either party may terminate this
                                Agreement for a material breach if the other party fails to cure any such
                                breach within fifteen (15) days after receipt of written notice specifying such
                                breach.</span><br></br>
                            <span className="text-justify">9.3 Termination for Cause. This Agreement may further be terminated for
                                cause at any time prior to its expiration for the following reasons: (a) by either
                                Party, if a petition in bankruptcy with respect to the other Party is filed or if
                                such other Party is liquidated; or (b) by either Party, upon a termination or
                                expiration of the License Agreement.</span><br></br>
                            <span className="text-justify">9.4 Termination due to Change in Control. (i) Either Party may terminate
                                this Agreement with one (1) month prior written notice to the other Party, if a
                                controlling interest in either party’s company or all or substantially all of the
                                business or assets of the Provider or User is acquired by any third party,
                                whether through merger, sale of assets, sale of stock or otherwise; or
                                (ii) where any substantial part of the other party’s property is or becomes
                                subject to any levy, seizure, assignment or sale for or by any creditor or
                                governmental agency without being released or satisfied within ten (10) days
                                thereafter.</span><br></br>
                            <span className="text-justify">9.5 Effects of Termination.<br></br>
                                (i) Upon termination, the User ‘s access to the API shall be immediately
                                terminated, and any outstanding fees or obligations shall become due and
                                payable;
                                (ii) Upon any termination of this Agreement, the parties will promptly cease all
                                use of the other’s trade names, trademarks, service marks and/or logos and
                                discontinue use of all materials, which reference the other party, its products
                                or services;</span><br></br>
                            <span className="text-justify">9.6 Refund Policy:<br></br>
                                We don’t have a Refund Policy as we are making payment commitment to our
                                cloud server service provider.</span></p>
                    </div>
                    <div id="general">
                        <h2><i></i>Article 10: General</h2>
                        <p className="far-star tex-justify">10.1 Notice. Any notice, approval, authorization, consent, or other
                            communication required or permitted to be delivered to either Party under this
                            Agreement must be in writing and will be deemed properly delivered, given,
                            and received (i) when delivered by hand, or (ii)registered post. All notices
                            shall be sent to address set forth below (or to such other address as may be
                            designated by a Party by giving written notice to the other party pursuant to
                            this Section 9.1):<br></br><br></br><br></br><br></br>

                            If to the Provider, to: &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; If to the User, to:<br></br>
                            2nd Floor, SAMVIT, Behind <br></br>
                            Udayapura Bus Stop 21st Km, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_______________________<br></br>
                            Kanakapura Rd, Udayapura, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________________<br></br>
                            Bengaluru, Karnataka - 560082,<br></br>
                            <br></br>
                            <br></br>
                            <span className="text-justify">10.2 Force Majeure. Force Majeure shall not give rise to any claim against
                                the other party, nor shall default or delay due to a Force Majeure Event, to be
                                deemed a breach of this Agreement. Force Majeure Event includes but is not
                                limited to fire, flood, earthquake, acts of war, terrorism, riots, civil disorders,
                                rebellion, strike (shall not include strike by Provider's staff), act of God,
                                pandemic, Covid-19, epidemic or Lockdown by Government Order.</span><br></br>
                            <span className="text-justify">10.3 Governing Law, Arbitration and Jurisdiction of Courts.<br></br>
                                (i) Governing Law: This Agreement shall be governed by and construed in
                                accordance with the laws of India.<br></br>
                                (ii) Arbitration: Any dispute, controversy or claim arising out of or in connection
                                with this Agreement, or breach, termination or invalidity thereof, shall be
                                settled by arbitration in accordance with the Arbitration and Conciliation Act,
                                1996. The Arbitral Tribunal shall be composed of three arbitrators, one to be
                                appointed by the Provider and one to be appointed by the User, and the
                                chairman to be appointed by the two arbitrators. In the event the Provider
                                requests arbitration, the place of arbitration shall be Bengaluru; and whereas
                                in the event the User requests Arbitration, the place of arbitration shall be
                                _________. The arbitration proceedings will be conducted in English. The
                                results of the arbitration procedure will be considered Confidential Information
                                of the Parties.<br></br>
                                (iii) Jurisdiction of Courts: Notwithstanding the foregoing, either party may, at
                                any time before the commencement of arbitration, commence any legal action
                                or proceeding arising out of or related to this Agreement to obtain interim or
                                preliminary relief, which shall be subject to the exclusive jurisdiction of the
                                courts located in Bangalore. The commencement of such an action shall not
                                constitute a waiver of the right to arbitrate.</span><br></br>
                            <span className="text-justify">10.4 Assignment. Neither Party may assign or transfer this Agreement or
                                any of its rights hereunder without the prior written consent of the other Party.
                                Notwithstanding the foregoing, either Party may assign this entire Agreement
                                or any of its rights hereunder, upon notice to the other Party but without such
                                other Party's consent, (i)to any of the assigning Party's Affiliates; and (ii)to a
                                third party in connection with a merger, change in control, or sale of all or
                                substantially all of the assets or business of the assigning Party pertaining to
                                this Agreement. This Agreement will be binding upon and shall inure to the
                                benefit of the Parties hereto and their respective successors and assigns.</span><br></br>
                            <span className="text-justify">10.5 Waiver. Unless otherwise expressly stated in this Agreement, the
                                failure to exercise or delay in exercising a right or remedy under this
                                Agreement shall not constitute a waiver of the right or remedy or a waiver of
                                any other rights or remedies, and no single or partial exercise of any right or
                                remedy under this Agreement shall prevent any further exercise of the right or
                                remedy or the exercise of any other right or remedy.</span><br></br>
                            <span className="text-justify">10.6 Severability. If any provision of this Agreement is or becomes, in whole
                                or in part, invalid or unenforceable but would be valid or enforceable if some
                                part of that provision was deleted, that provision shall apply with such
                                deletions as may be necessary to make it valid. If any Court/Tribunal of
                                competent jurisdiction holds any of the provisions of this Agreement unlawful
                                or otherwise ineffective, the remainder of this Agreement will remain in full
                                force and the unlawful or otherwise ineffective provision will be substituted by
                                a new provision reflecting the intent of the provision so substituted.</span><br></br>
                            <span className="text-justify">10.7 Independent Contractors. This Agreement shall be on a Principal-to-
                                Principal basis, and shall not create any employer-employee relationship
                                between the parties. The Provider shall provide all the services as promised in
                                this Agreement, as an independent entity and nothing herein contained shall
                                be deemed to create any association, partnership, joint venture, or
                                relationship of principal and agent, or master and servant, or employer and
                                employee between the parties hereto or any affiliates or subsidiaries thereof
                                or to provide either party with the right, power of authority, whether express or
                                implied to create any such duty or obligation on behalf of the other Party.</span><br></br>
                            <span className="text-justify">10.8 Counterparts. This Agreement may be executed in several
                                counterparts, each of which will constitute an original and all of which, when
                                taken together, will constitute one agreement.</span><br></br>
                            <span className="text-justify">10.9 English Language. This Agreement has been prepared in the English
                                language and the English language shall control its interpretation. In addition,
                                all notices required or permitted to be given hereunder, and all written,
                                electronic, or other communications between the parties regarding this
                                Agreement shall be in the English language.</span><br></br>
                            <span className="text-justify">10.10 Entire Agreement. This Agreement, including Addendum, constitutes
                                the complete and exclusive understanding and agreement between the
                                parties regarding its subject matter and supersedes all prior or
                                contemporaneous agreements or understandings, written or oral, relating to
                                its subject matter. This Agreement shall not be amended, modified, altered,
                                or supplemented other than by means of a written instrument duly executed
                                and delivered by both the Parties.</span><br></br>
                            <span className="text-justify">10.11 Conduct. By entering into this Agreement, both the Parties shall
                                ensure that their business and activities are conducted in such a manner
                                that the reputation, status and goodwill of each Party is in no way adversely
                                affected or compromised.</span><br></br>
                            <span className="text-justify">10.12 Headings. The headings appearing herein are inserted only as a
                                matter of convenience and as a reference, and in no way define, limit or
                                describe the scope or intent of the applicable clause or the Agreement.</span><br></br>
                            <span className="text-justify">10.13 Amendments. This Agreement shall not be varied, amended or
                                modified by any of the Parties in any manner, whatsoever, unless such
                                variation, amendment or modification is mutually discussed and agreed to in
                                writing and duly executed by both the Parties.</span><br></br>
                            <span className="text-justify">10.14 Acknowledgements. Each party acknowledges that he or she had an
                                adequate opportunity to read and understand this Agreement, to consider it
                                and consult with attorneys if he or she has so desired.</span></p>
                    </div>

                    {/* The rest of your content here */}
                    {/* Just replace 'Introduction' with the title of each section and 'Introduction content' with the actual content. */}
                    {/* Remember to also give unique ids to each div for linking in the navigation menu */}
                </div>
            </div>
    );
}
