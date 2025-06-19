"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
JHU,LinkedinLearn,
  GreatLearn,
  Coursera
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            CERTIFICATES
          </h1>

          {/* <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          > */}
 <div
  className="EXPERIENCE mt-16 grid gap-14 max-sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
  data-aos="zoom-in-up"
>


            <Exp_prop
              img={LinkedinLearn}
              link="https://www.linkedin.com/learning/certificates/64ac79347ff532cf2ece42ade9f8372ad3ccc3082c45e3690e66a57fb9b79100"
              title="Learning Cloud Computing"
              subtitle="by Linkdin"
              date="Course completed on Feb 09, 2023"
              para="- Core Concepts of Cloud Computing and Introduction to AWS , Microsoft Azure and Google cloud platform"
            />
            <Exp_prop
              img={GreatLearn}
              link="https://www.mygreatlearning.com/certificate/WMTNWOYE"
              title="SQL for data Science"
              subtitle="by GreatLearning"
              date="Course Completed on Apr 23, 2023"
              para="- Mastered SQL operations for Data Science in this free, self-paced course with Python integration "
            />
            <Exp_prop
              img={JHU}
              link="https://www.coursera.org/account/accomplishments/verify/P245WVPNFTLV"
              title="HTML, CSS, and Javascript"
              subtitle="by Coursera"
              date="Course completed on May 14, 2024"
              para="- Frontend Development tools like Javascript and css by cousera in collaboration with John hopkins university "
              
            />

            <Exp_prop
              img={Coursera}
              title="Server side Js with Node.js"
              subtitle="by Coursera"
              date="Course completed on May 12, 2024"
              para="- Node.js environment , test and debug  programs. Node.js techniques like modules, files and asynchronous programming "
              link="https://www.coursera.org/account/accomplishments/verify/BWWS7STJYJMM"
            />

<Exp_prop
              img={Coursera}
              title="Generative Ai with ML and NLP"
              subtitle="by Coursera"
              date="Course completed on April 12, 2024"
              para="-Completed 11 courses of  Genrative AI, NLP and python programming with Data analysis, Data Model  and Web development with Chatgpt "
              link="https://github.com/Akash-1Sharma/Generative-Ai-certificates"
            />

<Exp_prop
              img={Coursera}
              title="Data Analysis and Algorithms"
              subtitle="by Coursera"
              date="Course completed on April 9, 2024"
              para="-Completed 3 courses of Advanced Data Analysis and Algorithm with Greedy algorithm, data structure and Design , Mathematical theory and Analysis"
              link="https://github.com/Akash-1Sharma/Data-Analysis-and-Algorithms-Certificates"
            />

          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
