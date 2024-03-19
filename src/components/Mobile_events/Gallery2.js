import photo1 from "../../assets/DSC_0137.JPG";
import photo2 from "../../assets/DSC_0139.JPG";
import photo3 from "../../assets/DSC_0472.JPG";
import photo4 from "../../assets/DSC_0492.JPG";
import photo5 from "../../assets/IMG_0369.JPG";
import photo6 from "../../assets/IMG_0354.JPG";
import Image from "next/image";

const Gallery2 = () => {
  return (
    <div className="w-[100vw] h-[150vh] bg-[#121E2C] flex flex-col items-center justify-start ">
      <div className="w-[100%] h-[65%] bg-[#121E2C]  p-3 rounded-xl mt-2 grid grid-cols-6 grid-rows-7 grid-flow-col gap-2">
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
        <div className=" row-span-2 col-span-3 rounded-2xl overflow-hidden">
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
      <div className="w-[100%]   h-[34%] bg-[#121E2C]  rounded-xl flex flex-col items-center justify-center ">
        <div className="w-full h-[20%]  rounded-xl text-center font-benderregular flex justify-center items-center font-bold text-[#13FBD3] text-3xl">
          Cisco NetAcad Workshop
        </div>
        <div className="w-full h-[50%] p-3  rounded-xl  text-center font-benderregular flex justify-center items-center font-bold text-white text-xs tracking-tighter leading-tight">
          {" "}
          The Cisco NetAcad Workshop was a gateway to expanding participants'
          networking skills. Over the course of 3 hours, attendees delved into
          Cisco Packet Tracer, a hands-on exploration that demystified
          networking principles. Guided by knowledgeable instructors,
          participants not only learned theory but also gained practical
          experience, equipping them with essential tools for success in the
          digital realm.
        </div>
        <div className="w-full pl-3 h-[30%]  rounded-xl text-center font-benderregular flex flex-col justify-center items-start font-bold text-white text-xs">
          <p className="text-left font-semibold text-white mt-1 flex items-center justify-center font-benderregular text-xs tracking-tighter leading-tight">
            Speaker: Dr. Gulshan Kumar | Professor, LPU | Cisco Devnet Associate
            [https://www.linkedin.com/in/dr-gulshan-kumar-14178838/]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery2;
