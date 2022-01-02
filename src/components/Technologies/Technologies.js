import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { FaEthereum } from "react-icons/fa";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' style={{marginBottom: '5px'}}/>
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <FaEthereum size='3rem'style={{marginBottom: '5px'}}/>
        <ListContainer>
          <ListTitle>Blockchain</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Solidity, Truffle and Ganache
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
