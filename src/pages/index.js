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
      <Section grid >
        <Hero />
        <div style={{textAlign: 'center'}}>
          <img src='/images/fotoCV.jpg' style={{ width: '250px', height: '250px', borderRadius: '50%'}}/>
          <BgAnimation />
        </div>
      </Section>
      <Projects />
      <Education/>
      <Technologies />
      <Timeline />
    </Layout>
  );
};

export default Home;
