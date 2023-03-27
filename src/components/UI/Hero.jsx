import React from "react";
import heroImg from "../../assets/images/react.jpg";
//import CountUp from "react-countup/build/CountUp";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px] "
            >
              {" "}
              Hoşgeldiniz.
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[1.8rem] sm:text-[40px] leading-[35px]
              sm:leading-[46px] mt-5"
            >
              {" "}
              Ben bir yazılım mühendisliği öğrencisiyim.
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2
                    hover:bg-smallTextColor ease-in-duration-300 py-2 px-4 rounded-[8px]"
                >
                  <i class="ri-mail-line">İletişime geçin.</i>
                </button>
              </a>
              <a
                href="portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                Portfolyoyu gör
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              React.js ve React Native alanlarında ilerleyip bir yandan da yapay
              zeka ile ilgileniyorum. Günümüz koşullarında yapay zekayı es
              geçmemek olmazdı. Yakın gelecekte ülkemiz için önemli olan/olacak
              yapay zekayı destekleyen şirketlerde çalışmak ve daha sonra kendi
              ofisimi açmayı hedefliyorum.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Beni takip edin:
              </span>
              <span>
                <a
                  href="#github"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#linkedin"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-linkedin-fill"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="basis-1/3 mt-10 sm:mt-0 ">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
