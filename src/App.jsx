import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import lucas from '../src/assets/personal/lucas.jpg'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
 
        </div>
      </div>
      <FloatingWhatsApp 
        phoneNumber="5519971341427"
        accountName="Lucas"
        allowEsc
        darkMode
        notification
        chatMessage="Olá obrigado por entrar em contato no que posso ajudar?"
        avatar={lucas}
        placeholder="Escreva sua mensagem..."
        statusMessage="Conte comigo!"
        allowClickAway/>
    </BrowserRouter>
  );
};

export default App;
