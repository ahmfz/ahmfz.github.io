// src/App.tsx
import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "/public/assets/css/particles.css"; 
import trendMicroLogo from "./logos/trendmicro.svg";
import ibmLogo from "./logos/ibm.svg";
import sangforLogo from "./logos/sangfor.svg";
import wazuhLogo from "./logos/wazuh.svg";
import microsoftLogo from "./logos/microsoft.svg";

// TODO: replace with your real contact address
const CONTACT_EMAIL = "ahmed.fayyaz@live.com";

const App: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setContactForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, subject, message } = contactForm;
    const mailSubject = subject || `Message from ${name || "website visitor"}`;
    const mailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <Nav />
      <main id="home" className="w-full">
       {/* Floating light elements contained within the hero section */} 

        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
      
      {/* #### HERO SECTION #### */}
      
      <section className="pt-20 md:pt-0 bg-white dark:bg-black">

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 relative z-10">
        <div className="mr-auto place-self-center lg:col-span-7">
        <h1
            id="dynamicHeadline"
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            Secure Your Future with{" "}
            <span id="dynamicWords" className="text-green-500 font-bold">
              Research-backed Defense
            </span>
          </h1>

          <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 text-3xl dark:text-gray-400">
            Combining hands-on Informationsecurity expertise and solution design with applied research to detect threats, strengthen defenses, and build secure digital environments.

          </p>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text:3xl text-center text-white  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            More About Me
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-4 text-base font-medium text:3xl text-center text-gray-900 border-4 border-green-300  hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
          >
            Contact Me!
          </a>
        </div>
        <div 
          id="hacker-logo" 
          className="lg:mt-0 lg:col-span-5 lg:flex relative z-10"
          style={{ opacity: 0 }}  // This ensures it's initially invisible but still rendered
        >
          <img
            src="./assets/images/hacker.png"
            alt="hacker"
          />
        </div>
      </div>
    </section>

    {/* #### ACCOLADES SECTION #### */}
        <section className="bg-white dark:bg-black ">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-28 lg:px-6 border-4 border-solid border-green-700 bg-white dark:bg-black relative z-20">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                      <span data-counter-target="5">5</span>+
                  </dt>
                  <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Years of Experience</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                      <span data-counter-target="3">3</span>
                  </dt>
                  <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Research Publications</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                      <span data-counter-target="150">150</span>+
                  </dt>
                  <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Security Incidents Investigated</dd>
              </div>
          </dl>
                    </div>
                    
        </section>

        {/* #### SERVICES SECTION #### */}
          <section id="services" className="pt-8 pb-12 bg-white dark:bg-black flex justify-center items-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">

              <div className="max-w-screen-md mb-8 lg:mb-12 mx-auto">
                <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Researching Threats, Engineering Security
                </h2>
                <p className="text-gray-500 text-2xl dark:text-gray-400">
                Specialized in helping organizations fortify their digital infrastructure before real threats emerge.Every engagement ends with findings you can act on.
                </p>
              </div>

              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg 
                      className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125"
                      aria-hidden="true" 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1" 
                        d="M9.5 11.5 11 13l4-3.5M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">SOC Services</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                    Involves analyzing and responding to security incidents to ensure data and system integrity.A proactive approach for threat hunting and enhance security posture, safeguarding digital assets and maintaining regulatory compliance.
                  </p>
                </div>

                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 15v3c0 .5523.44772 1 1 1h8v-8m-9 4v-4m0 4h9m-9-4V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4M3 11h11m6.25 5c0 1.2426-1.0073 2.25-2.25 2.25M20.25 16c0-1.2426-1.0073-2.25-2.25-2.25M20.25 16H21m-3 2.25c-1.2426 0-2.25-1.0074-2.25-2.25M18 18.25V19m-2.25-3c0-1.2426 1.0074-2.25 2.25-2.25M15.75 16H15m3-2.25V13m-1.591 1.409-.5303-.5303m4.2426 4.2426-.5303-.5303m-3.182 0-.5303.5303m4.2426-4.2426-.5303.5303"/>
                </svg>

                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Presales & Solution Design</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                  Translating business and security requirements into practical solutions through technical assessments, proposals, Proof Of Concepts and vendor collaboration.
                  </p>
                </div>
                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"/>
                  </svg>

                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Research and Technical Writing</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                  Literature reviews, technical papers and white papers on security topics, for organisations and academic teams.
                  </p>
                </div>
                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14.7141 15h4.268c.4043 0 .732-.3838.732-.8571V3.85714c0-.47338-.3277-.85714-.732-.85714H6.71411c-.55228 0-1 .44772-1 1v4m10.99999 7v-3h3v3h-3Zm-3 6H6.71411c-.55228 0-1-.4477-1-1 0-1.6569 1.34315-3 3-3h2.99999c1.6569 0 3 1.3431 3 3 0 .5523-.4477 1-1 1Zm-1-9.5c0 1.3807-1.1193 2.5-2.5 2.5s-2.49999-1.1193-2.49999-2.5S8.8334 9 10.2141 9s2.5 1.1193 2.5 2.5Z"/>
                  </svg>

                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Security Consultation</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                  Strategic guidance and expert recommendations to strengthen your security posture, implement industry best practices, and develop effective incident response procedures.
                  </p>
                </div>
                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 5 9 4V3m5 2 1-1V3m-3 6v11m0-11a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m5-5a4.959 4.959 0 0 1 2.973 1H15V8a3 3 0 0 0-6 0v2h.027A4.959 4.959 0 0 1 12 9Zm-5 5H5m2 0v2a5 5 0 0 0 10 0v-2m2.025 0H17m-9.975 4H6a1 1 0 0 0-1 1v2m12-3h1.025a1 1 0 0 1 1 1v2M16 11h1a1 1 0 0 0 1-1V8m-9.975 3H7a1 1 0 0 1-1-1V8"/>
                </svg>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">System Analysis</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                  Discovered and responsibly disclosed over 50 critical vulnerabilities in major platforms, contributing to the security of millions of users worldwide through ethical hacking.
                  </p>
                </div>
                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"/>
                </svg>

                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Security Training</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                  Customized training programs to educate your team about current security threats, defensive techniques, secure coding practices, and cybersecurity best practices.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* #### LOGOS SECTION #### */}
{/* #### LOGOS SECTION #### */}
<section className="bg-gray-100 dark:bg-black lg:py-18 lg:px-6 border-t-4 border-b-4 border-solid border-green-700 relative z-20">
    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">

        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            Technology Stack
        </h2>

        {/* Updated grid to 5 columns on desktop so all logos remain on a single row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center text-gray-500 dark:text-gray-400">

            {/* Trend Micro */}
            <a
                href="https://www.trendmicro.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-20 transition-all duration-300 hover:scale-105"
            >
                <img
                    src={trendMicroLogo}
                    alt="Trend Micro"
                    className="max-h-12 w-auto max-w-[140px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:brightness-0 dark:invert"
                />
            </a>

            {/* IBM */}
            <a
                href="https://www.ibm.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-20 transition-all duration-300 hover:scale-105"
            >
                <img
                    src={ibmLogo}
                    alt="IBM"
                    className="max-h-12 w-auto max-w-[140px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:brightness-0 dark:invert"
                />
            </a>

            {/* Sangfor */}
            <a
                href="https://www.sangfor.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-20 transition-all duration-300 hover:scale-105"
            >
                <img
                    src={sangforLogo}
                    alt="Sangfor"
                    className="max-h-12 w-auto max-w-[140px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:brightness-0 dark:invert"
                />
            </a>

            {/* Wazuh */}
            <a
                href="https://wazuh.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-20 transition-all duration-300 hover:scale-105"
            >
                <img
                    src={wazuhLogo}
                    alt="Wazuh"
                    className="max-h-12 w-auto max-w-[140px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:brightness-0 dark:invert"
                />
            </a>

            {/* Microsoft */}
            <a
                href="https://www.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-20 transition-all duration-300 hover:scale-105"
            >
                <img
                    src={microsoftLogo}
                    alt="Microsoft"
                    className="max-h-42 w-auto max-w-[140px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:brightness-0 dark:invert"
                />
            </a>

        </div>
    </div>
</section>
          {/* #### SERVICES SECTION #### */}
          <section id="about" className="bg-white dark:bg-black pt-8">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                About Me
              </h2>
              <p className="mb-4 text-3xl">
              Think Like An Attacker. Defend Like A professional.
              </p>
              <p className="text-xl">
             I'm an information security specialist with 5+ years of experience, starting with CTF competitions and growing into a full-time career in Information Security, helping organizations find and close the gaps others overlook.
Alongside this, I'm a researcher. I bring that rigor to every engagement, whether it's SOC Service, security consultation, or training teams to defend themselves.
              </p>
              <a href="https://www.fiverr.com/mrahmedfayyaz" className="inline-flex mt-8 items-center justify-center px-5 py-4 text-base font-medium text:3xl text-center text-gray-900 border-4 border-green-300  hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
          >
            Order My Services
          </a>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full transition-all duration-300 hover:saturate-150 hover:brightness-75 hover:hue-rotate-15"
              src="./assets/images/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 transition-all duration-300 hover:saturate-150 hover:brightness-75 hover:hue-rotate-15"
              src="./assets/images/office-long-1.png"
              alt="office content 2"
            />
          </div>
          </div>
          <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6 border-t-4 border-solid border-green-700 pt-12">
            <h2 className="mb-8 lg:mb-12 text-3xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Why My Services
            </h2>
            <div className="grid gap-10 md:grid-cols-3 md:gap-12">
              <div className="transform transition-all duration-300 hover:scale-105 group">
                <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M4 19V6a2 2 0 0 1 2-2h9l5 5v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm11-13v4a1 1 0 0 0 1 1h4M9 15l2 2 4-5"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold dark:text-white">Precision Design</h3>
                <p className="text-gray-500 text-lg dark:text-gray-400">
                  Solution design tailored to your infrastructure and business targets.
                </p>
              </div>
              <div className="transform transition-all duration-300 hover:scale-105 group">
                <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Zm0 0v18M8 10.5l2.5 2.5 5-5"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold dark:text-white">Proactive Defense</h3>
                <p className="text-gray-500 text-lg dark:text-gray-400">
                  SOC capabilities and real-time threat hunting.
                </p>
              </div>
              <div className="transform transition-all duration-300 hover:scale-105 group">
                <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M9 17V9m3 8V5m3 12v-5M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold dark:text-white">Actionable Insights</h3>
                <p className="text-gray-500 text-lg dark:text-gray-400">
                  Clear, jargon-free technical writing and research reports.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-white dark:bg-black">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
              className="w-full transition-opacity duration-300 hover:opacity-70"
              src="./assets/images/data.png"
              alt="dashboard image"
            />
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Ready to Strengthen Your Security Posture?
              </h2>
              <p className="mb-6 font-light text-gray-500 text-xl lg:text-2xl dark:text-gray-400">
              Let's connect and talk about strengthening your organization's security posture before an incident happens.
              </p>
              <p className="mb-6 font-light text-gray-500 text-xl lg:text-2xl dark:text-gray-400">From SOC services and source code review to technical writing and security training, I'll find the vulnerabilities attackers would exploit and give you clear, expert guidance, without the jargon.
              </p>

              {/* #### SOCIAL LINKS #### */}
              <div className="mt-8">
                <p className="mb-4 text-sm font-medium tracking-wide uppercase text-gray-500 dark:text-gray-400">
                  Or connect with me
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/ahmadfayaz/"
                    aria-label="LinkedIn"
                    className="flex items-center justify-center w-11 h-11 border-4 border-green-300 text-gray-800 transition-all duration-300 hover:bg-green-100 hover:scale-110 hover:text-green-700 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:hover:text-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
  href="https://scholar.google.com/citations?user=T9dXE5EAAAAJ&hl=en"
  aria-label="Google Scholar"
  className="flex items-center justify-center w-11 h-11 border-4 border-green-300 text-gray-800 transition-all duration-300 hover:bg-green-100 hover:scale-110 hover:text-green-700 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:hover:text-white"
>
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.8 3.84V19.5h2.4v-4.26l4.8 3.84 4.8-3.84v4.26h2.4v-6.16l4.8-3.84L12 0z" />
  </svg>
</a>
                  <a
                    href="https://x.com/MrAhmadFayyaz"
                    aria-label="X"
                    className="flex items-center justify-center w-11 h-11 border-4 border-green-300 text-gray-800 transition-all duration-300 hover:bg-green-100 hover:scale-110 hover:text-green-700 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:hover:text-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/mrahmedfayyaz"
                    aria-label="Instagram"
                    className="flex items-center justify-center w-11 h-11 border-4 border-green-300 text-gray-800 transition-all duration-300 hover:bg-green-100 hover:scale-110 hover:text-green-700 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:hover:text-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex items-center justify-center w-11 h-11 border-4 border-green-300 text-gray-800 transition-all duration-300 hover:bg-green-100 hover:scale-110 hover:text-green-700 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:hover:text-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Snapchat"
                    className="flex items-center justify-center w-11 h-11 border-4 border-green-300 text-gray-800 transition-all duration-300 hover:bg-green-100 hover:scale-110 hover:text-green-700 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:hover:text-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.017 2c2.936 0 4.06 1.87 4.157 3.85l.007.27-.018.53c-.02.44-.05.9-.05 1.03 0 .12.05.19.17.19.24 0 .81-.27 1.23-.53a.62.62 0 0 1 .33-.1c.14 0 .27.05.38.14.24.19.34.44.34.64 0 .38-.34.68-.93.95-.32.15-.75.29-1.11.4l-.09.03c-.14.28-.06.83.28 1.53.75 1.58 2.05 2.35 3.63 2.66.28.06.48.28.48.55 0 .07-.01.14-.03.2-.16.5-1.23.9-2.51 1.06-.06.16-.13.42-.17.59-.08.32-.29.44-.62.44h-.05c-.35 0-.74-.06-1.24-.06-.77 0-1.31.16-2.13.71-.85.57-1.69 1.07-3.05 1.07s-2.2-.5-3.05-1.07c-.82-.55-1.36-.71-2.13-.71-.53 0-.94.07-1.29.07-.29 0-.5-.11-.58-.42-.05-.18-.11-.45-.17-.61-1.28-.16-2.35-.56-2.51-1.06a.66.66 0 0 1-.03-.2c0-.27.2-.49.48-.55 1.58-.31 2.88-1.08 3.63-2.66.34-.7.42-1.25.28-1.53l-.09-.03c-.36-.11-.79-.25-1.11-.4-.79-.37-.93-.68-.93-.98 0-.35.28-.71.71-.71.09 0 .19.02.27.05.44.26 1 .53 1.24.53.11 0 .17-.05.18-.15v-.04c0-.13-.03-.6-.05-1.04l-.02-.53.01-.27C7.96 3.87 9.08 2 12.02 2z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="GitHub"
                    className="flex items-center justify-center w-11 h-11 border-4 border-green-300 text-gray-800 transition-all duration-300 hover:bg-green-100 hover:scale-110 hover:text-green-700 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:hover:text-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.469-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.479 5.92.43.372.814 1.103.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* #### CONTACT SECTION #### */}
        <section className="bg-white dark:bg-black transition-all duration-300 hover:scale-105">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Book a consultation today – your security is my priority
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 text-xl lg:text-2xl">
            Protect your digital assets and maintain customer trust with proactive security testing.
            </p>
            <form onSubmit={handleContactSubmit} className="space-y-8">
            <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  className="shadow-sm bg-gray-50 border-4 border-green-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  className="shadow-sm bg-gray-50 border-4 border-green-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50  border-4 border-green-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={contactForm.message}
                  onChange={handleContactChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  shadow-sm border-4 border-green-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-lx font-medium text-center text-white bg-green-600 hover:bg-green-700 border-2 border-green-600 rounded-none sm:w-fit focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:border-green-600 dark:focus:ring-green-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
