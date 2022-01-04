import React, { useState } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {

  const [showMore, setshowMore] = useState(false);

  return (
    <Section row nopadding style={{ margin: 0}}>
      <LeftSection>
        <SectionTitle main center>
          Hello, I am <br/>
          Alejandro Oliva
        </SectionTitle>
        {
          showMore ? (
              <SectionText>
                I am a software developer with industry experience building websites and web
                applications. I specialize in front-end and have professional experience
                working with Python, React and Angular. Furthermore, I also have experience
                working in blockchain technology, creating and testing smart contract on
                Ethereum. Take a look at my work or get in touch!
              </SectionText>
          ) : (
              <SectionText>
                I am a software developer with industry experience building websites and web
                applications ...
              </SectionText>
          )
        }
        <Button onClick={() => setshowMore(!showMore)}>
          {showMore ? (<p>Show less</p>) : (<p>Show more</p>)}
        </Button>
      </LeftSection>
    </Section>
  )
};

export default Hero;