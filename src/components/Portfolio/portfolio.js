import './portfolio.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa"
import Html from "../../video/projeto-html-css.mp4"
import './portfolio.css'
import { BsGithub} from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import Logo from '../../assets/logotipo.png'
import CsharpePng from '../../assets/csharpe.png'
import MySql from '../../assets/mysql.png'
import CSharpe from '../../video/locadora-csharpe.mp4'
import React from '../../video/Buscador-react.mp4'
import { useRef } from 'react'
import HtmlLogo from '../../assets/html-5.png'
import CssLogo from '../../assets/css-3.png'
import ReactLogo from '../../assets/react.png'
import PhpVideo from '../../video/Livraria-Php.mp4'
import LogoPhp from '../../assets/php.png'
export const Portfolio = () => {

  const navRef = useRef();

  const showNav = () => {
      navRef.current.classList.toggle("responsive_nav");
  }
  return ( 
    <>
    <header>
    <Link to="/">
    <img src={Logo} className='logo'/>    
    </Link>        
        <nav ref={navRef}>

        <div className='nav'>
            <div className='nav-itens'>
            <Link to="/" className='item'> Home </Link>
            <Link to="/sobre" className='item'> Sobre </Link>
            <Link to="/portfolio" className='item ativo'> Portfólio </Link>
            <Link to="/contato" className='item'> Contato </Link>
            <button className='nav-btn nav-close-btn' onClick={showNav}> <FaTimes/> </button>
            </div>
        </div>

        </nav>
        <button className='nav-btn nav-close-btn' onClick={showNav}> <FaBars/> </button>

    </header>

    <div className='portfolio'>
    <section >

    <h1 className='titulo'> Portfólio  </h1>

        {/* HTML */}
        <div className='html-css'>

        <h3 className='subtitulo'> Projeto museu nacional </h3>
        {/* <p> Projeto desenvolvido para ser uma aplicação <i>Web</i> sobre o Museu Nacional, contendo as exposições de artes e assim podendo agendar visitas. Porém, voltado apenas ao Layout (não possuindo funcionalidade, sem o uso de outras tecnológias como PHP e JS). <br/> 
            Projeto desenvolvido através dos conhecimentos básicos em HTML e CSS.  </p> */}

        <video autoPlay loop src={Html} controls> </video>
        {/* <div className='icone'>
        <Link to="https://linkedin.com" className='link-icone'> <BsLinkedin/> </Link>
        </div> */}
        <img src={HtmlLogo}/>
        <img src={CssLogo}/>

        <div className='linha-portfolio'></div>

        </div>

        {/* C# */}
        <div className='csharpe'>

        <h3 className='subtitulo'> Projeto Locadora C# </h3>

        <video autoPlay loop src={CSharpe} controls> </video>
        <img src={CsharpePng}/>
        <img src={MySql}/>
        <br/>

        {/* <div className='icone'>
        <Link to="https://lnkd.in/d28vAp5b" className='link-icone'> <BsLinkedin/>  </Link>
        </div> */}

        <div className='linha-portfolio'></div>

        </div>

        {/* REACT */}
         <div className='react'>
        <h3 className='subtitulo'> Projeto busca cep </h3>
        {/* <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p> */}
        <video autoPlay loop src={React} controls> </video>
        <img src={ReactLogo}/>

        <div className='linha-portfolio'></div>

        </div> 

        {/* PHP */}
        <div className='php'>
        <h3 className='subtitulo'> Projeto livraria </h3>
        {/* <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p> */}

        <video autoPlay loop src={PhpVideo} controls> </video>

        <img src={HtmlLogo}/>
        <img src={CssLogo}/>
        <img src={LogoPhp}/>

        </div> 

    {/* FECHA CONTEUDO */}
    </section>
     <footer>
              &copy; Todos direitos reservados
    </footer> 
    </div>
    </>
  );
}

export default Portfolio;
