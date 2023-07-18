import { useContext } from "react";
import { useTranslation } from "react-i18next"
import { ThemeContext } from "../contexts/context";
import { motion } from "framer-motion";
const Projects = () => {
    const { t, i18n } = useTranslation();
    const { projects } = useContext(ThemeContext);

    return (
        <div className=" dark:bg-dark-green bg-green ">
            <div className=" w-[70%] mx-auto pb-10">
                <h4 className="text-5xl mx-auto pt-5 pb-5 lg:pb-10 lg:pt-10 font-bold text-purple dark:text-green">{t("projects.title")}</h4>
                {projects.map(project => (
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    key={project.id} className="w-full mx-auto bg-white dark:bg-brown rounded-xl shadow-md overflow-hidden mt-5">
                        <div className="md:flex">
                            <div className="md:shrink-0 md:w-[30vw] md:h-[30vw]">
                                <img className="w-full object-cover md:h-full " src={project.imageUrl} alt="Modern building architecture" />
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="p-8 my-auto">
                                    <div className="text-3xl tracking-wide font-semibold text-purple dark:text-light-pink">{project.title}</div>
                                    <p className="mt-2 text-slate-500 mb-5 dark:text-white">{project.description[i18n.language]}</p>
                                    <ul className="flex">
                                        {
                                            project.keywords.map((keyword, index) => (
                                                <li
                                                    key={index} className="bg-purple dark:bg-light-purple text-white text-center w-20 h-8 leading-8 rounded-full mr-3">{keyword}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <ul className="flex mt-5">
                                        <a className="underline font-semibold mr-10 dark:text-green" href={project.url}>
                                            <li>{t("projects.viewSite")}</li>
                                        </a>
                                        <a className="underline font-semibold dark:text-green" href={project.github}>
                                            <li>Github</li>
                                        </a>
                                    </ul>

                                </div>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Projects