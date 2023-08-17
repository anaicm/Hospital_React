import Styles from '../estilos/login.module.css';//contiene los estilos del registo y login
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navegacion } from './barraNavegacion';
import { Footer } from './footer';

export const Login =()=>{
  


    return (
      <>
       <Navegacion/>
        <div className={Styles.containerLogin}>
        <div className={Styles.loginBox}>
            <h2>Login</h2>
            <form action="" method="post">
                <div className={Styles.formLogin}>
                    <label for="username" className={Styles.formLoginLabel}>Email</label>
                    <input type="text" id="username" name="username" required className={Styles.formLoginInput}/>
                </div>
                <div className={Styles.formLogin}>
                    <label for="password" className={Styles.formLoginLabel}>Password</label>
                    <input type="password" id="password" name="password" required className={Styles.formLoginInput}/>
                </div>
                <div className={Styles.formLogin}>
                    <input type="submit" id="login" name="login" value="Login" className={Styles.formLoginInput}/>
                </div>
                <div class="contra_olvidar">
                    <p>
                        <Link to="/">
                            Volver
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    </div>
    <Footer/> 
      </>
    
        
    )
}