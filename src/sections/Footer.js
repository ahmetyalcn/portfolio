import { useTranslation } from "react-i18next"

const Footer = () => {
    const {t} = useTranslation()
    return (
        <footer className="flex justify-center pt-10 dark:bg-brown">
            <div className="lg:w-[33vw] text-center pb-5">
                <h3 className="text-purple dark:text-light-purple font-bold text-5xl mb-5">{t("footer.footerTitle")}</h3>
                <p className="text-xl mb-5 dark:text-white">{t("footer.footerText")}</p>
                <p className="mb-5 underline text-purple text-xl dark:text-light-purple">ahmetnecdetyalcn@gmail.com</p>
                <ul className="flex justify-center gap-5">
                    <a href="#">
                        <li><img src="./images/twitter.svg" alt="" /></li>
                    </a>
                    <a href="#">
                        <li><img src="./images/codepen.svg" alt="" /></li>
                    </a>
                    <a href="">
                        <li><img src="./images/email.svg" alt="" /></li>
                    </a>
                    <a href="https://instagram.com/develoqer_">
                        <li><img src="./images/instagram.svg" alt="" /></li>
                    </a>
                </ul>
            </div>

        </footer>
    )
}

export default Footer