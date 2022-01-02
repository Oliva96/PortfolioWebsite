import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Telegram</LinkTitle>
          <LinkItem>@Oliva96</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Download CV</LinkTitle>
          <LinkItem href='https://drive.google.com/file/d/1Va1nZ_FiYcbjrDM4n03Uhu-HCisO7x2s/view?usp=sharing' target='_blank'>
            Here
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:oliva961206@gmail.com'>oliva961206@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/Oliva96' target='_blank'>
          <AiFillGithub size='3rem'/>
          </SocialIcons>
          <SocialIcons href='https://linkedin.com/in/alejandro-oliva-4629151b9' target='_blank'>
            <AiFillLinkedin size='3rem'/>
          </SocialIcons>
          {/* <SocialIcons href='https://twitter.com' target='_blank'>
            <AiFillTwitterCircle size='3rem'/>
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
