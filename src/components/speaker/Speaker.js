import { FaLinkedin } from "react-icons/fa";

import rahul from "../../assets/rahul1.png";
import harshit from "../../assets/harshit.png";
import aditya from "../../assets/aditya.png";
import adhok from "../../assets/adhok.png";
import vishal from "../../assets/vishal.png";
import jaswinder from "../../assets/jaswinder.png";
import prasenjit from "../../assets/prasenjit.png";
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
          Guest Speakers
        </div>
        <div className="w-[95vw] md:w-[90vw] rounded-xl   flex flex-row flex-wrap gap-2 md:gap-4 justify-center items-center ">
          {/* <Speakercompod
            name="Rahul Kolle"
            company="Technical Project Manager at Cisco"
            bio="Rahul Kolle is a Technical Project Manager at Cisco where he manages
          multi-million dollar projects for Cisco customers in Europe and the
          UK."
            linkedin="https://www.linkedin.com/in/rahulkolle/"
            photo={rahul}
          /> */}
          {/* <Speakercompod
            name="Vishnu Dutt"
            company="Seasoned Solutions Architect at Cisco"
            bio="Vishnu Dutt is a seasoned Solutions Architect with over 15 years
            of expertise in Network Consulting.He holds a prestigious CCIE
            Routing and Switching certification, showcasing his profound
            knowledge in Switching, Routing, and Network Security domains."
            linkedin="https://www.linkedin.com/in/vishnu-dutt-586a9813/"
            photo={vishnu}
          /> */}
          {/* vishal kumar */}
          <Speakercompod
            name="Vishal Kumar"
            company="Cyber law and security expert, at Quick Heal"
            bio="Vishnu Dutt is a seasoned Solutions Architect with over 15 years
            of expertise in Network Consulting.He holds a prestigious CCIE
            Routing and Switching certification, showcasing his profound
            knowledge in Switching, Routing, and Network Security domains."
            linkedin=" https://www.linkedin.com/in/vishalpune2/"
            photo={vishal}
          />
          <Speakercompod
            name=" Adhokshaj Mishra"
            company=" Security Research Lead at Quick Heal"
            bio="Shashank Dubey, a Cloud Security Engineer at Payatu, specializes
            in AWS and Kubernetes security. With over 3 years of industry
            experience, he's adept at threat modeling, compliance
            frameworks, and cloud-native security."
            linkedin="https://www.linkedin.com/in/adhokshajmishra/"
            photo={adhok}
          />
          {/* jaswinder sign */}
          {/* <Speakercompod
            name="Jaswinder Singh"
            company="Director of Engineering at SEQRITE Labs, Quick Heal"
            bio="Vishnu Dutt is a seasoned Solutions Architect with over 15 years
            of expertise in Network Consulting.He holds a prestigious CCIE
            Routing and Switching certification, showcasing his profound
            knowledge in Switching, Routing, and Network Security domains."
            linkedin=" https://www.linkedin.com/in/jaswinder-singh-b134315/ "
            photo={jaswinder}
          /> */}
          <Speakercompod
            name="Awadhesh Shukla"
            company="Principal Security Consultant at Quick Heal"
            bio="Awadhesh Shukla, an esteemed alumnus of LPU, is a distinguished
            cybersecurity professional serving as a Principal Security
            Consultant at Quick Heal. Armed with a plethora of CompTIA
            certifications and renowned as a Certified EC-Council Instructor
            (CEI) and Certified Ethical Hacker (CEH)."
            linkedin="https://www.linkedin.com/in/awadhesh/"
            photo={avdesh}
          />
          {/* <Speakercompod
            name="Rajtilak Majumder"
            company="Director of Information Security at PwC India"
            bio="Rajtilak Majumder, CISSP, is the Director of Information
            Security at PwC India, bringing over a decade of experience in
            cybersecurity leadership roles across diverse sectors."
            linkedin="https://www.linkedin.com/in/rajtilak-majumder-cissp-82b83412/"
            photo={raj}
          /> */}
          {/* <Speakercompod
            name="Abhishek Sen"
            company="Seasoned Enterprise Security Architect & Associate Director at PwC"
            bio="Abhishek Sen, an Associate Director at PwC, is a seasoned
            Enterprise Security Architect spanning 17 years in Information
            and Cyber Security. Holding certifications like AZ-500, and
            CDPSE, he excels in Security Solution Design and compliance
            frameworks like PCI DSS and ISO 27001."
            linkedin="https://www.linkedin.com/in/abhishek-sen-56b29416/"
            photo={abhisek}
          /> */}
          {/* <Speakercompod
            name="Gobinda Karmakar"
            company="Application Security Architect at PwC India"
            bio="Gobinda Karmakar, an Application Security Architect at PwC India
            and an alumnus of LPU, boasts extensive experience in
            Information Security and Cybersecurity."
            linkedin="https://www.linkedin.com/in/gobinda-karmakar-he-him-his-99584879/"
            photo={govindo}
          /> */}
          <Speakercompod
            name="Shashank Dubey"
            company="Cloud Security Engineer at Payatu"
            bio="Shashank Dubey, a Cloud Security Engineer at Payatu, specializes
            in AWS and Kubernetes security. With over 3 years of industry
            experience, he's adept at threat modeling, compliance
            frameworks, and cloud-native security."
            linkedin="https://www.linkedin.com/in/shashankssm/"
            photo={shashank}
          />

          {/* prasenjit gautam */}
          {/* <Speakercompod
            name="Prasenjit Gautam"
            company="Co-Founder of DEF CON Delhi and Founding Member at Xainik"
            bio="Shashank Dubey, a Cloud Security Engineer at Payatu, specializes
            in AWS and Kubernetes security. With over 3 years of industry
            experience, he's adept at threat modeling, compliance
            frameworks, and cloud-native security."
            linkedin=" https://www.linkedin.com/in/dotslashtx/"
            photo={prasenjit}
          /> */}

          <Speakercompod
            name="Sourabh Bhandari"
            company="Engineer at Palo Alto Networks"
            bio=" Sourabh Bhandari, an alumnus of LPU, currently serves as a Staff
            Engineer at Palo Alto Networks. With a background spanning roles
            at HaloDoc and HackerEarth, Sourabh excels in platform
            engineering."
            linkedin="https://www.linkedin.com/in/sb5/"
            photo={saurav}
          />

          {/* harshit */}
          {/* <Speakercompod
            name="Harshit Arora"
            company="Compliance and Data Protection Associate at Evalueserve"
            bio="  Sourabh Bhandari, an alumnus of LPU, currently serves as a Staff
           Engineer at Palo Alto Networks."
            linkedin="https://www.linkedin.com/in/harshitarora00/"
            photo={harshit}
          /> */}
          <Speakercompod
            name=" Prabhsimran Singh "
            company="Senior Security Engineer at Finelabs"
            bio="  Sourabh Bhandari, an alumnus of LPU, currently serves as a Staff
            Engineer at Palo Alto Networks."
            linkedin=" https://www.linkedin.com/in/pswalia2u/ "
            photo={simran}
          />
          {/* aditya */}
          <Speakercompod
            name=" Aditya Rai "
            company="Cyber Security Engineer at TCS"
            bio="  Sourabh Bhandari, an alumnus of LPU, currently serves as a Staff
            Engineer at Palo Alto Networks."
            linkedin=" https://www.linkedin.com/in/aditya-rai-infosec/ "
            photo={aditya}
          />

          {/* mobile screen */}
          {/* <Speakercompom
            name="Rahul Kolle"
            company="Technical Project Manager at Cisco"
            bio="Rahul Kolle is a Technical Project Manager at Cisco where he manages
          multi-million dollar projects for Cisco customers in Europe and the
          UK."
            linkedin="https://www.linkedin.com/in/rahulkolle/"
            photo={rahul}
          /> */}
          {/* <Speakercompom
            name="Vishnu Dutt"
            company="Seasoned Solutions Architect at Cisco"
            bio="Vishnu Dutt is a seasoned Solutions Architect with over 15 years
            of expertise in Network Consulting.He holds a prestigious CCIE
            Routing and Switching certification."
            linkedin="https://www.linkedin.com/in/vishnu-dutt-586a9813/"
            photo={vishnu}
          /> */}
          {/* vishal */}
          <Speakercompom
            name="Vishal Kumar"
            company="Cyber law and security expert, at Quick Heal"
            bio="Vishnu Dutt is a seasoned Solutions Architect with over 15 years
        of expertise in Network Consulting.He holds a prestigious CCIE
        Routing and Switching certification, showcasing his profound
        knowledge in Switching, Routing, and Network Security domains."
            linkedin=" https://www.linkedin.com/in/vishalpune2/"
            photo={vishal}
          />
          <Speakercompom
            name=" Adhokshaj Mishra"
            company=" Security Research Lead at Quick Heal"
            bio="Shashank Dubey, a Cloud Security Engineer at Payatu, specializes
           in AWS and Kubernetes security. With over 3 years of industry
           experience, he's adept at threat modeling, compliance
           frameworks, and cloud-native security."
            linkedin="https://www.linkedin.com/in/adhokshajmishra/"
            photo={adhok}
          />
          {/* jaswinder singh */}
          {/* <Speakercompom
            name="Jaswinder Singh"
            company="Director of Engineering at SEQRITE Labs, Quick Heal"
            bio="Vishnu Dutt is a seasoned Solutions Architect with over 15 years
           of expertise in Network Consulting.He holds a prestigious CCIE
           Routing and Switching certification, showcasing his profound
           knowledge in Switching, Routing, and Network Security domains."
            linkedin=" https://www.linkedin.com/in/jaswinder-singh-b134315/ "
            photo={jaswinder}
          /> */}
          <Speakercompom
            name="Awadhesh Shukla"
            company="Principal Security Consultant at Quick Heal"
            bio="Awadhesh Shukla, an esteemed alumnus of LPU, is a distinguished
            cybersecurity professional serving as a Principal Security
            Consultant at Quick Heal."
            linkedin="https://www.linkedin.com/in/awadhesh/"
            photo={avdesh}
          />
          {/* <Speakercompom
            name="Rajtilak Majumder"
            company="Director of Information Security at PwC India"
            bio="Rajtilak Majumder, CISSP, is the Director of Information Security
             at PwC India, bringing over a decade of experience in
             cybersecurity leadership roles across diverse sectors."
            linkedin="https://www.linkedin.com/in/rajtilak-majumder-cissp-82b83412/"
            photo={raj}
          /> */}
          {/* 
          <Speakercompom
            name="Abhishek Sen"
            company="Seasoned Enterprise Security Architect & Associate Director at PwC"
            bio="Abhishek Sen, an Associate Director at PwC, is a seasoned
                Enterprise Security Architect. Holding certifications like CISSP,
                AZ-500, and CDPSE."
            linkedin="https://www.linkedin.com/in/abhishek-sen-56b29416/"
            photo={abhisek}
          /> */}

          {/* <Speakercompom
            name="Gobinda Karmakar"
            company="Application Security Architect at PwC India"
            bio=" Gobinda Karmakar, an Application Security Architect at PwC India
            and an alumnus of LPU, boasts extensive experience in Information
            Security and Cybersecurity."
            linkedin="https://www.linkedin.com/in/gobinda-karmakar-he-him-his-99584879/"
            photo={govindo}
          /> */}

          <Speakercompom
            name="Shashank Dubey"
            company="Cloud Security Engineer at Payatu"
            bio="  Shashank Dubey, a Cloud Security Engineer at Payatu, specializes
            in AWS and Kubernetes security."
            linkedin="https://www.linkedin.com/in/shashankssm/"
            photo={shashank}
          />
          {/* <Speakercompom
            name="Prasenjit Gautam"
            company="Co-Founder of DEF CON Delhi and Founding Member at Xainik"
            bio="Shashank Dubey, a Cloud Security Engineer at Payatu, specializes
           in AWS and Kubernetes security. With over 3 years of industry
           experience, he's adept at threat modeling, compliance
           frameworks, and cloud-native security."
            linkedin=" https://www.linkedin.com/in/dotslashtx/"
            photo={prasenjit}
          /> */}

          <Speakercompom
            name="Sourabh Bhandari"
            company="Engineer at Palo Alto Networks"
            bio="  Sourabh Bhandari, an alumnus of LPU, currently serves as a Staff
           Engineer at Palo Alto Networks."
            linkedin="https://www.linkedin.com/in/sb5/"
            photo={saurav}
          />

          {/* <Speakercompom
            name="Harshit Arora"
            company="Compliance and Data Protection Associate at Evalueserve"
            bio="  Sourabh Bhandari, an alumnus of LPU, currently serves as a Staff
           Engineer at Palo Alto Networks."
            linkedin="https://www.linkedin.com/in/harshitarora00/"
            photo={harshit}
          /> */}

          <Speakercompom
            name=" Prabhsimran Singh "
            company="Senior Security Engineer at Finelabs"
            bio="  Sourabh Bhandari, an alumnus of LPU, currently serves as a Staff
           Engineer at Palo Alto Networks."
            linkedin=" https://www.linkedin.com/in/pswalia2u/ "
            photo={simran}
          />

          <Speakercompom
            name=" Aditya Rai "
            company="Cyber Security Engineer at TCS"
            bio="  Sourabh Bhandari, an alumnus of LPU, currently serves as a Staff
           Engineer at Palo Alto Networks."
            linkedin=" https://www.linkedin.com/in/aditya-rai-infosec/ "
            photo={aditya}
          />
        </div>
      </div>
    </>
  );
};

export default Speaker;
