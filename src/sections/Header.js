import { useTranslation } from "react-i18next";
import './components/i18n';
import DarkModeToggle from "./components/DarkModeToggle";
import { useContext } from "react";
import { ThemeContext } from "../contexts/context";
import Typed from "react-typed"
import { toast } from 'react-toastify';
import {motion} from "framer-motion"
import "./Header.css"

const Header = () => {
  const { t, i18n } = useTranslation();
  const { lightMode } = useContext(ThemeContext)
 

  const handleChangeLang = async lang => {
   const id = toast.loading(t("translating"), {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: lightMode?"light":"dark",
      });
    setTimeout(async () => {
      try {
        await i18n.changeLanguage(lang)
      }
      finally {
        toast.update(id, { 
          render: t("translated"), 
          type: "success", 
          isLoading: false,
          autoClose: 500, 
        });
      }
    }, 1e3)



  }
  return (
    <header className={`${lightMode ? "lightHeader" : "darkHeader"} h-auto pb-10`} name="home">

      <div className="flex flex-row items-start">
        <div className="w-[70%] flex justify-end  p-5">
          <button onClick={() => handleChangeLang(i18n.language === "tr" ? "en" : "tr")}>
                  <span className="text-green dark:text-light-purple font-bold">{t("lang")}</span>
                  <span className="text-gray-light dark:text-gray-dark font-bold"> {i18n.language === "en" ? "'YE GEÇ" : ""}</span>
          </button>
        </div>
        <div className="w-[30%]  p-5">
          <DarkModeToggle className="" />
        </div>

      </div>
      <h4 className="text-4xl mx-auto font-bold text-green w-[70%]">
        Ahmet
      </h4>
      <motion.div 
       initial={{x: -300 }} 
       whileInView={{ x: 0 }} 
       viewport={{ once: false, amount: 0.1 }}
       transition={{ duration: 0.5, type:"spring", bounce:0.5, ease: [0.17, 0.67, 0.83, 0.67]}} 
      className="mx-auto  overflow-hidden md:w-[70%] w-[100%] lg:mt-6 flex justify-between">
        <div className="md:flex w-[73%] mx-auto md:mx-0 items-end">
          <div  >
        <div className="max-w-[70%] h-[12vh]">
           <h1 className="text-2xl lg:text-4xl font-bold text-green mt-5 lg:mb-10 ">{t("title").split("Frontend")[0]}
             <Typed
                strings={[`Frontend Developer ${i18n.language === "tr" ? "'ım" : ""}`, `Backend Developer ${i18n.language === "tr" ? "'ım" : ""}`, `UI/UX Designer ${i18n.language === "tr" ? "'ım" : ""}`]}
                typeSpeed={60}
                backSpeed={40}
                loop
               

              />  </h1> 
        </div>
              
            <p className="text-white  text-xl lg:text-2xl mt-6 lg:mb-12 mb-5">{t("description")}</p>
            <ul className="flex gap-2 mb-5">
              <a href="https://github.com/ahmetyalcn">
                <li className="flex bg-white w-28 h-11 rounded-sm justify-center items-center hover:bg-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none">
                    <path d="M12.9993 0.757569C6.62413 0.756721 1.18956 5.54566 0.16884 12.0638C-0.851878 18.5819 2.84266 24.9046 8.89128 26.991C9.54273 27.1124 9.77596 26.6981 9.77596 26.3419C9.77596 26.022 9.76553 25.1745 9.76162 24.0477C6.14606 24.8574 5.38255 22.242 5.38255 22.242C5.14453 21.4282 4.63283 20.7296 3.94023 20.273C2.76762 19.4377 4.03014 19.4566 4.03014 19.4566C4.86488 19.5751 5.59955 20.0874 6.01967 20.8439C6.37528 21.5136 6.97439 22.0085 7.68388 22.2185C8.39338 22.4286 9.15449 22.3365 9.7981 21.9626C9.85859 21.2798 10.1519 20.6416 10.6255 20.1624C7.74081 19.8237 4.70765 18.6685 4.70765 13.5092C4.69164 12.1748 5.17005 10.8848 6.04443 9.90465C5.6488 8.74312 5.69539 7.4691 6.17472 6.3419C6.17472 6.3419 7.26525 5.97888 9.74729 7.71977C11.876 7.11519 14.1227 7.11519 16.2514 7.71977C18.7347 5.97753 19.824 6.3419 19.824 6.3419C20.3055 7.46856 20.3521 8.74348 19.9543 9.90465C20.8318 10.8847 21.3099 12.1781 21.2884 13.5146C21.2884 18.6874 18.2527 19.8237 15.3576 20.157C15.9821 20.8183 16.3024 21.7256 16.2371 22.6482C16.2371 24.4485 16.2214 25.9006 16.2214 26.3419C16.2214 26.7022 16.4534 27.1205 17.1165 26.9883C23.1626 24.8983 26.8532 18.5753 25.8304 12.0589C24.8076 5.54251 19.3732 0.756058 12.9993 0.757569Z" fill="#3730A3" />
                  </svg>
                  <span className="text-purple">&nbsp;Github</span>
                </li>
              </a>
              <a href="https://www.linkedin.com/in/ahmetnecdetyalcin/" >
                <li className="flex bg-white w-28 h-11 rounded-sm justify-center items-center hover:bg-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                    <path d="M13.3333 25.4881H7.99998V8.68442H13.3333V11.485C14.4701 9.96605 16.1941 9.0605 18.0333 9.01629C21.3407 9.03557 24.0096 11.8622 24 15.3359V25.4881H18.6666V16.036C18.4533 14.4714 17.1756 13.3104 15.6706 13.3138C15.0123 13.3357 14.391 13.6384 13.9499 14.1521C13.5088 14.6658 13.2862 15.3461 13.3333 16.036V25.4881ZM5.33332 25.4881H0V8.68442H5.33332V25.4881ZM2.66666 5.88381C1.1939 5.88381 0 4.62993 0 3.0832C0 1.53647 1.1939 0.282593 2.66666 0.282593C4.13942 0.282593 5.33332 1.53647 5.33332 3.0832C5.33332 3.82597 5.05237 4.53831 4.55228 5.06353C4.05218 5.58875 3.3739 5.88381 2.66666 5.88381Z" fill="#3730A3" />
                  </svg>
                  <span className="text-purple">&nbsp;Linkedin</span>
                </li>
              </a>
            </ul>
          </div>
          <div className="md:w-[25%] ">
            <div className="md:w-[30vw] md:h-[30vw] md:flex mb-5">
              <img className="rounded-xl object-cover w-full h-full" src="./images/logo.png" alt="Modern building architecture" />
            </div>
          </div>

        </div>
      </motion.div>
    </header>
  )
}

export default Header