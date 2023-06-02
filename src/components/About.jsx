import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import {AboutBR, About_} from '../constants/index'
import { ResumeContext } from '../Context/translateContext';
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'


const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  const { language } = useContext(ResumeContext);

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{language === 'pt' ? AboutBR.introduction : About_.introduction}</p>
        <h2 className={styles.sectionHeadText}>{language === 'pt' ? AboutBR.overview : About_.overview}.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        {language === 'pt' ? AboutBR.about : About_.about}
      </motion.p>
      <p id='contact_' className='text-[30px] text-black mt-8 font-bold'>{language === 'pt' ? AboutBR.socialMedia : About_.socialMedia}</p>
      <motion.div className='flex mt-8'>
        <a className='cursor-pointer' href="https://www.instagram.com/lucazgodoy/" target="_blank"><AiFillInstagram className='text-[50px] text-red-600 hover:text-[60px]'/></a>
        <a className='cursor-pointer' href="https://www.linkedin.com/in/lucas-godoi96/" target="_blank"><AiFillLinkedin className='text-[50px] hover:text-[60px] text-blue-600'/></a>
        <a className='cursor-pointer' href="https://github.com/lucasdev-96" target="_blank"><AiFillGithub className='text-[50px] text-black hover:text-[60px]'/></a>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
