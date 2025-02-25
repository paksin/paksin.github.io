import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import profilepic from "../../assets/profile.png";
import resume from "../../assets/resume.pdf";

export default function Blog() {
  return (
    <div className="container">
      <div className="row">
        <div className="">
          <h3>Resumé</h3>
          <div className="resume-div">
            <div className="resume-download-div d-flex">
              <p>Download Here</p>
              <a href={resume} download>
                <FontAwesomeIcon icon={solid("download")} />
              </a>
            </div>
            <div className="row big-resume-div">
              <div className="about-div col-lg-3">
                <div className="resume-name">
                  <div className="propic-div">
                    <img src={profilepic} alt="profile" width="100%" />
                  </div>
                  <div className="d-flex">
                    <h4>PAK SIN</h4>
                    <p>(he/him)</p>
                  </div>
                  <h6>Client Relations Manager</h6>
                </div>
                <div className="contact-div">
                  <div className="contact-info d-flex align-items-center">
                    <FontAwesomeIcon icon={solid("phone")} />
                    <a href="tel:+14165189511">(416) 518-9511</a>
                  </div>
                  <div className="contact-info d-flex align-items-center">
                    <FontAwesomeIcon icon={solid("envelope")} />
                    <a href="mailto:sinpakyin@gmail.com">sinpakyin@gmail.com</a>
                  </div>
                  <div className="contact-info d-flex align-items-center">
                    <FontAwesomeIcon icon={brands("github")} />
                    <a href="https://github.com/paksin">paksin</a>
                  </div>
                  <div className="contact-info d-flex align-items-center">
                    <FontAwesomeIcon
                      className="li-icon"
                      icon={brands("linkedin")}
                    />
                    <a href="https://www.linkedin.com/in/pak-sin/">pak-sin</a>
                  </div>
                </div>
              </div>
              <div className="resume-details-div col-lg-9">
                <div className="skill-div">
                  <h4>Skills</h4>
                  <p>
                    Attention to Detail, Problem Solving, Time Management,
                    Communication, Multi-Tasking, Team Player, Trilingual,
                    Microsoft Suite, Python, SQL, GraphQL, React.JS
                  </p>
                  <p className="last-p">
                    {/* MongoDB, Mongoose, Express, Node, GraphQL, REST API, MySQL,
                    Sequelize, Passport, Cloudinary */}
                  </p>
                </div>
                <hr></hr>
                <div className="cert-div">
                  <h4>Certifications</h4>
                  <h6>University of Toronto Web Development Program</h6>
                  <p className="duration-p">Sep - Nov 2022</p>
                  <h6>CFA Level 1</h6>
                  <p className="duration-p">Jul 2021</p>
                  <h6>Conduct and Practices Handbook Course</h6>
                  <p className="duration-p">Dec 2021</p>
                  <h6>Canadian Securities Course</h6>
                  <p className="duration-p last-p">Sep 2020</p>
                </div>
                <hr></hr>
                <div className="edu-div">
                  <h4>Education</h4>
                  <h6>University of Waterloo</h6>
                  <p className="duration-p">2015-2019</p>
                  <div className="degree-name">
                    <p>Bachelor of Mathematics,</p>
                    <p className="last-p">
                      Mathematics and Business Administration, Honours
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div className="exp-div">
                  <h4>Experience</h4>
                  <div className="job-info">
                    <h6>Client Relations Manager, PBD Wealth Management</h6>
                    <p className="duration-p">Aug 2023 - Present</p>
                    <ul>
                      <li>
                        Assisted advisors in the development and implementation
                        of comprehensive financial plans for clients, including
                        retirement projections and insurance analysis
                      </li>
                      <li>
                        Coordinated implementation and testing for new digital
                        solutions for investment clients and business solutions
                        from vendors
                      </li>
                      <li>
                        Provided support and innovative solutions to help
                        partners to adapt to new industry tools
                      </li>
                    </ul>
                  </div>
                  <div className="job-info">
                    <h6>Freelance Frontend Developer, Jasmine AI</h6>
                    <p className="duration-p">Apr 2023 - Feb 2024</p>
                    <ul>
                      <li>
                        Developed modular and maintainable code using modern web
                        development frameworks such as Tailwind CSS and React
                      </li>
                      <li>
                        Collaborated with product designers and stakeholders to
                        implement responsive and visually appealing user
                        interfaces
                      </li>
                      <li>
                        Worked closely with back-end developers to integrate
                        user-facing elements with server-side logic
                      </li>
                    </ul>
                  </div>
                  <div className="job-info">
                    <h6>Direct Investing Representative, TD Wealth</h6>
                    <p className="duration-p">Oct 2021 - Aug 2022</p>
                    <ul>
                      <li>
                        Perform client instructions in accordance with industry
                        and TD Direct Investing trading policy
                      </li>
                      <li>
                        Deliver accurate, timely information on market activity
                        and developments, company products and services and
                        customer account information
                      </li>
                      <li>
                        Proactively identify and adapt to the needs of the
                        customer and offer creative solutions by learning about
                        TD Direct Investing products and services and their
                        applicability to customer/market situations
                      </li>
                    </ul>
                  </div>
                  <div className="job-info">
                    <h6>
                      Team Leader for Business Improvements, TD Canada Trust
                    </h6>
                    <p className="duration-p">Jun 2020 - Oct 2021</p>
                    <ul>
                      <li>
                        Collaborated with stakeholders to identify areas for
                        business improvement, including Business Processes and
                        Client Experience
                      </li>
                      <li>
                        Developed custom solutions based on user stories and
                        feedbacks from Clients and Colleagues
                      </li>
                      <li>
                        Report findings to different business pillars for
                        implementation and testing
                      </li>
                    </ul>
                  </div>
                  <div className="job-info">
                    <h6>Trilingual EasyLine Specialist, TD Canada Trust</h6>
                    <p className="duration-p">Mar 2020 - Oct 2021</p>
                    <ul>
                      <li>
                        Advised and addressed customers’ day-to-day banking
                        needs in English, Cantonese, and Mandarin
                      </li>
                      <li>
                        Responsible for providing exceptional customer
                        experience and resolving customer concerns
                      </li>
                      <li>
                        Provided technical support for Online Banking and the TD
                        App
                      </li>
                    </ul>
                  </div>
                  <div className="job-info">
                    <h6>
                      Research Assistant Intern, Centre for Addiction and Mental
                      Health
                    </h6>
                    <p className="duration-p">Jan 2017 – Aug 2017</p>
                    <ul>
                      <li>
                        Duties include database maintenance, organizing and
                        analyzing research data
                      </li>
                      <li>
                        Responsible for assisting Dr. Anne Bassett and other
                        researchers in clinical genetic research studies
                      </li>
                      <li>
                        Conducted behavioral and functional testing of patients
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
