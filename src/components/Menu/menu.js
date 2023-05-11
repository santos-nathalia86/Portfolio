import React from 'react'
import { Link } from 'react-router-dom';
import './menu.css'
import { FaBars, FaTimes } from "react-icons/fa"
import { BsFacebook, BsLinkedin, BsGithub} from "react-icons/bs"
import { FiMenu } from "react-icons/fi"
import { useRef } from 'react'
import Logo from '../../assets/logotipo.png'
import Curriculo from './Curriculo.pdf'


export const Menu = () => {

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
            <Link to="/" className='item ativo'> Home </Link>
            <Link to="/sobre" className='item'> Sobre </Link>
            <Link to="/portfolio" className='item'> Portfólio </Link>
            <Link to="/contato" className='item'> Contato </Link>
            <button className='nav-btn nav-close-btn' onClick={showNav}> <FaTimes/> </button>
            </div>
        </div>

        </nav>
        <button className='nav-btn nav-close-btn' onClick={showNav}> <FaBars/> </button>

    </header>

    <section className='home'>

        <div className='content'>
            <h1> Nathalia. <br></br> <span> Dev </span> </h1>
            <p>
            "O conhecimento e as habilidades sozinhos não podem levar a humanidade a uma vida feliz e digna. A humanidade tem todas as razões para colocar os proclamadores de altos padrões e valores morais acima dos descobridores da verdade objetiva.”
           <br/>
           <i> - Albert Einstein </i>
            </p>  
            <a href={Curriculo} className='link' target='_blank'> Saiba mais </a>
        </div>

        <div className='icones'>
            <Link to="https://www.facebook.com/naah.santos05/" className='link-icone' target='_blank'> <BsFacebook/> </Link>
            <Link to="https://www.linkedin.com/in/nathalia-santos-developer/" className='link-icone' target='_blank'> <BsLinkedin/> </Link>
            <Link to="https://github.com/santos-nathalia86/" className='link-icone' target='_blank'> <BsGithub/> </Link>


        </div>

    </section>

    </>


    )
}
export default Menu