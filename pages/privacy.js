import { useEffect, useState } from "react"

const Privacy = () => {
    const [url,setUrl] = useState("")
    useEffect(()=>{
        setUrl(window?.location?.origin)
    },[])
    return (
        <div className="container mt-5">
            <h1 className="text-center">Terms of Use & Privacy Policy</h1>
            <div>
                <h5>Terms of Use : </h5>
                <div className="m-4">
                    <p>Before using, you should know the following phone number is shared number. The content of the message can be viewed by everyone.<br />
                        Please do not use this phone number to receive important content.<br />
                        The phone number provided on this website is only used to register some websites to prevent being harassed.<br />
                        Others can retrieve the password through this phone number, so you should pay attention to your personal information when registering.<br />
                        We are not responsible for the resulting economic losses.<br />
                        When used, it means that the above terms have been agreed.</p>
                </div>
            </div>
            <div>
                <h5>Privacy Policy</h5>
                <div className="m-5">
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
                </div>
            </div>
        </div>
    )
}

export default Privacy