import React from "react";

import facebooksvg from "../assets/facebook.svg";
import twitter from "../assets/twitter.png";
import instagram from "../assets/insta.svg";


const Contact = () => {
  return (
    <>
      <section className="text-gray-600 body-font relative flex justify-center items-center flex-col mt-24">
        <div className="h-full w-96 flex flex-col items-center text-center border-1 shadow-xl border-gray-500">
          <h1 className="text-3xl my-10">React At Us</h1>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
              support@kicksup.com
            </h2>
            <h3 className="text-gray-500 mb-6 text-sm">
              for any technical support
            </h3>
            <h2 className="title-font font-medium text-lg text-gray-900">
              info@kicksup.com
            </h2>
            <h3 className="text-gray-500 mb-6 text-sm">for more infomation</h3>
            <h2 className="title-font font-medium text-lg text-gray-900">
              feedback@kicksup.com
            </h2>
            <h3 className="text-gray-500 mb-6 text-sm">
              for send your feedback
            </h3>
            <h2 className="title-font font-medium text-lg text-gray-900">
              jobs@kicksup.com
            </h2>
            <h3 className="text-gray-500 mb-6 text-sm">to work with us</h3>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div>
          <h3 className="mt-4 p-2">stay in touch</h3>
          </div>
          <div className="flex justify-center items-center">
          <span className="inline-flex justify-center items-center">
            <a href="/" className="ml-2 text-gray-500">
              <img className="w-6 h-auto" src={twitter} alt="medium" />
            </a>
            <a href="/" className="ml-2 text-gray-500">
              <img className="w-6 h-auto" src={instagram} alt="linkedin" />
            </a>
            <a href="/" className="ml-2 text-gray-500">
              <img className="w-6 h-auto" src={facebooksvg} alt="facebook" />
            </a>
          </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
