import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../styles/RecuperarSenha.css'
import ImgBackground from "../image/login.png"
import lux from "../image/lux.png"
const RecuperarSenha = () => {
  return (
    <div className='RecuperarSenha'style={{backgroundImage:`url(${ImgBackground})`}} >
<div className="RSPage-main">
  
<li>  <Link to="/">RecuperarSenha</Link></li>

<section>
  <div className="Login-ldPage">
    <div className="text-ldpage">
      <h1>Entrar</h1>
      <form action="">
        <input type="text" />
        <input type="text" />
      </form>
      <div className="social-logins">
        <div className="sc-login"><img src="" alt="" /></div>
        <div className="sc-login"><img src="" alt="" /></div>
        <div className="sc-login"><img src="" alt="" /></div>
      </div>
      <input type="checkbox" name="" id="" />
      <input type="button" value="" />
    </div>
  </div>
</section>
<section className='Imglux'>
    <img src={lux} alt="" />
</section>
</div>
{/* <nav>
        <ul>
          <li>
          <Link to="/">LandingPage</Link>
          </li>
          <li>
            <Link to="/Escrever-se">Escrever-se</Link>
          </li>
          <li>
            <Link to="/RecuperarSenha">Recuperar Senha</Link>
          </li>
        </ul>
      </nav>

      <Outlet /> */}

    </div>
  )
}

export default RecuperarSenha