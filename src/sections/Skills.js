import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"
import { useEffect } from "react";
const Skills = () => {
    const { t } = useTranslation();

    const skills = [
        {
            title: "JAVASCRIPT",
            imageUrl: "./images/javascript.svg"
        },
        {
            title: "NODEJS",
            imageUrl: "./images/nodejs.svg"
        },
        {
            title: "REACT",
            imageUrl: "./images/react.svg"
        },
        {
            title: "VSCODE",
            imageUrl: "./images/vscode.svg"
        },
        {
            title: "REDUX",
            imageUrl: "./images/redux.svg"
        },
        {
            title: "FIGMA",
            imageUrl: "./images/figma.svg"
        }
    ]
    return (
        <section className="dark:bg-brown lg:h-[70vh] ">
            <div className="mx-auto rounded-xl overflow-hidden lg:w-[70%] pt-6 flex flex-wrap w-[70%] ">
                <div className="lg:w-[20%]">

                    <h4 className="text-5xl pb-5 mx-auto font-bold text-purple dark:text-green">{t("skills")}</h4>
                </div>
                <div className="md:flex flex flex-wrap justify-end lg:w-[80%]">

                    {skills.map((skill, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.5, delay:0.25 }} 

                            key={index}
                            className="flex items-center justify-start lg:justify-end w-[50%] flex-wrap pb-5">
                            <img className="object-cover w-32 text-left" src={skill.imageUrl} alt="Modern building architecture" />
                            <p className=" text-xl p-1 w-32 text-left dark:text-white">{skill.title}</p>
                        </motion.div>
                    ))}


                </div>
            </div>
        </section>
    )
}

export default Skills