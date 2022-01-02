import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {

  return (
    <Section id='about'>
      <SectionDivider/>
      <br />
      <SectionTitle>About Me</SectionTitle> 
      <SectionText>
      When I started to know how blockchain technology works I was completely fascinated, 
      from that moment I realized that I wanted to become a Full-Stack Web 3.0 developer.
      </SectionText>
    </Section>
  );
};

export default Timeline;
