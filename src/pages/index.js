import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Education from '../components/Education/Education';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { SecondaryBtn, Section } from '../styles/GlobalComponents';
import { MdKeyboardArrowUp } from "react-icons/md";
import Link from 'next/link';

const Home = () => {
  return (
    <Layout>
      <SecondaryBtn>
        <Link href='#start'>
          <MdKeyboardArrowUp/>
        </Link>
      </SecondaryBtn>
      <Section grid>
        <Hero />
        <BgAnimation style={{ width: '100%'}}/>
      </Section>
      <Projects />
      <Education/>
      <Technologies />
      <Timeline />
    </Layout>
  );
};

export default Home;
