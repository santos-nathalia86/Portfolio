import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './contato.css'
import { FaBars, FaTimes } from "react-icons/fa"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"
import { useRef } from 'react'
import Logo from '../../assets/logotipo.png'
import Telefone from '../../assets/icon-tel.png'
import emailjs from '@emailjs/browser'

export const Contato = () => {

    const navRef = useRef();
    const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
    }

    const [name, setName] = useState ('')
    const [email, setEmail] = useState ('')
    const [message, setMessage] = useState ('')

    function sendEmail (e){
    e.preventDefault();

    if(name === '' || email === '' ||  message === '') {
        alert("Preencha todos os campos");
        return;

    }

    const parametroTemp  = {
        from_name: name,
        message: message,
        email: email
    }
    emailjs.send("service_s2z41o9", "template_55lqc6j", parametroTemp, "pfFnfo37E55p1cPku")
    .then((response) => {
        console.log("E-mail enviado com sucesso.", response.status, response.text)
        setEmail('')
        setName('')
        setMessage('')
    },
    (err) => {
        console.log("ERRO", err)
    })

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
        <Link to="/portfolio" className='item'> Portfólio </Link>
        <Link to="/contato" className='item ativo'> Contato </Link>
        <button className='nav-btn nav-close-btn' onClick={showNav}> <FaTimes/> </button>
        </div>
    </div>

    </nav>
        <button className='nav-btn nav-close-btn' onClick={showNav}> <FaBars/> </button>
    </header>

    <section className='container-contato'> 
    <div className='titulo'> <h1> Contato </h1></div>
    <p className='contato'> Caso tenha se interessado, ou caso queira mandar alguma sugestão, pode me enviar uma mensagem ou um e-mail. </p>

    <div className='container-um'>
    <div className='telefone'>
        <img src={Telefone}/>
        <span> 11 94601-5624 </span>
    </div>

    </div> 
    {/* FORM */}
    <div className='formulario'>
        <form className='form' onSubmit={sendEmail}>
            <label> Nome: </label>
            <input type="text" name='nome' placeholder='Digite seu nome'
            onChange={(e) => setName(e.target.value)} value={name}
            />
            <label> E-mail </label>
            <input type="text" name='email' placeholder='Digite seu e-mail'
            onChange={(e) => setEmail(e.target.value)} value={email}

            />
            <label> Motivo do contato: </label>
            <input type='text' name='descricao' placeholder='Mensagem'
            onChange={(e) => setMessage (e.target.value)} value={message}
            />

            <input type="submit" value='Enviar'className='botao-enviar'/>

        </form>
    </div>

    </section>
    <footer>
        &copy; Todos direitos reservados
    </footer> 
    </>
  )
}
export default Contato