'use client'
import "./quiz.css"

import { useState } from "react";

function Quiz2() {

    const [ p1, alteraP1 ] = useState(0)
    const [ p2, alteraP2 ] = useState(0)
    const [ p3, alteraP3 ] = useState(0)
    const [ p4, alteraP4 ] = useState("")
    const [ total, alteraTotal ] = useState(0)

    const[ selecionado, alteraselecionado ] = useState(["","","",""])

    function verificaFilme(e){
        if(e.target.value == "naruto"){
            alteraP4(1)
        }else{
            alteraP4(0)
        }
    }

    
    
    return ( 
        <div>
            <h1>Quiz Conradito</h1>
            <p>Assinale a opção correta!</p>

            <hr/>

            <h2> Qual a cor do cavalo branco de Napoleãum? </h2>
            <label> <input name="p1" type="radio" onChange={()=> alteraP1(0)} />Preto</label>
            <br/>
            <label> <input name="p1" type="radio" onChange={()=> alteraP1(0)} />Azul</label>
            <br/>
            <label> <input name="p1" type="radio" onChange={()=> alteraP1(0)} />Branco</label>
            <br/>
            <label> <input name="p1" type="radio" onChange={()=> alteraP1(1)} />Transparente</label>

            <hr/>

            <h2> Qual a melhor letra</h2>
            <label> <input name="p2" type="radio"  onChange={()=> alteraP2(1)} />A</label>
            <br/>
            <label> <input name="p2" type="radio" onChange={()=> alteraP2(0)} />B</label>
            <br/>
            <label> <input name="p2" type="radio" onChange={()=> alteraP2(0)} />C</label>
            <br/>
            <label> <input name="p2" type="radio" onChange={()=> alteraP2(0)} />X</label>

            <hr/>


            <h2>Qual é a soma de 2+2</h2>
                
            <p className={selecionado[0]} onClick={ ()=> { alteraP3(0); alteraselecionado([ "selecionado","","","" ]) } }>2</p>
            
            <p className={selecionado[1]} onClick={ ()=> { alteraP3(0); alteraselecionado(["","selecionado","",""]) } } >6</p>
            
            <p className={selecionado[2]} onClick={ ()=> { alteraP3(0); alteraselecionado(["","","selecionado",""]) } } >000</p>
            
            <p className={selecionado[3]} onClick={ ()=> { alteraP3(1); alteraselecionado(["","","","selecionado"]) } } >fff</p>
        
    
        
            <hr/>

            <h2> Qual o melhor anime do mundo? </h2>
            <input name="p4" onChange={(e)=> verificaFilme(e)}/>
            

            <br/>
            <hr/>
            

            <button onClick={()=> alteraTotal(p1+p2+p3+p4)} >Enviar Respostas</button>

            <p>Total de pontos: {total} </p>

        </div>
     );
}

export default Quiz2;