import React from "react";
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListParagraph1, ListTitle } from "./EducationStyles";

const Education = () => (
    <Section id="education">
        <SectionDivider/>
        <br/>
        <SectionTitle>Education</SectionTitle>
        <List>
            <ListItem>
                <ListContainer>
                    <ListTitle>Bachelor's degree in Computer Science</ListTitle>
                    <ListParagraph>University of Havana - Havana City</ListParagraph>
                    <ListParagraph1>September 2015 to November 2020</ListParagraph1>
                </ListContainer>
            </ListItem>
            <br/>
            <br/>
            <ListItem>
                <ListContainer>
                    <ListTitle>Master Ethereum and Solidity Programming</ListTitle> 
                    <ListParagraph>
                        Udemy <br/> 
                        See certificate 
                        <a href="https://drive.google.com/file/d/1NL1J8YVOQepmCVFJCw_a0GFVSXtJcC14/view?usp=sharing" 
                            target="_blank"
                            style={{marginLeft: '5px'}}>
                                here
                        </a>
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
)

export default Education
