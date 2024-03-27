import lovi from "../../assets/lovi.png";
import atul from "../../assets/atul.png";
import deepak from "../../assets/dipu.png";
import max from "../../assets/max.png";
import raj from "../../assets/sobtiii.png";
import Speakercompom from "./SpeakerCompod";
import Speakercompod from "./Speakercompom";

const Advisory = () => {
  return (
    <div className="w-[100vw]  bg-[#121E2C] gap-4  flex flex-col justify-start items-center">
      <div className="w-[90vw] rounded-xl h-[20vh]  text-center flex items-center justify-center text-3xl md:text-5xl font-benderregular font-bold text-[#12e2bf]">
        Advisory Committee
      </div>
      <div className="w-[95vw] md:w-[90vw] rounded-xl   flex flex-row flex-wrap gap-2 md:gap-4 justify-center items-center ">
        {/* desktop */}
        <Speakercompod
          name="Dr. Lovi Raj Gupta "
          company="Pro Vice Chancellor, Lovely Professional University"
          bio=" Dr. Lovi Raj Gupta, Pro Vice Chancellor at Lovely Professional University, is a distinguished figure in 
          technical and higher education. With a Ph.D. in Bioinformatics and extensive research contributions, he 
          spearheads innovative initiatives at the intersection of technology and education."
          linkedin=" https://www.linkedin.com/in/loviraj/"
          photo={lovi}
        />
        <Speakercompod
          name="Dr. Rajeev Sobti"
          company="Head of School, School of Computer Science & Engineering, Lovely Professional University"
          bio=" Dr. Rajeev Sobti, Head of School at Lovely Professional University's School of Computer Science & 
          Engineering, is a cornerstone of academic excellence. With extensive experience and mentorship, he shapes 
          our academic landscape, fostering a culture of innovation and learning."
          linkedin=""
          photo={raj}
        />
        <Speakercompod
          name="Dr. Deepak Prashar"
          company="Coordinator of School, School of Computer Science & Engineering, Lovely Professional 
          University"
          bio=" Dr. Deepak Prashar, a dedicated educator and cybersecurity expert, serves as Professor & Deputy Dean 
          at Lovely Professional University. With expertise in network security, he spearheads the Computer Science 
          Engineering department, contributing to the development of future cybersecurity professionals"
          linkedin="https://www.linkedin.com/in/dr-deepak-prashar-97196030/"
          photo={deepak}
        />
        <Speakercompod
          name="Dr. Max Bhatia"
          company=" Head of Department, Network & Security-II Domain, School of Computer Science & 
          Engineering, Lovely Professional University"
          bio=" Dr. Max Bhatia, an esteemed Assistant Professor and distinguished Head of Networking & Security at 
          Lovely Professional University, plays a pivotal role in navigating the academic and administrative realms of 
          Cyber Security"
          linkedin="https://www.linkedin.com/in/maxbhatia-007/"
          photo={max}
        />
        <Speakercompod
          name="Atul Malhotra "
          company="Program Coordinator, Network & Security-II Domain, School of Computer Science & 
          Engineering, Lovely Professional University"
          bio="Atul Malhotra is an Assistant Professor specializing in Cyber Security at Lovely Professional University. 
          With a decade of experience, he's dedicated to integrating industry-relevant technology into education. Mr. 
          Atul fosters innovation in curriculum development and pedagogy, aiming to empower students with cutting edge knowledge."
          linkedin="https://www.linkedin.com/in/atul-malhotra-6001281b/ "
          photo={atul}
        />

        {/* mobile */}
        <Speakercompom
          name="Dr. Lovi Raj Gupta "
          company="Pro Vice Chancellor, Lovely Professional University"
          bio=" Dr. Lovi Raj Gupta, Pro Vice Chancellor at Lovely Professional University, is a distinguished figure in 
          technical and higher education. He spearheads innovative initiatives at the intersection of technology and education."
          linkedin=" https://www.linkedin.com/in/loviraj/"
          photo={lovi}
        />
        <Speakercompom
          name="Dr. Rajeev Sobti"
          company="HOS, School of Computer Science & Engineering, Lovely Professional University"
          bio=" Dr. Rajeev Sobti, Head of School at Lovely Professional University's School of Computer Science & 
          Engineering, is a cornerstone of academic excellence, With extensive experience and mentorship."
          linkedin=""
          photo={raj}
        />
        <Speakercompom
          name="Dr. Deepak Prashar"
          company="COS, School of Computer Science & Engineering, Lovely Professional 
          University"
          bio=" Dr. Deepak Prashar, a dedicated educator and cybersecurity expert, serves as Professor & Deputy Dean 
         at Lovely Professional University. With expertise in network security."
          linkedin="https://www.linkedin.com/in/dr-deepak-prashar-97196030/"
          photo={deepak}
        />
        <Speakercompom
          name="Dr. Max Bhatia"
          company=" HOD, Network & Security-II Domain, School of Computer Science & 
          Engineering, Lovely Professional University"
          bio=" Dr. Max Bhatia, an esteemed Assistant Professor  at Lovely Professional University, plays a pivotal role in navigating the academic and administrative realms of 
          Cyber Security"
          linkedin="https://www.linkedin.com/in/maxbhatia-007/"
          photo={max}
        />
        <Speakercompom
          name="Atul Malhotra "
          company="PC, Network & Security-II Domain, School of Computer Science & 
          Engineering, Lovely Professional University"
          bio="Atul Malhotra is an Assistant Professor specializing in Cyber Security at Lovely Professional University. 
          He's dedicated to integrating industry-relevant technology into education."
          linkedin="https://www.linkedin.com/in/atul-malhotra-6001281b/ "
          photo={atul}
        />
      </div>
    </div>
  );
};

export default Advisory;
