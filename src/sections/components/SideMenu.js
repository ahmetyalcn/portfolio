import React from 'react'
import { Link } from 'react-scroll';
import { styled } from 'styled-components';
import { useTranslation } from "react-i18next";
const Container = styled.div`
  z-index: 1;
  width: 3rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: fixed;
 
  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
    flex-direction: row;
    align-items: end;
    height: auto;
    bottom: 1rem;
    border: "1px solid white";
  }

`;

const MenuButton = styled.span`
    writing-mode: vertical-rl;
    padding: 1rem 0.5rem;
    cursor: pointer;
  font-weight:700;
  text-orientation: mixed;
  transform: rotate(-180deg);
  @media (max-width: 767px) {
     writing-mode: horizontal-tb;
     &:hover {
    background: none;
  }
 
  }
`;
const SideMenu = () => {
    const {t} = useTranslation();
    return (
        <Container>
            <div className=' bg-green dark:bg-dark-green text-purple dark:text-green flex md:flex-col rounded-lg border-solid border-purple dark:border-green border-2'>
                <Link to="home" smooth={true} duration={500} className='md:hover:bg-white md:dark:hover:bg-dark-purple md:rounded-lg p-2 md:p-0  border-solid border-purple dark:border-green border-r-2 md:border-none'>
                    <MenuButton>
                        { t("buttons.home")}
                    </MenuButton>
                </Link>
                <Link to="skills" smooth={true} duration={500} className='md:hover:bg-white md:dark:hover:bg-dark-purple p-2 md:p-0 md:rounded-lg border-solid border-purple dark:border-green  border-r-2 md:border-none'>
                    <MenuButton>
                    { t("buttons.skills")}
                    </MenuButton>
                </Link>
                <Link to="profile" smooth={true} duration={500} className='md:hover:bg-white md:dark:hover:bg-dark-purple p-2 md:p-0 md:rounded-lg border-solid border-purple dark:border-green  border-r-2 md:border-none'>
                    <MenuButton>
                    { t("buttons.profile")}
                    </MenuButton>
                </Link>
                <Link to="projects" smooth={true} duration={500} className='md:hover:bg-white md:dark:hover:bg-dark-purple p-2 md:p-0 md:rounded-lg'>
                    <MenuButton>
                    { t("buttons.projects")}
                    </MenuButton>
                </Link>
            </div>

        </Container >


    )
}

export default SideMenu