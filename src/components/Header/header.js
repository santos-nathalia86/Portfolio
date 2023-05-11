import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'
import { FaBars, FaTimes } from "react-icons/fa"
import { BsFacebook, BsLinkedin, BsGithub} from "react-icons/bs"
import { FiMenu } from "react-icons/fi"
import { useRef } from 'react'

export const Header = () => {

    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (

    <>
    {/*<div className='pao-com-batata'>
        <video src={Prog} autoPlay loop muted/>
  */}
    <header>
        <Link to="/" className='logo'> LOGO </Link>
        
        <nav ref={navRef}>

        <div className='nav'>
            <div className='nav-itens'>
            <Link to="/" className='item ativo'> Home </Link>
            <Link to="/sobre" className='item'> Sobre </Link>
            <Link to="/portfolio" className='item'> Portfolio </Link>
            <Link to="/contato" className='item'> Contato </Link>
            <button className='nav-btn nav-close-btn' onClick={showNav}> <FaTimes/> </button>
            </div>
        </div>

        </nav>
        <button className='nav-btn nav-close-btn' onClick={showNav}> <FaBars/> </button>

    </header>

    <section className='home'>

        <div className='content'>
            <h1> Nathalia. <br></br> <span> Desenvolvedora </span> </h1>
            <p>
            Lorem ipsum dolor sit amet. Et nesciunt sint ut odit fuga ut consequuntur autem est rerum quas! In galisum reiciendis quo labore enim et asperiores omnis. Ab inventore quod et eligendi voluptas sed velit cupiditate et ipsa incidunt.
            </p>  
            <Link to="" className='link'> Saiba mais </Link>
        </div>

        <div className='icones'>
            <Link to="https://facebook.com" className='link-icone'> <BsFacebook/> </Link>
            <Link to="https://linkedin.com" className='link-icone'> <BsLinkedin/> </Link>
            <Link to="https://github.com/" className='link-icone'> <BsGithub/> </Link>


        </div>

    </section>

    </>

    )
}
export default Header