import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialContainer, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container id='start'>
    <Div1>
      <Link href='/'>
        <a style={{display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
          <DiCssdeck size='3rem'/> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#education'>
          <NavLink>Education</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
      {/* <li>
        <a href='https://drive.google.com/file/d/1Va1nZ_FiYcbjrDM4n03Uhu-HCisO7x2s/view?usp=sharing' target='_blank'>
          <NavLink>Download CV</NavLink>
        </a>
      </li> */}
    </Div2>
    <Div3>
        <SocialIcons href='https://github.com/Oliva96' target='_blank'>
          <AiFillGithub size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://linkedin.com/in/alejandro-oliva-4629151b9' target='_blank'>
          <AiFillLinkedin size='3rem'/>
        </SocialIcons>
        {/* <SocialIcons href='https://twitter.com' target='_blank'>
          <AiFillTwitterCircle size='3rem'/>
        </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;
