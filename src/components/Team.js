import React from "react";
import zidane from "../assets/zidane.jpg";
import tonikroos from "../assets/tonikroos.jpg";
import ikercasillas from "../assets/ikercasillas.jpg";
import james from "../assets/james.jpg";
import christiano from "../assets/christiano.jpg";
import facebooksvg from "../assets/facebook.svg";
import linkedinsvg from "../assets/linkedin.png";
import medium from "../assets/medium.png";
import nba from "../assets/nba.png";

const Team = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            
            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl font-semibold text-black">
              Without bonding and co-ordination, every project is a failure.
              Look at who makes KICKSUP greate. ;)
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center mx-auto px-auto">
            <div className="p-4 lg:w-1/5 md:w-1/2 flex justify-center">
              <div className="h-full w-48 flex flex-col items-center text-center border-1 shadow-xl border-gray-500">
                <img
                  alt="team"
                  className="flex-shrink-0 w-full h-56 object-cover object-top mb-4"
                  src={zidane}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Zidane
                  </h2>
                  <h3 className="text-gray-500 mb-3 text-sm">
                    Leadership & Management
                  </h3>

                  <span className="inline-flex">
                    <a href="/" className="ml-2 text-gray-500">
                      <img className="w-11 h-auto" src={nba} alt="nba" />
                    </a>
                    <a href="/" className="ml-2 text-gray-500">
                      <img className="w-6 h-auto" src={medium} alt="medium" />
                    </a>
                    <a href="/" className="ml-2 text-gray-500">
                      <img
                        className="w-6 h-auto"
                        src={linkedinsvg}
                        alt="linkedin"
                      />
                    </a>
                    <a href="/" className="ml-2 text-gray-500">
                      <img
                        className="w-6 h-auto"
                        src={facebooksvg}
                        alt="facebook"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/5 md:w-1/2 flex justify-center">
              <div className="h-full w-48 flex flex-col items-center text-center border-1 shadow-xl border-gray-500">
                <img
                  alt="team"
                  className="flex-shrink-0 w-full h-56 object-cover object-top mb-4"
                  src={tonikroos}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Toni Kroos
                  </h2>
                  <h3 className="text-gray-500 mb-3">Product Developer</h3>

                  <span className="inline-flex">
                    <a href="/" className="ml-2 text-gray-500">
                      <img className="w-11 h-auto" src={nba} alt="nba" />
                    </a>
                    <a href="/" className="ml-2 text-gray-500">
                      <img className="w-6 h-auto" src={medium} alt="medium" />
                    </a>
                    <a href="/" className="ml-2 text-gray-500">
                      <img
                        className="w-6 h-auto"
                        src={linkedinsvg}
                        alt="linkedin"
                      />
                    </a>
                    <a href="/" className="ml-2 text-gray-500">
                      <img
                        className="w-6 h-auto"
                        src={facebooksvg}
                        alt="facebook"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/5 md:w-1/2 flex justify-center">
              <div className="h-full  w-48 flex flex-col items-center text-center border-1 shadow-xl">
                <img
                  alt="team"
                  className="flex-shrink-0 w-full h-56 object-cover object-top mb-4"
                  src={ikercasillas}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Iker Casillas
                  </h2>
                  <h3 className="text-gray-500 mb-3">Marketing Strategy</h3>

                  <span className="inline-flex">
                    <a href="/" className="ml-2 text-gray-500">
                      <img className="w-11 h-auto" src={nba} alt="nba" />
                    </a>
                    <a href="/" className="ml-2 text-gray-500">
                      <img className="w-6 h-auto" src={medium} alt="medium" />
                    </a>
                    <a href="/" className="ml-2 text-gray-500">
                      <img
                        className="w-6 h-auto"
                        src={linkedinsvg}
                        alt="linkedin"
                      />
                    </a>
                    <a href="/" className="ml-2 text-gray-500">
                      <img
                        className="w-6 h-auto"
                        src={facebooksvg}
                        alt="facebook"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/5 md:w-1/2 flex justify-center">
              <div className="h-full w-48  flex flex-col items-center text-center border-1 shadow-xl border-gray-500">
                <img
                  alt="team"
                  className="flex-shrink-0 w-full h-56 object-cover object-top mb-4"
                  src={james}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    James
                  </h2>
                  <h3 className="text-gray-500 mb-3">Product Designer</h3>

                  <span className="inline-flex">
                    <a href="/" className="ml-2 text-gray-500">
                      <img className="w-11 h-auto" src={nba} alt="nba" />
                    </a>
                    <a href="/" className="ml-2 text-gray-500">
                      <img className="w-6 h-auto" src={medium} alt="medium" />
                    </a>
                    <a href="/" className="ml-2 text-gray-500">
                      <img
                        className="w-6 h-auto"
                        src={linkedinsvg}
                        alt="linkedin"
                      />
                    </a>
                    <a href="/" className="ml-2 text-gray-500">
                      <img
                        className="w-6 h-auto"
                        src={facebooksvg}
                        alt="facebook"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/5 md:w-1/2 flex justify-center">
              <div className="h-full w-48  flex flex-col items-center text-center border-1 shadow-xl border-gray-500">
                <img
                  alt="team"
                  className="flex-shrink-0 w-full h-56 object-cover object-top mb-4"
                  src={christiano}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Christiano
                  </h2>
                  <h3 className="text-gray-500 mb-3">Financial Operations</h3>

                  <span className="inline-flex">
                    <a href="/" className="ml-2 text-gray-500">
                      <img className="w-11 h-auto" src={nba} alt="nba" />
                    </a>
                    <a href="/" className="ml-2 text-gray-500">
                      <img className="w-6 h-auto" src={medium} alt="medium" />
                    </a>
                    <a href="/" className="ml-2 text-gray-500">
                      <img
                        className="w-6 h-auto"
                        src={linkedinsvg}
                        alt="linkedin"
                      />
                    </a>
                    <a href="/" className="ml-2 text-gray-500">
                      <img
                        className="w-6 h-auto"
                        src={facebooksvg}
                        alt="facebook"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
