import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { ResumeContext } from '../Context/translateContext';
import { useContext } from 'react';
import {SkillsBR, Skills_} from '../constants/index'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import foto from '../assets/personal/x.jpg'

const Tech = () => {
  const { language } = useContext(ResumeContext);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>{language === 'pt' ? SkillsBR.skills : Skills_.skils}</p>
        <h2 className={styles.sectionHeadTextLight}>{language === 'pt' ? SkillsBR.tech : Skills_.tech}.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <motion.div variants={textVariant()} className="w-28 h-28 text-center" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p>{technology.name}</p>
          </motion.div>
        ))}
      </div>
      <FloatingWhatsApp 
        phoneNumber="5519971341427"
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

export default SectionWrapper(Tech, '');
