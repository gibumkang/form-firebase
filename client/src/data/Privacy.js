import React from 'react';
import styled from 'styled-components';

const Header = styled.h3`
	margin-top: 3rem;
`;

const List = styled.ul`
	list-style: circle;
	margin: 2rem;
	li {
		font-size: 1.8rem;
		padding: 0.5rem 0rem;
	}
`;

const NoBullet = styled.ul`
	list-style: none;
	margin: 2rem 2rem 2rem 0rem;
	li {
		font-size: 1.6rem;
		padding: 0.25rem 0rem;
	}
`;

export const Privacy = () => {
	return (
		<>
			<p>
				Protecting your private information is our priority. This Statement of Privacy applies to goodhandsvegas.com and Kang Family Insurance
				Inc and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Kang
				Family Insurance Inc include goodhandsvegas.com and KFI Inc. The KFI Inc website is a Insurance site. By using the KFI Inc website,
				you consent to the data practices described in this statement.
			</p>
			<Header>Collection of your Personal Information</Header>
			<p>
				In order to better provide you with products and services offered on our Site, KFI Inc may collect personally identifiable
				information, such as your:
			</p>
			<List>
				<li>First and Last Name</li>
				<li>Mailing Address</li>
				<li>E-mail Address</li>
				<li>Phone Number</li>
			</List>
			<p>KFI Inc may also collect anonymous demographic information, which is not unique to you, such as your:</p>
			<List>
				<li>Age</li>
				<li>Gender</li>
			</List>
			<p>
				We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide
				certain personal information to us when you elect to use certain products or services available on the Site. These may include: (a)
				registering for an account on our Site; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up
				for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment
				information when ordering and purchasing products and services on our Site. To wit, we will use your information for, but not limited
				to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal
				or non-personal information in the future.
			</p>
			<Header>Use of your Personal Information</Header>
			<p>KFI Inc collects and uses your personal information to operate its website(s) and deliver the services you have requested.</p>
			<p>
				KFI Inc may also use your personally identifiable information to inform you of other products or services available from KFI Inc and
				its affiliates.
			</p>
			<Header>Sharing Information with Third Parties</Header>
			<p>KFI Inc does not sell, rent or lease its customer lists to third parties.</p>
			<p>
				KFI Inc may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer
				support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these
				services to KFI Inc, and they are required to maintain the confidentiality of your information.
			</p>
			<p>
				KFI Inc may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such
				action is necessary to: (a) conform to the edicts of the law or comply with legal process served on KFI Inc or the site; (b) protect
				and defend the rights or property of KFI Inc; and/or (c) act under exigent circumstances to protect the personal safety of users of
				KFI Inc, or the public.
			</p>
			<Header>Automatically Collected Information</Header>
			<p>
				Information about your computer hardware and software may be automatically collected by KFI Inc. This information can include: your IP
				address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the
				service, to maintain quality of the service, and to provide general statistics regarding use of the KFI Inc website.
			</p>
			<Header>Use of Cookies</Header>
			<p>
				The KFI Inc website may use "cookies" to help you personalize your online experience. A cookie is a text file that is placed on your
				hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely
				assigned to you, and can only be read by a web server in the domain that issued the cookie to you.
			</p>
			<p>
				One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the
				Web server that you have returned to a specific page. For example, if you personalize KFI Inc pages, or register with KFI Inc site or
				services, a cookie helps KFI Inc to recall your specific information on subsequent visits. This simplifies the process of recording
				your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same KFI Inc website, the
				information you previously provided can be retrieved, so you can easily use the KFI Inc features that you customized.
			</p>
			<p>
				You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your
				browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the
				interactive features of the KFI Inc services or websites you visit.
			</p>
			<Header>Security of your Personal Information</Header>
			<p>
				KFI Inc secures your personal information from unauthorized access, use, or disclosure. KFI Inc uses the following methods for this
				purpose:
			</p>
			<List>
				<li>SSL Protocol</li>
			</List>
			<p>
				When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of
				encryption, such as the Secure Sockets Layer (SSL) protocol. We strive to take appropriate security measures to protect against
				unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any
				wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you
				acknowledge that: (a) there are security and privacy limitations inherent to the Internet which are beyond our control; and (b)
				security, integrity, and privacy of any and all information and data exchanged between you and us through this Site cannot be
				guaranteed.
			</p>
			<Header>Right to Deletion</Header>
			<p>Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:</p>
			<List>
				<li>Delete your personal information from our records; and</li>
				<li>Direct any service providers to delete your personal information from their records.</li>
			</List>
			<p>Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:</p>
			<List>
				<li>
					Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product
					recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the
					context of our ongoing business relationship with you, or otherwise perform a contract between you and us;
				</li>
				<li>
					Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible
					for that activity;
				</li>
				<li>Debug to identify and repair errors that impair existing intended functionality;</li>
				<li>
					Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right
					provided for by law;
				</li>
				<li>Comply with the California Electronic Communications Privacy Act;</li>
				<li>
					Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other
					applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the
					achievement of such research, provided we have obtained your informed consent;
				</li>
				<li>Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;</li>
				<li>Comply with an existing legal obligation; or</li>
				<li>
					Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided
					the information.
				</li>
			</List>

			<Header>Children Under Thirteen</Header>
			<p>
				KFI Inc does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the
				age of thirteen, you must ask your parent or guardian for permission to use this website.
			</p>
			<Header>E-mail Communications</Header>
			<p>
				From time to time, KFI Inc may contact you via email for the purpose of providing announcements, promotional offers, alerts,
				confirmations, surveys, and/or other general communication.
			</p>
			<p>
				If you would like to stop receiving marketing or promotional communications via email from KFI Inc, you may opt out of such
				communications by replying STOP.
			</p>
			<Header>Changes to this Statement</Header>
			<p>
				KFI Inc reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we
				treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice
				on our site, and/or by updating any privacy information on this page. Your continued use of the Site and/or Services available through
				this Site after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide
				and be bound by that Policy.
			</p>
			<Header>Contact Information</Header>
			<p>
				KFI Inc welcomes your questions or comments regarding this Statement of Privacy. If you believe that KFI Inc has not adhered to this
				Statement, please contact KFI Inc at:
			</p>
			<NoBullet>
				<li>Kang Family Insurance Inc</li>
				<li>3519 S Maryland Pkwy Ste F</li>
				<li>Las Vegas, Nevada 89169</li>
			</NoBullet>

			<NoBullet>
				<li>Email Address:</li>
				<li>joekang@allstate.com</li>
			</NoBullet>
			<NoBullet>
				<li>Telephone number:</li>
				<li>702-545-9130</li>
			</NoBullet>
		</>
	);
};

export default Privacy;
