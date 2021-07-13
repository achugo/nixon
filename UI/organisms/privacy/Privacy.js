import React from "react";
import styled from "styled-components";
import FlexItem from "../../../components/layout/FlexItem";
import FlexWrapper from "../../../components/layout/FlexWrapper";
import { AppColors } from "../../../config/AppColor";
import { AppFont } from "../../../config/AppFont";
import Header from "../../atoms/Header";
import Input from "../../atoms/Input";
import SubHeader from "../../atoms/SubHeader";
import Text from "../../atoms/Text";
import TextArea from "../../atoms/textarea";

const Wrapper = styled.div`
  background-image: url("/assets/svg/herocurve.svg");
  //background-color: #e5e5e5;
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: -10vh;
  position: relative;
  z-index: 1;
  padding-top: 15vh;

  p {
    font-family: ${AppFont.REGULAR};
    font-size: 18px;
    color: ${AppColors.ash};
  }
`;

const Privacy = () => {
  return (
    <Wrapper>
      <div className="container">
        <p>
          Nixon Express Logistics ("NEL", “Nixon Express”, “the Company", "we"
          or "us") a company registered under the laws of the Federal Republic
          of Nigeria and having its registered office in Imo State, is committed
          to protecting the privacy and security of any identifiable business
          information you provide us
        </p>
        <p>
          Business Information includes information that can be linked to a
          specific individual or entity, such as a postal address, phone number
          or email address.
        </p>
        <p>
          This Privacy Policy is in accordance with commonly accepted privacy
          principles and best practices among global regulatory bodies. This
          Privacy Policy should be read in conjunction with Company’s Terms and
          Conditions of Use.
        </p>
        <p>
          NEL reserves the right to modify or amend this Privacy Policy at any
          time and for any reason, and such modifications will be effective
          immediately upon posting the modified Privacy Policy to the company’s
          website.
        </p>
        <p>
          Any material changes to this Privacy Policy will be posted prior to
          implementation. Questions regarding this policy should be emailed to
          <a href="mailto:info@nixonexpress.com">info@nixonexpress.com.</a>
        </p>
        <p>
          Additional terms and conditions relating to all business listings and
          advertising on the Nixon Express services can be found here.
        </p>
        <p>
          Please read this Privacy Policy carefully before accessing or using
          any of the information and services available through NEL which
          include, but are not limited to, the apexnixon.com (the "Site"), the
          Nixon Express mobile website, the Nixon Express mobile application,
          SMS service and telephone service.
        </p>
        <p>
          The services may be accessed in several ways, such as via the
          internet, mobile phones, fixed line phones, Personal Data Assistants
          (PDAs) and other methods.
        </p>
        <b>What Information We Collect </b>{" "}
        <p>
          • Information we may hold or collect from you includes: your name,
          telephone numbers, email addresses, business name, addresses, website
          address, fax number, business description, financial information,
          various other information you may wish to disclose relating to your
          business registration, passwords to log into your NEL account, reviews
          from users and financial information.
        </p>
        <p>
          Please note that if you are required to publish your business details
          on NEL, you may experience difficulty or delays with your listing or
          submission if you choose not to provide us with certain information.
        </p>
        <p>
          • Any information posted in public areas of NEL such as online notice
          boards or business listing information that you have elected to
          disclose is by its very nature public and not considered to be
          Personal Information.
        </p>
        <p>
          • Generally, we collect Business Information from you directly and any
          personal information you may want to share with us.
        </p>
        <p>
          However, in some cases we may obtain your business information through
          our partners, service providers or associates where you have given
          them permission to do so or from publicly available sources.
        </p>
        <h3>Disclaimer</h3>
        <p>
          NEL shall not be responsible or liable for any personal information
          contained in information given to us through our sources. If you find
          any information you consider personal or private which you do not wish
          to share with the public, kindly notify us immediately or within 30
          days of publication of such information on our website.
        </p>
        <p>
          The information shall be withdrawn within two (2) working days from
          the time of confirmed receipt of report.
        </p>
        <p>
          Other information we may collect When you use the Services, we record
          and log general information about your visit for statistical purposes
          including but not limited to web browser details, internet protocol
          address, telephone numbers, duration of visit and numerous other
          facts. We may, from time to time, use "cookies" (explained below) to
          store your preferences, record session information and collect
          information on how you visit and access our web pages. We collect
          information on the web pages visited by our customers to help us
          continue to improve our services.
        </p>
        <b>Please Note...</b> <br />
        <p>
          NEL will not take responsibility in any way for the use or misuse of
          any information you provide directly to businesses or any third
          parties, personal or otherwise, or any information you find through
          us. We are also not responsible for any of the content or practices of
          3rd party partners. Please check their relevant terms and conditions
          and privacy policies.
        </p>
        <h3>How We Use Your Information</h3>
        <p>
          NEL uses business information mainly for the purpose of responding to
          and fulfilling your requests for the products and services listed by
          us. Information so collected may be used to:
        </p>
        <p>
          • Respond directly to email or SMS requests by you through the use of
          the email address or telephone number you provide.
        </p>
        <p>
          • Send newsletters or other emails only where you have opted to
          receive them.
        </p>
        <p>
          • Respond to your questions or suggestions. We will use your Email
          address and/or telephone number to contact you when you submit a
          question or suggestion.{" "}
        </p>
        <p>
          • Help us research and improve our products and services and, <br />•
          As such we may, from time to time, contact you to let you know about
          service improvements, products or promotions that may be of interest
          to you or to ask you for feedback in the event you wish to provide it.{" "}
        </p>
        <p>
          • We may also use Business Information in an aggregate form for
          various purposes such as marketing and statistical analysis but will
          only ever disclose compiled or completely anonymous results.
        </p>
        <p>
          Who We Share Your Information With <br />
          As a rule, we do not share with 3rd parties any Information that is
          not publicly available on NEL except in the following circumstances:
        </p>
        <p>
          • With other companies who have an agency, partnering or co-branding
          relationship with NEL but agree to protect Information to the same
          standard as maintained by NEL. <br />
          • From time to time, there may be third parties who provide
          competitive or other benefits to you through NEL and request to
          collect Information. In the event this happens, we will require those
          third parties to protect the information to the same standard as
          maintained by NEL. <br />
          • Where we may be required by law to do so. <br />
          • Where you have a representative such as an auditor or lawyer who is
          authorized by you to receive such Information. <br />
          • Where, in our reasonable opinion, there is threat to our interests
          (such as customer fraud) or where there is a possibility of harm to
          others. <br />
        </p>
        <p>
          • Where your information appears in a publicly available portion of an
          advertisement or business listing published with NEL or is otherwise
          publicly available, we may also use that information for publication
          in other media or with other third parties such as our partners,
          associates and affiliates but we will take reasonable steps to make
          sure any such party uses the information for prudent and legitimate
          purposes.
        </p>
        <p>
          How You Can Control or Access Your Information We believe that users
          and customers should have control over the collection and use of their
          Information. So if you would like to access or inquire about your
          Information, please contact us at info@nixonexpress.com. <br />
          Note that you may be required to provide proof of identity or make
          statements for security reasons. We also reserve the right to charge a
          fee for repetitive requests for providing you with access or answering
          inquiries about your Information. <br />
          If for some reason we cannot disclose the information then we will let
          you know (for example, if the information has been deleted from our
          system). <br />
          Please note that certain publicly available information we receive and
          provide may be from external data sources. Where such publicly
          available information pertains to you, we will not be able to disclose
          or edit such information nor will we have access to or be able to
          provide you with any underlying information that you used in
          originally supplying information to any external data source.
        </p>
        <p>
          Cookies Cookies are pieces of information that our web page transfers
          to your computer's hard disk for record-keeping purposes. Cookies can
          make the web more useful by storing information about your preferences
          on a particular site. <br />
          The use of cookies is an industry standard and many websites use them
          to provide useful features for you. Cookies do not personally identify
          you, only your computer. <br />
          We may use these cookies to store information, such as user
          preferences when you visit our website. Certain third parties who
          advertise with or supply services to us may also use technology, such
          as cookies, that collect anonymous information. <br />
          You can delete or disable cookies from your computer at any time (see
          your internet browser's help menu for more information). <br />
          Please note that if you choose to delete or disable cookies, you may
          not be able to fully interact with our website or other websites.{" "}
          <br />
          Also note that deleting a cookie is different from disabling a cookie
          and, among other things, just because a cookie is deleted does not
          mean that new cookies will not be created and stored in the future.{" "}
          <br />
        </p>
        <p>
          Advertisers, Business Owners and Users of NEL Website <br />
          In addition to this Privacy Policy, advertisers and clients should
          read the Privacy section contained in the Terms and Conditions of Use
          for Nixon Express website.
        </p>
      </div>
    </Wrapper>
  );
};

export default Privacy;
