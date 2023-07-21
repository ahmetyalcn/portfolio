import React from 'react'
import { Link } from 'react-scroll';
import { styled } from 'styled-components'

const Container = styled.div`
z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: fixed;
  @media (max-width: 768px) {
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
    color:#4731D3;
    &:hover {
    background-color: #fff;
  }
    font-weight:700;
  text-orientation: mixed;
  transform: rotate(-180deg);
  @media (max-width: 768px) {
     writing-mode: horizontal-tb;
     &:hover {
    background: none;
  }
 
  }
`;
const SideMenu = () => {
    return (
        <Container>
            <div className='bg-green flex md:flex-col rounded-lg border-solid border-purple border-2'>
                <Link to="home" smooth={true} duration={500} className='p-2 border-solid border-purple border-r-2 md:border-none'>
                    <MenuButton>
                        Home
                    </MenuButton>
                </Link>
                <Link to="skills" smooth={true} duration={500} className='p-2 border-solid border-purple border-r-2 md:border-none'>
                    <MenuButton>
                        Skills
                    </MenuButton>
                </Link>
                <Link to="profile" smooth={true} duration={500} className='p-2 border-solid border-purple border-r-2 md:border-none'>
                    <MenuButton>
                        Profile
                    </MenuButton>
                </Link>
                <Link to="projects" smooth={true} duration={500} className='p-2'>
                    <MenuButton>
                        Projects
                    </MenuButton>
                </Link>
            </div>

        </Container >


    )
}

export default SideMenu