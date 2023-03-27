import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#12141e] pt-12">
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Benimle İletişime Geçin
            </h2>
            <a href="#contact">
              <button
                className="bg-primaryColor text-white font-[500] flex items-center gap-2
                    hover:bg-smallTextColor ease-in-duration-300 py-2 px-4 rounded-[8px]"
              >
                <i class="ri-mail-line">İletişime geçin.</i>
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              vulputate libero a justo convallis pulvinar
            </p>
          </div>
        </div>
        <div className="menu">
          <ul className="flex items-center justify-center gap-10 mt-10">
            <li>
              <a className="text-gray-400 font-[600]" href="#about">
                Hakkımda
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#services">
                Servisler
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#portfolio">
                Portfolyo
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#contact">
                İletişim
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#1b1e29] py-3 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                  CG
                </span>
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">
                    Can Gündüz
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-[14px]">
                Tüm hakları saklıdır | {year} |{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
