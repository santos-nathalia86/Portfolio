import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaJava, FaTimes } from "react-icons/fa"
import { useRef } from 'react'
import Nathalia from '../../assets/eu-naa.png'
import './sobre.css';
import { DiJava } from "react-icons/di" 
import Logo from '../../assets/logotipo.png'
import Html from '../../assets/html-5.png'
import JavaS from '../../assets/js.png'
import Java from '../../assets/java.png'
import Css from '../../assets/css-3.png'
import NodeLogo from '../../assets/node-js.png'
import ReactLogo from '../../assets/react.png'
import MySql from '../../assets/mysql.png'
import Csharpe from '../../assets/csharpe.png'
import LingC from '../../assets/c++.png'
import Php from '../../assets/php.png'

export const Sobre = () => {

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
            <Link to="/sobre" className='item ativo'> Sobre </Link>
            <Link to="/portfolio" className='item'> Portfólio </Link>
            <Link to="/contato" className='item'> Contato </Link>
            <button className='nav-btn nav-close-btn' onClick={showNav}> <FaTimes/> </button>
            </div>
        </div>

        </nav>
        <button className='nav-btn nav-close-btn' onClick={showNav}> <FaBars/> </button>

    </header>

    <section className='sobre'>

      {/* SOBRE MIM */}
      <div className='sobre-mim'>
      <div className='foto'>
      <img src={Nathalia}/>
      </div>

    <div className='textos'>
      <h1> Sobre </h1>
      <p>
        "Nunca imaginei que iria trabalhar com programação. Tudo começou quando entrei na ETEC para fazer o ensino médio integrado ao ensino técnico, e mesmo sem ter noção fui para o curso de Desenvolvimento de Sistemas. Lembro que mal conseguia ligar um notebook (que ironia, né?). Apanhei muito nas primeiras aulas, mas mesmo apanhando bastante me apaixonei por programação, e hoje vejo que é o que eu quero para o futuro."
        <br/> <br/>
        <i> - Nathalia Santos</i>
      </p>

      </div>
      {/* FECHA SOBRE MIM */}
      </div>

      <hr className='linha-sobre' />

    {/* ABRE CURRÍCULO */}
    <div className='curriculo'>

    <div className='habilidades'>
    <h1> Habilidades </h1>

    <div className='icones'>

      <img src={Html}/> 
      <img src={Css}/> 
      <img src={ReactLogo}/> 
      <img src={NodeLogo}/> 
      <img src={Php}/> 
      <img src={JavaS}/> 
      <img src={Java}/> 
      <img src={Csharpe}/> 
      <img src={LingC}/> 
      <img src={MySql}/> 

    </div>

    </div>

    {/* FECHA CURRICULO */}
    </div>


    </section>

    <footer>
    &copy; Todos direitos reservados.
    </footer>

    </>

    )
}
export default Sobre