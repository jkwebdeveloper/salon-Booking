import { Banner } from "@/components";
import React from "react";

const Coockies = () => {
  return (
    <div className="space-y-4 ">
      <Banner
        title="COOKIES"
        background={"/static/images/Terms-conditions.jpg"}
      />
      <div className="container px-5 pt-10 pb-20 mx-auto space-y-5 md:px-28">
        <div className="space-y-2">
          <h2 className="text-base font-semibold md:text-2xl">
            Introduction To Understanding Cookies
          </h2>
          <div className="mx-3">
            <ul className="list-disc space-y-2 mx-3">
              <li className="text-[#666666] text-justify">
                {`A "cookie" is the information stored on your computer's hard
                  drive which logs how you navigate between the pages on a
                  website, the next time you visit that website cookies will
                  present you with options based on the short term memory stored
                  from your previous visit. Furthermore, cookies are used to
                  analyse traffic to a website and for advertising and marketing
                  purposes. Some websites contain hundreds of them.`}
              </li>
              <li className="text-[#666666] text-justify">
                {`Virtually all websites use cookies –you may regard them as
                little data files - to store information in peoples' web
                browsers, but they do not harm your system.`}
              </li>
              <li className="text-[#666666] text-justify">
                {`Cookie Law was designed to protect the online privacy of users
                to any website, by making these users aware of how information
                about them is collected and used online, and give them the
                option of whether they wish to allow it or not. They are widely
                thought of as making your web experience more personal.`}
              </li>
              <li className="text-[#666666] text-justify">
                {`Any user may decide to check or change the types of cookies they
                accept, by going into your browser settings you can control
                this. Blocking cookies at any time by activating the setting on
                your browser allows you to refuse all or some cookies, but if
                you block all cookies it may result in you not being able to
                access all or some parts of our site.`}
              </li>
              <li className="text-[#666666] text-justify">
                {`This website tells you how it uses cookies. Cookies are useful –
                they allow modern websites to work the way users have come to
                expect – with increasing levels of personal interaction and
                interactive functionality.`}
              </li>
              <li className="text-[#666666] text-justify">
                Cookies fall into different groups:
              </li>
            </ul>
          </div>
          <h2 className="text-base font-semibold md:text-2xl">
            Session Cookies:
          </h2>
          <p className="text-[#666666] text-justify">
            {`These are short-term or temporary; only stored in your browser
            memory during your active web session and are automatically
            destroyed when you close your browser – although they will survive
            to navigate away from the website they came from. They generally
            store an anonymous session ID which allows you to browse a website
            without having to log in to each page for essential site functions
            and to make sure pages are sent to the browser as quickly and
            efficiently as possible. However, they do not collect any personal
            data from your computer.`}
          </p>
          <h2 className="text-base font-semibold md:text-2xl">
            Persistent Cookies:
          </h2>
          <p className="text-[#666666] text-justify">
            {`A persistent cookie is stored as a file on your computer and it
            remains there when you close your web browser. The cookie can be
            read by the website that created it when you visit that website
            again. Persistent cookies are created by giving them an expiry date.
            If that expiry date is reached, it will be destroyed by the
            computer. If the expiry date is not set then it is automatically a
            session cookie.`}
          </p>
          <h2 className="text-base font-semibold md:text-2xl">
            How does PamperTree use cookies?
          </h2>
          <p className="text-[#666666] text-justify">
           {` We use cookies to understand the way you use our website. This helps
            us to understand how users navigate the site and track any patterns
            which evolve in your use of our website. This, in turn, assists us
            in developing and improving our website and ultimately the users’
            enjoyment of it, as well as PamperTree increasing products and/or
            services in response to your demands.`}
          </p>
          <p className="text-[#666666] text-justify">
            {`As PamperTree is a platform for a wide variety of Associates
            bringing to its users’ services and products in the hair and beauty
            sector and for massage and other therapies, PamperTree is using
            First Party Cookies. As 'Host' - PamperTree is the domain name of
            the site that ultimately sets the cookie. Only the host domain can
            retrieve and read the contents of the cookie once it has been set.
            First party cookies are only set or retrieved by the website while
            you are visiting it, so they cannot normally be used to track
            activity or pass data from one site to another. PamperTree can still
            collect data through their cookies and use that to change how the
            website appears to the user or the information it displays. This is
            further explained in our Privacy Policy Page.`}
          </p>
          <p className="text-[#666666] text-justify">
            {`Should the user link to the third party sites of Associates so that
            the host domain for a cookie is different to the one in the browser
            bar when it was downloaded, then it is a third-party cookie. Online
            advertising is the most common use of third-party cookies;
            advertisers can track a user (or their device) across many of the
            websites they visit.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coockies;
