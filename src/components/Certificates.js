import React from "react";

const Certificates = () => {
  const certificates = [
    // {
    //   img: require("./images/cert1.jpg"),
    //   link: "https://www.udemy.com/certificate/UC-226b4f09-0e78-4810-b981-3fd73e1a0233/"
    // },
    // {
    //   img: require("./images/cert2.png"),
    //   link: "https://coursera.org/share/6c2847fe552ae471087d525d8412abb4"
    // },
    {
      img: require("./images/cert3.png"),
      link: "https://coursera.org/share/de7b3fe7b6861b1906f48907dfaa9854"
    },
    {
      img: require("./images/cert1.png"),
      link: "https://drive.google.com/file/d/1-DwnrU7Xxim2RfpS8UXMZ8I3afPs-VIn/view?usp=sharing"
    },
    {
      img: require("./images/cert2.jpg"),
      link: "https://drive.google.com/file/d/13zVbAX2OW-DBfvSWVZ806bC6pbM5Uh0i/view?usp=sharing"
    },
    // {
    //   img: require("./images/cert4.png"),
    //   link: "https://coursera.org/share/f506749e073ab366c31e035254e4d15c"
    // },
    // {
    //   img: require("./images/cert5.png"),
    //   link: "https://drive.google.com/file/d/1hEG2Yb-z0rdXmD3Skmsz27wpHAir-zUc/view?usp=drive_link"
    // },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32 rounded-2xl" id="certificates">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between rounded-3xl">
        <div className="about-info mb-5 rounded-3xl col-span-2 text-center">
        <h2 style={{fontFamily: "Tahoma"}} className="text-4xl font-bold mb-5 border-b-[5px] w-[210px] border-indigo-600 pb-2 text-center align-center container px-25 mx-auto">
            Certificates
          </h2>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-1 gap-8 max-w-[600px]">
        {certificates.map((item) => {
          return (
            <a 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-sm"
            >
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-[300px] object-cover" 
              />
            </a>
          );
        })}
      </div>
      
      {/* <div className="text-center mt-10">
        <a
          href="#certificates"
          className="btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent rounded-full"
        >
          See all certificates
        </a>
      </div> */}
    </section>
  );
};

export default Certificates;