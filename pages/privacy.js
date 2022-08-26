import { useEffect, useState } from "react"

const Privacy = () => {
    const [url, setUrl] = useState("")
    useEffect(() => {
        setUrl(window?.location?.origin)
    }, [])
    return (
        <div className="container mt-5">
            <h1 className="text-center">Terms of Use & Privacy Policy</h1>
            <div>
                <h5>Terms of Use : </h5>
                <div className="m-4">
                    <ul>
                        <li>
                            You should know the following phone number is the public number.
                        </li>
                        <li>
                            Everyone can view the content of the messages.
                        </li>
                        <li>
                            Please don't use this phone number to receive important messages.
                        </li>
                        <li>
                            The phone number provided on this website is only used to register some websites and apps to prevent being harassed.
                        </li>
                        <li>
                            Others can recoup the password through this phone number, so you should pay attention to your particular information when registering.
                        </li>
                        <li>
                            We are not responsible for the resulting economic losses. When used, it means that the below terms have been agreed upon.
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h5>Privacy Policy :</h5>
                <div className="m-5">
                    <p>
                        The following terms & conditions govern all use of the Receivesmsonline.io website and all content, services, and products
                        available at or through the Website. The Website is offered subject to your acceptance without modification of
                        all the terms and conditions contained herein and all other operating rules, and policies (including, without limitation,
                        Receivesmsonline.io Privacy Policy), and procedures that may be published from time to time on this Site
                        by Receivesmsonline.io (collectively, the "Agreement").

                    </p>
                    <p>
                        Please read this Agreement carefully before accessing or using our website. By accessing or using any part of the website,
                        you agree to become bound by the terms and conditions of this agreement. If you do not agree to all the terms and
                        conditions of the agreement, then you may not access the website or you can't use any services.
                        If these terms & conditions are considered an offer by Receivesmsonline.io, acceptance is expressly limited to these terms.
                    </p>
                    <p>
                        Receivesmsonline.io reserves the right to, without any prior notice,
                        (i) remove or deny access to the Website to anyone
                        for any reason,
                        (ii) terminate or deny access to and use of the Website, or
                        (iii) remove or delete any content that
                        Receivesmsonline.io believes, in its sole discretion, violates any Receivesmsonline.io policy or is
                        otherwise harmful or objectionable. Receivesmsonline.io will not be obligated to provide a
                        refund for any services previously provided.

                    </p>
                </div>
                {/* <div className="m-5">
                    <p>
                        The following terms and conditions govern all use of the {url ? url : " "} website and all content, services and products available at or through the website. The Website is offered subject to your acceptance without modification of all of the terms and conditions contained herein and all other operating rules, policies (including, without limitation, {url ? url : " "}'s Privacy Policy) and procedures that may be published from time to time on this Site by {url ? url : " "} (collectively, the "Agreement").
                    </p>
                    <p>
                        Please read this Agreement carefully before accessing or using the Website. By accessing or using any part of the web site, you agree to become bound by the terms and conditions of this agreement. If you do not agree to all the terms and conditions of this agreement, then you may not access the Website or use any services. If these terms and conditions are considered an offer by {url ? url : " "}, acceptance is expressly limited to these terms.
                    </p>
                    <p>
                        {url ? url : " "} has the right (though not the obligation) to, in {url ? url : " "}'s sole discretion (i) refuse or remove any content that, in {url ? url : " "}'s reasonable opinion, violates any {url ? url : " "} policy or is in any way harmful or objectionable, or (ii) terminate or deny access to and use of the Website to any individual or entity for any reason, in {url ? url : " "}'s sole discretion. {url ? url : " "} will have no obligation to provide a refund of any amounts previously paid.
                    </p>
                    <p>
                        Termination. {url ? url : " "} may terminate your access to all or any part of the Website at any time, with or without cause, with or without notice, effective immediately. If you wish to terminate this Agreement or your {url ? url : " "} account (if you have one), you may simply discontinue using the Website. All provisions of this Agreement which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                    </p>
                    <p>
                        Disclaimer of Warranties. The Website is provided "as is". {url ? url : " "} and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement. Neither {url ? url : " "} nor its suppliers and licensors, makes any warranty that the Website will be error free or that access thereto will be continuous or uninterrupted. You understand that you download from, or otherwise obtain content or services through, the Website at your own discretion and risk.
                    </p>
                    <p>
                        Limitation of Liability. In no event will {url ? url : " "}, or its suppliers be liable with respect to any subject matter of this agreement under any contract, negligence, strict liability or other legal or equitable theory for: (i) any special, incidental or consequential damages; (ii) the cost of procurement for substitute products or services; (iii) for interruption of use or loss or corruption of data; or (iv) for any amounts that exceed the fees paid by you to {url ? url : " "} under this agreement during the twelve (12) month period prior to the cause of action. {url ? url : " "} shall have no liability for any failure or delay due to matters beyond their reasonable control. The foregoing shall not apply to the extent prohibited by applicable law. General Representation and Warranty. You represent and warrant that (i) your use of the Website will be in strict accordance with the {url ? url : " "} Privacy Policy, with this Agreement and with all applicable laws and regulations (including without limitation any local laws or regulations in your country, state, city, or other governmental area, regarding online conduct and acceptable content, and including all applicable laws regarding the transmission of technical data exported from the country in which you reside) and (ii) your use of the Website will not infringe or misappropriate the intellectual property rights of any third party. Indemnification. You agree to indemnify and hold harmless {url ? url : " "}, its contractors, and its licensors, and their respective directors, officers, employees and agents from and against any and all claims and expenses, including attorneys' fees, arising out of your use of the Website, including but not limited to your violation of this Agreement.
                    </p>
                    <p>
                        Miscellaneous. This Agreement constitutes the entire agreement between {url ? url : " "} and you concerning the subject matter hereof, and they may only be modified by a written amendment signed by an authorized executive of {url ? url : " "}, or by the posting by {url ? url : " "} of a revised version. You may assign your rights under this Agreement to any party that consents to, and agrees to be bound by, its terms and conditions; {url ? url : " "} may assign its rights under this Agreement without condition. This Agreement will be binding upon and will inure to the benefit of the parties, their successors and permitted assigns.
                    </p>
                    <p>
                        It is our policy to respect your privacy regarding the use of this service. No personally identifying information is kept, and all message contents are temporary. Your privacy and trust is very important to us. Like most website operators, {url ? url : " "} collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. {url ? url : " "}'s purpose in collecting non-personally identifying information is to better understand how {url ? url : " "}'s visitors use its website. From time to time, {url ? url : " "} may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website. {url ? url : " "} may collect statistics about the behavior of visitors to its websites. {url ? url : " "} may display this information publicly or provide it to others. However, {url ? url : " "} does not collect or disclose personally-identifying information other than as described below. Google is used as an advertisement vendor and employs cookies to serve ads on this site. {url ? url : " "} has no access to the cookies used by Google or other advertising vendors for the serving of these advertisements.
                    </p>
                </div> */}
            </div>
            <div>
                <h5>Termination :</h5>
                <div className="m-5">
                    <p>Receivesmsonline.io may terminate your access to the Website at any time, for any reason, with or without notice,
                        immediately. You may terminate this Agreement or your Receivesmsonline.io account (if you have one) by
                        discontinuing your use of the Website. All provisions of this Agreement that survive termination,
                        including without limitation ownership provisions, warranty disclaimers, indemnification, and limitations of liability,
                        will survive.
                    </p>
                </div>
            </div>
            <div>
                <h5>Disclaimer of Warranties :</h5>
                <div className="m-5">
                    <p>
                        Receivesmsonline.io and its licensors and suppliers offer no guarantees of any kind, implicit or explicit,
                        including without limitation, no warranties of merchantability, fitness for a particular purpose, or non-infringement.
                        The Website is provided 'as is.' Receivesmsonline.io and its suppliers and licensors disclaim all warranties,
                        express or implied, including, without limitation, those of merchantability, fitness for a particular purpose,
                        and non-infringement. Receivesmsonline.io and its suppliers and licensors do not guarantee that the website will
                        be error-free or that it will be continuously or uninterruptedly accessible. You are responsible for obtaining
                        content and services through the website at your own risk.

                    </p>
                </div>
            </div>
            <div>
                <h5>
                    Limitation of Liability :
                </h5>
                <div className="m-5">
                    <p>
                        In no event will Receivesmsonline.io or its suppliers be liable for any subject matter of this agreement under any contract, negligence, strict liability, or other legal or equitable theory for:
                        (i) any special, incidental, or consequential damages; (ii) the cost of procurement for substitute products or services;
                        (iii) for interruption of use or loss or corruption of data; or (iv) for any amounts that exceed the fees paid by you
                        to Receive-Sms.CC under this agreement during the twelve (12) month period prior to the cause of action.
                        Receivesmsonline.io shall have no liability for any failure or delay due to matters beyond their reasonable control.
                        The previous shall not apply to the extent prohibited by applicable law. General Representation and Warranty.
                        You represent and warrant that (i) your use of the Website will be in strict accordance with the Receivesmsonline.io
                        Privacy Policy, with this Agreement, and with all applicable laws and regulations (including without limitation
                        any local laws or regulations in your country, state, city, or other governmental areas, regarding online conduct
                        and acceptable content, and including all applicable laws regarding the transmission of technical data exported from
                        the country in which you reside) and (ii) your use of the Website will not infringe or misappropriate
                        the intellectual property rights of any third party. You agree to indemnify and hold harmless Receivesmsonline.io,
                        its contractors, its licensors, and their respective directors, officers, employees, and agents from and against
                        any and all claims and expenses, including attorneys' fees, arising out of your use of the Website,
                        including but not limited to your violation of this Agreement.

                    </p>
                </div>
            </div>
            <div>
                <h5>Miscellaneous :</h5>
                <div className="m-5">
                    <p>
                        This Agreement constitutes the entire agreement between Receivesmsonline.io and you concerning the subject matter.
                        They may only be modified by a written correction inked by a sanctioned superintendent of Receivesmsonline.io or by
                        the advertisement by Receivesmsonline.io of a revised interpretation. You may assign your rights under
                        this Agreement to any party that warrants and agrees to be bound by its terms and conditions; Receivesmsonline.io
                        may assign its rights under this Agreement without condition. This Agreement will be binding upon and
                        season to the benefit of the parties, their successors, and permitted assigns.

                    </p>
                    <p>
                        Receivesmsonline.io respects your privacy regarding the operation of this service. We don't maintain any personally
                        identifiable information; each message is temporary. Your privacy and confidence are tremendously significant to us.
                        We collect non-personally identifiable information from web browsers and servers typically make available, such as
                        browser type, preferred language, referring site, and visitor time. Receivesmsonline.io collects non-individual
                        identifying information to comprehend better how people use its website. From time to time, Receivesmsonline.io may
                        publish non-personal data due to aggregating it. Receivesmsonline.io may collect data on how visitors use its websites.
                        This information may be published or provided to others. Receivesmsonline.io doesn't collect or share
                        personally-identifiable data other than what is specified below. Google is used as a display advertiser,
                        and cookies are used to serve ads on this website. Receivesmsonline.io does not have access to the cookies used by
                        Google or other advertisers for serving these ads.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Privacy