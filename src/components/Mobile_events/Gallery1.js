import Image from "next/image";
import photo1 from "../../assets/ctf1.JPG";
import photo2 from "../../assets/ctf2.JPG";
import photo3 from "../../assets/ctf3.JPG";
import photo4 from "../../assets/ctf4.JPG";
import photo5 from "../../assets/ctf5.JPG";
import photo6 from "../../assets/ctf6.JPG";

const Gallery1 = () => {
  return (
    <div className="w-[100vw] h-[150vh] bg-[#121E2C] flex flex-col items-center justify-start ">
      <div className="w-[100%] h-[65%] bg-[#121E2C] p-3 rounded-xl mt-2 grid grid-cols-6 grid-rows-7 grid-flow-col gap-2">
        <div className=" row-span-3 col-span-3 rounded-2xl overflow-hidden">
          <Image
            src={photo1}
            alt="photo1"
            className="w-full h-full object-center object-cover"
          />
        </div>
        {/* <div className="bg-yellow-500">2</div>
        <div className="bg-yellow-500">3</div> */}
        <div className=" row-span-2 col-span-3 rounded-2xl overflow-hidden">
          <Image
            src={photo2}
            alt="photo1"
            className="w-full h-full object-center object-cover"
          />
        </div>
        {/* <div className="bg-yellow-500">5</div> */}
        <div className=" row-span-2 col-span-3 rounded-2xl overflow-hidden">
          <Image
            src={photo3}
            alt="photo1"
            className="w-full h-full object-center object-cover"
          />
        </div>
        {/* <div className="bg-yellow-500">7</div> */}
        {/* <div className="bg-yellow-500">8</div>
        <div className="bg-yellow-500">9</div>
        <div className="bg-yellow-500">10</div> */}
        {/* <div className="bg-yellow-500">11</div> */}
        {/* <div className="bg-yellow-500">12</div> */}
        {/* <div className="bg-yellow-500">13</div> */}
        {/* <div className="bg-yellow-500">14</div> */}
        {/* <div className="bg-yellow-500">15</div>
        <div className="bg-yellow-500">16</div>
        <div className="bg-yellow-500">17</div> */}
        {/* <div className="bg-yellow-500">18</div> */}
        {/* <div className="bg-yellow-500">19</div> */}
        {/* <div className="bg-yellow-500">20</div> */}
        {/* <div className="bg-yellow-500">21</div> */}
        <div className=" row-span-2 col-span-3 rounded-2xl overflow-hidden">
          <Image
            src={photo4}
            alt="photo1"
            className="w-full h-full object-center object-cover"
          />
        </div>
        {/* <div className="bg-yellow-500">23</div> */}
        <div className=" row-span-3 col-span-3 rounded-2xl overflow-hidden">
          <Image
            src={photo5}
            alt="photo1"
            className="w-full h-full object-center object-cover"
          />
        </div>
        {/* <div className="bg-yellow-500">25</div> */}
        {/* <div className="bg-yellow-500">26</div> */}
        <div className="row-span-2 col-span-3 rounded-2xl overflow-hidden">
          <Image
            src={photo6}
            alt="photo1"
            className="w-full h-full object-center object-cover"
          />
        </div>
        {/* <div className="bg-yellow-500">28</div> */}
        {/* <div className="bg-yellow-500">29</div> */}
        {/* <div className="bg-yellow-500">30</div> */}

        {/* <div className="bg-yellow-500">31</div> */}
        {/* <div className="bg-yellow-500">32</div> */}
        {/* <div className="bg-yellow-500">33</div> */}
        {/* <div className="bg-yellow-500">34</div> */}
        {/* <div className="bg-yellow-500">35</div> */}
        {/* <div className="bg-yellow-500">36</div> */}
        {/* <div className="bg-yellow-500">37</div> */}
        {/* <div className="bg-yellow-500">38</div> */}
        {/* <div className="bg-yellow-500">39</div> */}
        {/* <div className="bg-yellow-500">40</div> */}
        {/* <div className="bg-yellow-500">41</div> */}
        {/* <div className="bg-yellow-500">42</div> */}
      </div>
      <div className="w-[100%] h-[34%] bg-[#121E2C]  rounded-xl flex flex-col items-center justify-center ">
        <div className="w-full h-[20%]  rounded-xl text-center font-benderregular flex justify-center items-center font-bold text-[#13FBD3] text-3xl">
          Cisco ExpertSpeak Session
        </div>
        <div className="w-full h-[50%] p-3  rounded-xl  text-center font-benderregular flex justify-center items-center font-bold text-white text-xs tracking-tighter leading-tight">
          {" "}
          During the Cisco ExpertSpeak Session, participants had the exclusive
          opportunity to immerse themselves in industry insights. Led by Cisco
          oƯicials, this 6-hour session was a rich exploration of the
          ever-evolving tech landscape. Through direct interaction and practical
          examples, students gained invaluable perspectives, deepening their
          understanding of key industry trends and challenges.
        </div>
        <div className="w-full h-[30%] pl-3  rounded-xl text-center font-benderregular flex flex-col justify-center items-start font-bold text-white text-xs">
          <p className="text-left font-semibold text-white mt-1 flex items-center justify-center font-benderregular text-xs tracking-tighter leading-tight">
            Day 1:&nbsp;&nbsp;PraƯul Khandelwal | Senior Security Cloud
            Consulting Engineer at Cisco | LPU Alumnus
          </p>
          <p className="text-left font-semibold text-white mt-1 flex items-center justify-center font-benderregular text-xs tracking-tighter leading-tight">
            Day 2 :&nbsp;&nbsp; Rajesh Kumar | Senior Solutions Architect at
            Cisco Systems
          </p>
          <p className="text-left font-semibold text-white mt-1 flex items-center justify-center font-benderregular text-xs tracking-tighter leading-tight">
            Day 3 :&nbsp;&nbsp; Ashish Dagar, Security Consultant Engineer at
            Cisco Systems
          </p>
          <p className="text-left font-semibold text-white mt-1 flex items-center justify-center font-benderregular text-xs tracking-tighter leading-tight">
            Day 3:&nbsp;&nbsp; Vishnu Dutt, Network Architect at Cisco
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery1;
