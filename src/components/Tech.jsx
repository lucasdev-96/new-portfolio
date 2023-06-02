import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { ResumeContext } from '../Context/translateContext';
import { useContext } from 'react';
import {SkillsBR, Skills_} from '../constants/index'


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
 
    </>
  );
};

export default SectionWrapper(Tech, '');
