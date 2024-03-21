import { FaLinkedin } from "react-icons/fa";

import rahul from "../../assets/rahul1.png";
import vishnu from "../../assets/vishnu1.png";
import raj from "../../assets/raj.png";
import abhisek from "../../assets/abhisek.png";
import govindo from "../../assets/govindo.png";
import shashank from "../../assets/shashank.png";
import avdesh from "../../assets/avdesh.png";
import simran from "../../assets/simran.png";
import saurav from "../../assets/saurav.png";
import Image from "next/image";
import Link from "next/link";
import Speakercompod from "./Speakercompom";
import Speakercompom from "./SpeakerCompod";

const Speaker = () => {
  return (
    <>
      <div className="w-[100vw]  bg-[#121E2C] gap-4  flex flex-col justify-start items-center">
        <div className="w-[90vw] rounded-xl h-[20vh]  text-center flex items-center justify-center text-3xl md:text-6xl font-benderregular font-bold text-[#12e2bf]">
          KEYNOTE SPEAKERS
        </div>
        <div className="w-[95vw] md:w-[90vw] rounded-xl   flex flex-row flex-wrap gap-2 md:gap-4 justify-center items-center ">
          <Speakercompod
            name="Rahul Kolle"
            company="Cisco"
            bio="Rahul Kolle is a Technical Project Manager at Cisco where he manages
          multi-million dollar projects for Cisco customers in Europe and the
          UK."
            linkedin="https://www.linkedin.com/in/rahulkolle/"
            photo={rahul}
          />
          <Speakercompod
            name="Vishnu Dutt"
            company="Cisco"
            bio="Vishnu Dutt is a seasoned Solutions Architect with over 15 years
            of expertise in Network Consulting.He holds a prestigious CCIE
            Routing and Switching certification, showcasing his profound
            knowledge in Switching, Routing, and Network Security domains."
            linkedin="https://www.linkedin.com/in/vishnu-dutt-586a9813/"
            photo={vishnu}
          />
          {/* vishal kumar */}
          {/* jaswinder sign */}
          <Speakercompod
            name="Awadhesh Shukla"
            company="Quick Heal"
            bio="Awadhesh Shukla, an esteemed alumnus of LPU, is a distinguished
            cybersecurity professional serving as a Principal Security
            Consultant at Quick Heal. Armed with a plethora of CompTIA
            certifications and renowned as a Certified EC-Council Instructor
            (CEI) and Certified Ethical Hacker (CEH)."
            linkedin="https://www.linkedin.com/in/awadhesh/"
            photo={avdesh}
          />
          <Speakercompod
            name="Rajtilak Majumder"
            company="PwC"
            bio="Rajtilak Majumder, CISSP, is the Director of Information
            Security at PwC India, bringing over a decade of experience in
            cybersecurity leadership roles across diverse sectors."
            linkedin="https://www.linkedin.com/in/rajtilak-majumder-cissp-82b83412/"
            photo={raj}
          />
          <Speakercompod
            name="Abhishek Sen"
            company="PwC"
            bio="Abhishek Sen, an Associate Director at PwC, is a seasoned
            Enterprise Security Architect spanning 17 years in Information
            and Cyber Security. Holding certifications like AZ-500, and
            CDPSE, he excels in Security Solution Design and compliance
            frameworks like PCI DSS and ISO 27001."
            linkedin="https://www.linkedin.com/in/abhishek-sen-56b29416/"
            photo={abhisek}
          />
          <Speakercompod
            name="Gobinda Karmakar"
            company="PwC"
            bio="Gobinda Karmakar, an Application Security Architect at PwC India
            and an alumnus of LPU, boasts extensive experience in
            Information Security and Cybersecurity."
            linkedin="https://www.linkedin.com/in/gobinda-karmakar-he-him-his-99584879/"
            photo={govindo}
          />
          <Speakercompod
            name="Shashank Dubey"
            company="Payatu"
            bio="Shashank Dubey, a Cloud Security Engineer at Payatu, specializes
            in AWS and Kubernetes security. With over 3 years of industry
            experience, he's adept at threat modeling, compliance
            frameworks, and cloud-native security."
            linkedin="https://www.linkedin.com/in/shashankssm/"
            photo={shashank}
          />

          <Speakercompod
            name="Sourabh Bhandari"
            company="Palo Alto"
            bio=" Sourabh Bhandari, an alumnus of LPU, currently serves as a Staff
            Engineer at Palo Alto Networks. With a background spanning roles
            at HaloDoc and HackerEarth, Sourabh excels in platform
            engineering."
            linkedin="https://www.linkedin.com/in/sb5/"
            photo={saurav}
          />

          {/* mobile screen */}
          <Speakercompom
            name="Rahul Kolle"
            company="Cisco"
            bio="Rahul Kolle is a Technical Project Manager at Cisco where he manages
          multi-million dollar projects for Cisco customers in Europe and the
          UK."
            linkedin="https://www.linkedin.com/in/rahulkolle/"
            photo={rahul}
          />
          <Speakercompom
            name="Vishnu Dutt"
            company="Cisco"
            bio="Vishnu Dutt is a seasoned Solutions Architect with over 15 years
            of expertise in Network Consulting.He holds a prestigious CCIE
            Routing and Switching certification."
            linkedin="https://www.linkedin.com/in/vishnu-dutt-586a9813/"
            photo={vishnu}
          />
          {/* vishal */}
          {/* jaswinder singh */}
          <Speakercompom
            name="Awadhesh Shukla"
            company="Quick Heal"
            bio="Awadhesh Shukla, an esteemed alumnus of LPU, is a distinguished
            cybersecurity professional serving as a Principal Security
            Consultant at Quick Heal."
            linkedin="https://www.linkedin.com/in/awadhesh/"
            photo={avdesh}
          />
          <Speakercompom
            name="Rajtilak Majumder"
            company="PwC"
            bio="Rajtilak Majumder, CISSP, is the Director of Information Security
             at PwC India, bringing over a decade of experience in
             cybersecurity leadership roles across diverse sectors."
            linkedin="https://www.linkedin.com/in/rajtilak-majumder-cissp-82b83412/"
            photo={raj}
          />

          <Speakercompom
            name="Abhishek Sen"
            company="PwC"
            bio="Abhishek Sen, an Associate Director at PwC, is a seasoned
                Enterprise Security Architect. Holding certifications like CISSP,
                AZ-500, and CDPSE."
            linkedin="https://www.linkedin.com/in/abhishek-sen-56b29416/"
            photo={abhisek}
          />

          <Speakercompom
            name="Gobinda Karmakar"
            company="PwC"
            bio=" Gobinda Karmakar, an Application Security Architect at PwC India
            and an alumnus of LPU, boasts extensive experience in Information
            Security and Cybersecurity."
            linkedin="https://www.linkedin.com/in/gobinda-karmakar-he-him-his-99584879/"
            photo={govindo}
          />

          <Speakercompom
            name="Shashank Dubey"
            company="Payatu"
            bio="  Shashank Dubey, a Cloud Security Engineer at Payatu, specializes
            in AWS and Kubernetes security."
            linkedin="https://www.linkedin.com/in/shashankssm/"
            photo={shashank}
          />

          <Speakercompom
            name="Sourabh Bhandari"
            company="Palo Alto"
            bio="  Sourabh Bhandari, an alumnus of LPU, currently serves as a Staff
           Engineer at Palo Alto Networks."
            linkedin="https://www.linkedin.com/in/sb5/"
            photo={saurav}
          />
        </div>
      </div>
    </>
  );
};

export default Speaker;
