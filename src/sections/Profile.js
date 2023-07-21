import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const Profile = () => {
    const { t } = useTranslation();
    return (
        <section className="lg:h-[80vh] dark:bg-dark-purple bg-purple " name="profile">
            <div className=" w-[70%] mx-auto pb-5">
                <h4 className="text-5xl mx-auto pt-5 lg:pt-10 font-bold text-green dark:text-green">{t("profile.title")}</h4>

                <div
                    className="grid md:grid-cols-3 gap-4 mt-5 lg:mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.25, delay:0.1 }} 
                        className="">
                        <h4 className="text-3xl mx-auto font-semibold text-white dark:text-white">{t("profile.basicTitle")}</h4>
                        <div className="flex mt-3">
                            <p className="w-1/2 text-green font-medium text-lg">{t("profile.birthday")}</p><p className="text-lg text-white">10.09.2001</p>
                        </div>
                        <div className="flex mt-3">
                            <p className="w-1/2 text-green font-medium text-lg">{t("profile.city")}</p><p className="text-lg text-white">Istanbul</p>
                        </div>
                        <div className="flex mt-3">
                            <p className="w-1/2 text-green font-medium text-lg">{t("profile.educationTitle")}</p><p className="text-lg w-1/2 text-white">{t("profile.education")}</p>
                        </div>
                        <div className="flex mt-3">
                            <p className="w-1/2 text-green font-medium text-lg">{t("profile.role")}</p><p className="text-lg text-white">Frontend, UI</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.25, delay:0.1 }} 
                        className="">
                        <div className="md:w-[20vw] md:h-[20vw] md:flex mb-5">
                            <img className="rounded-xl object-cover w-full h-full" src="./images/logo.png" alt="Modern building architecture" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.25, delay:0.1 }} >
                        <h4 className="text-3xl mx-auto font-semibold text-white dark:text-white">{t("profile.aboutMe")}</h4>
                        <p className="text-white text-lg mt-5"> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Reprehenderit beatae eius temporibus maxime vitae laudantium quae. <br />
                            Ipsa voluptatibus hic nam vel quibusdam porro officiis aut laudantium? Sed laudantium tenetur beatae?</p>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}

export default Profile