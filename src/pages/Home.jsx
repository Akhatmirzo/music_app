import React from "react";
import image from "../assets/image";
import HomeNav from "../components/Navbar/HomeNav";

export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <div className="container">
        <div className="w-full h-screen relative">
    
          <img src={image.back_ball_image} alt="" className="w-full h-full z-[2] absolute top-0 left-0" />

          <img src={image.back_image2} alt="" className="w-[1000px] h-[892px] absolute z-[3] bottom-0 left-0 lg:hidden" />

          <img src={image.music_disk_group} alt="" className="absolute top-32 z-[1] opacity-50 lg:hidden" />

          <img src={image.quloqchin} alt="" className="w-[640px] h-[440px] z-[4] absolute top-0 left-[48%] -translate-x-1/2 opacity-35 lg:hidden" />

          <div className="w-[58%] h-3/4 z-20 absolute top-20 right-0 2xl:w-2/3 2xl:h-2/3 xl:w-3/4 lg:w-full">
            <img src={image.back_image3} alt="" className="w-full h-full z-[2] lg:hidden" />
            <img src={image.image45} alt="" className="z-[1] absolute top-24 xl:top-16 right-0 opacity-65 bg-blend-multiply lg:hidden" />
            <img src={image.note_simbol_group} alt="" className="absolute top-1/4 xl:top-32 right-40 z-[3] 2xl:top-32 lg:top-0 lg:right-0 md:hidden" />
            <img src={image.face_image} alt="" className="absolute top-1/3 right-8 z-[3] 2xl:top-60 lg:top-20 lg:right-0 md:hidden" />
          </div>

          <div className="w-full h-full absolute bottom-0 right-0 lg:hidden">
            <img src={image.music_disk1} alt="" className="w-[357px] z-[2] absolute bottom-0 right-10 contrast-50 mix-blend-overlay" />
            <img src={image.music_disk2} alt="" className="absolute z-[1] right-0 bottom-5 contrast-50 mix-blend-overlay" />
            <img src={image.music_disk3} alt="" className="absolute z-[1] right-[290px] contrast-50 bottom-0 mix-blend-overlay" />
            <img src={image.top5_jazz_music} alt="" className="absolute bottom-0 right-0 z-[5] opacity-85 contrast-50"/>
          </div>

          <img src={image.note_group} alt="" className="absolute top-0 right-0 opacity-40 md:h-screen" />

          <img src={image.note} alt="" className="absolute top-[268px] left-[342px] z-[6] lg:hidden" />


          <HomeNav />

        </div>
      </div>
    </div>
  );
}
