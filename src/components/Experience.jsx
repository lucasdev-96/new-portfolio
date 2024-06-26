import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { textVariant } from '../utils/motion';
import { ResumeContext } from '../Context/translateContext';
import { useContext, useEffect, useState } from 'react';
import {experience, experienceBr} from '../constants/index'
import {experiences, experiencesBr} from '../constants/index'
import cvPt from '../assets/personal/cv-pt.pdf'
import cvEn from '../assets/personal/cv-en.pdf'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import foto from '../assets/personal/x.jpg'



const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#eaeaec',
      color: '#292929',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    }}
    contentArrowStyle={{
      borderRight: '7px solid  #232631',
    }}
    date={
      <div>
        <h3 className="text-dim text-[18px] font-bold font-beckman">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }>
    <div>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  const { language } = useContext(ResumeContext);
  const [experienceInfo, setexperienceInfo] = useState(experiencesBr);

  useEffect(() => {
    if (language === 'pt') {
      setexperienceInfo(experiencesBr)
    } else {
      setexperienceInfo(experiences)
    }
  }, [language])

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
        {language === 'pt' ? experienceBr.title : experience.title}
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
        {language === 'pt' ? experienceBr.subtitle : experience.subtitle}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experienceInfo.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: '#eaeaec',
              color: '#292929',
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #232631',
            }}
            iconStyle={{ background: '#333333' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }>
            <a
              className="live-demo flex justify-between 
              sm:text-[18px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-3 pr-3 
              whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
              w-[125px] h-[46px] rounded-[10px] bg-jetLight 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
             download
             href={language === 'pt' ? cvPt :cvEn}
              onMouseOver={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', download);
              }}>
              {language === 'pt' ? experienceBr.resume : experience.resume}
              <img
                src={download}
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain"
              />
            </a>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <FloatingWhatsApp 
        phoneNumber="5519998837659"
        accountName="Lucas"
        allowEsc
        darkMode
        notification
        chatMessage={`${language === 'pt' ? 'Olá obrigado por entrar em contato no que posso ajudar?' : 'Hello, thank you for reaching out. How can I assist you?'}`}
        avatar={foto}
        placeholder={`${language === 'pt' ? 'Escreva sua mensagem...' : 'Type your message...'}`}
        statusMessage={`${language === 'pt' ? 'Conte comigo!' : 'Count on me!'}`}
        allowClickAway/>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
