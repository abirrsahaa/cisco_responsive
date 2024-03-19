import photo1 from "../../assets/netcad1.JPG";
import photo2 from "../../assets/netcad2.JPG";
import photo3 from "../../assets/netcad3.JPG";
import photo4 from "../../assets/netcad4.JPG";
import photo5 from "../../assets/netcad5.JPG";
import photo6 from "../../assets/netcad6.JPG";
import Image from "next/image";

const Gallery3 = () => {
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
      <div className="w-[100%]   h-[34%] bg-[#121E2C]   rounded-xl flex flex-col items-center justify-center ">
        <div className="w-full h-[20%]  rounded-xl text-center font-benderregular flex justify-center items-center font-bold text-[#13FBD3] text-3xl">
          Ethical Hacking Training
        </div>
        <div className="w-full h-[50%] p-3  rounded-xl  text-center font-benderregular flex justify-center items-center font-bold text-white text-xl tracking-tighter leading-tight">
          {" "}
          In our Ethical Hacking Training program, participants embarked on a
          comprehensive journey into cybersecurity. Over 20 intensive hours,
          students delved into the intricacies of ethical hacking, learning
          essential techniques to safeguard against cyber threats. Through
          practical exercises and real-world scenarios, participants honed their
          skills, emerging with a deeper understanding of cybersecurity
          principles and best practices.
        </div>
        <div className="w-full pl-3 h-[30%]  rounded-xl text-center font-benderregular flex flex-col justify-center items-start font-bold text-white text-xs">
          <p className="text-left font-semibold text-white mt-1 flex items-center justify-center font-benderregular text-sm tracking-tighter leading-tight">
            Speaker: Palvinder Singh | Founder & CEO - Secuneus Tech. | Cyber
            Security Trainer - Instructor
            [https://www.linkedin.com/in/palvinder91/]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery3;
