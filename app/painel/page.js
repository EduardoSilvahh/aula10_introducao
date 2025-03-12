'use client'


import { useState } from "react"
import "./painel.css"

function Painel(){

    const[ nome, alterarNome] = useState("")
    const[ senha, alterarSenha] = useState("")
    const[ mostraerro, alteraMostraerro ] = useState(false)
    const[ loginautorizado, alteraloginautorizado ] = useState(false)

    function autenticadorUsuario(){
        if(nome == "eduardo" && senha == 202008){
            alteraMostraerro(false)
            alteraloginautorizado(true)
            
        }else if (nome == "" && senha == ""){
            alteraMostraerro(false)
            alteraloginautorizado(false)

        }else{
            alteraMostraerro(true)
            alteraloginautorizado(false)
        }

        
    
    }
    

    return(
        <div>
            <h1>Painel Administrativo</h1>

            <label>
                Digite o usuário:
                <input name="nome" onChange={(e)=> alterarNome(e.target.value)}/>
            </label>

            <br/>

            <label>
                Digite a senha:
                <input name="senha" type="password" onChange={(e)=> alterarSenha(e.target.value)}/>
            </label>

            <br/>

            <button onClick={()=> autenticadorUsuario()}>Entrar</button>

            {/* Operador Ternário */}

            { 
                mostraerro == true ? 
                    <div className="erro" >
                        <p>Usuário ou senha incorretos</p>
                    </div>   
                :
                    <div></div>
            }

            { 
                loginautorizado == true ? 
                    <div className="autorizado" >
                        <p>Login Autorizado!</p>
                    </div>   
                :
                    <div></div>
            }


        </div>
    );
}


export default Painel;