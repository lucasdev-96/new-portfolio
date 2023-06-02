import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

i18next
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          'home.greeting': "Hi, I'm",
          'home.amI': 'I am a full stack web developer',
          'home.about':
            "I've always really liked technology and the idea of ​​one day being able to create something that I've done myself or together with a certain group of people, gives me an incredible feeling of happiness. I am easy and I like to learn new things.",
          'home.info': 'Here you will find my projects, certificates, skills and more about me.',
          'navBar.title': 'Full Stack Web Developer',
          'navBar.about': 'About',
          'navBar.curriculum': 'Resume',
          'navBar.courses': 'Courses',
          'navBar.courses.certificates': 'Certificates',
          'navBar.courses.projects': 'Projects',
          'navBar.skills': 'Skills',
          'navBar.skills.techniques': 'Techniques',
          'navBar.skills.personal': 'Personal',
          'carrousel.name': 'Hard Skills',
          'carrousel.database': 'Database',
          'carrousel.architecture': 'Software Architecture',
          'footer.curriculum': 'Resume',
          'footer.contact': 'Contact',
          'footer.socialMedia': 'Social Media',
          'footer.technologies': 'Technologies Used',
          'carrousel.name.certificates': 'Certificates',
          'carrousel.info.certificates': ' Trybe Certificate of'
        }
      },
      pt: {
        translation: {
          'home.greeting': 'Oi,  Eu Sou',
          'home.amI': 'Sou um desenvolvedor web full stack',
          'home.about':
            'Sempre gostei muito de Tecnologia e a ideia de um dia conseguir criar algo que eu mesmo tenha feito ou em conjunto com um determinado grupo de pessoas, me fornece uma incrível sensação de felicidade. Tenho facilidade e gosto de aprender coisas novas.',
          'home.info':
            'Aqui você encontrará meus projetos, certificados, habilidades e mais sobre mim.',
          'navBar.about': 'Sobre',
          'navBar.curriculum': 'Currículo',
          'navBar.courses': 'Cursos',
          'navBar.courses.certificates': 'Certificados',
          'navBar.courses.projects': 'Projetos',
          'navBar.skills': 'Habilidades',
          'navBar.skills.techniques': 'Técnicas',
          'navBar.skills.personal': 'Pessoais',
          'navBar.title': 'Desenvolvedor Web Full Stack',
          'carrousel.name': 'Habilidades Técnicas',
          'carrousel.database': 'Banco de Dados',
          'carrousel.architecture': 'Arquitetura de Software',
          'footer.curriculum': 'Currículo',
          'footer.contact': 'Contate me',
          'footer.socialMedia': 'Rede Sociais',
          'footer.technologies': 'Tecnologias usadas',
          'carrousel.name.certificates': 'Certificados',
          'carrousel.info.certificates': 'Certificado Trybe de'
        }
      }
    },
    lng: 'en'
  });