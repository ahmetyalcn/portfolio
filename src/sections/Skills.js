import { useTranslation } from "react-i18next";

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
        <div className="dark:bg-brown lg:h-[70vh]">
            <div className="mx-auto rounded-xl overflow-hidden lg:w-[70%] pt-6 flex flex-wrap justify-between ">
                <div className="lg:w-[15%]">

                    <h4 className="text-5xl p-5 mx-auto font-bold text-purple dark:text-green">{t("skills")}</h4>
                </div>
                <div className="md:flex flex flex-wrap justify-end lg:w-[80%]">
                   
                          {skills.map((skill, index) => (
                        <div key={index} className="flex items-center lg:justify-end w-[48%] flex-wrap pb-5">
                            <img className="object-cover w-32 text-left" src={skill.imageUrl} alt="Modern building architecture" />
                            <p className=" text-xl p-1 w-32 text-left dark:text-white">{skill.title}</p>
                        </div>
                    ))}
                  

                </div>
            </div>
        </div>
    )
}

export default Skills