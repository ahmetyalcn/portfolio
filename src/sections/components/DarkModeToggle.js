import { useContext } from "react";
import { ThemeContext } from "../../contexts/context";
import { useTranslation } from "react-i18next";

const DarkModeToggle = () => {
    const {toggleChange, lightMode} = useContext(ThemeContext);
const {t} = useTranslation()
    return (
        <>
        <div className="relative inline-block w-14 align-middle select-none transition duration-200 ease-in min-h-max	my-auto">
            <input
                type="checkbox"
                name="toggle"
                id="toggle-checkbox"
                className="toggle-checkbox absolute w-0 h-0 opacity-0"
                checked={lightMode}
                onChange={toggleChange}
            />
            <label
                htmlFor="toggle-checkbox"
                className={`overflow-hidden h-6 rounded-full cursor-pointer flex items-center justify-between ${lightMode ? "bg-[#8F88FF]" : "bg-[#3A3A3A]"}`}
            >
                <span
                    className={`text-2x1 transition-transform duration-200 ease-in p-1 ${lightMode ? "transform translate-x-full" : ""
                        }`}
                >
                    {lightMode ? (
                        <div className="h-5 w-5 bg-[#FFE86E] rounded-full"></div>
                    ) : (
                        <div className="h-5 w-5 bg-[#FFE86E] rounded-full relative">
                            <div className={`absolute h-4 w-4 rounded-full left-[0.35rem] top-[0.11rem] ${lightMode ? "bg-[#8F88FF]" : "bg-[#3A3A3A]"}`}></div>
                        </div>
                    )}
                </span>
            </label>
        </div>
        <span className="text-purple dark:text-gray-light font-bold"> {lightMode ? t("theme.darkMode") : t("theme.lightMode")} </span> 
        </>
    )
}

export default DarkModeToggle