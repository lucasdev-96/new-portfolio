import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks, navLinksBr } from '../constants';
import { close, menu, logo, logotext } from '../assets';
import { useTranslation } from 'react-i18next';
import brazilIcon from '../assets/icons/logo-Brasil.png'
import euaIcon from '../assets/icons/us.png'
import { ResumeContext } from '../Context/translateContext';


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [links, setLinks] = useState(navLinks);

  const { i18n, t } = useTranslation();
  const languages = [
    { src: brazilIcon, name: 'pt' },
    { src: euaIcon, name: 'en' }
  ];
  const { setLanguage, language } = useContext(ResumeContext);

  useEffect(() => {
    if (language === 'pt') {
      setLinks(navLinksBr)
    } else {
      setLinks(navLinks)
    }
  }, [language])

  const buttonsLanguage = () => {
    return languages.map((language, index) => {
      const marginLeftIcon = index === 1 ? '10px' : '';
      const opacity = i18n.resolvedLanguage === language.name ? '0.4' : '';
      return (
        <>
          <button
            key={language.name}
            style={{
              border: 'none',
              background: 'none',
              width: '50px',
              marginLeft: marginLeftIcon
            }}
            onClick={() => {
              // i18n.changeLanguage(language.name)
              setLanguage(language.name);
            }}
            disabled={i18n.resolvedLanguage === language.name}
            type="submit">
            <img style={{ width: '50px', opacity: opacity }} src={language.src} />
          </button>
        </>
      );
    })
  }

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo} // your logo comes here
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />

          {/* if you have text you want besides your logo it comes here.
          Otherwise delete this if you don't need it. */}
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {links.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className='hidden sm:block'>
        {buttonsLanguage()}
        </div>
        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? 'menu-open' : 'menu-close'
                }`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end mt-[10rem] -ml-[35px]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
