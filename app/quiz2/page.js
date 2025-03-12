'use client'
import "./quiz.css"

import { useState } from "react";

function Quiz() {

    const [ p1, alteraP1 ] = useState(0)
    const [ p2, alteraP2 ] = useState(0)
    const [ p3, alteraP3 ] = useState(0)
    const [ p4, alteraP4 ] = useState("")
    const [ total, alteraTotal ] = useState(0)

    const [ mostraP1 , alteraMostraP1] = useState(true)
    const [ mostraP2 , alteraMostraP2] = useState(false)




    const[ selecionado, alteraselecionado ] = useState(["","","",""])

    function calculaTotal(){

        let totalAtualizado = 0

        if(p4 == "naruto"){
            totalAtualizado = p1+p2+p3+1
            alteraTotal(p1+p2+p3+1)
        }else{
            totalAtualizado = p1+p2+p3
            alteraTotal(p1+p2+p3)
        }

        let valorDoBanco = parseInt(localStorage.getItem("total"))
        localStorage.setItem("total", totalAtualizado + valorDoBanco)

    }




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

            <p>pontos de todo mundo: {total}</p>

            <hr/>
        
            {
                mostraP1 == true &&
                    <div>
                        <h2> Qual a cor do cavalo branco de Napoleãum? </h2>
                        <label> <input name="p1" type="radio" onChange={()=> {alteraP1(0); alteraMostraP2(true); alteraMostraP1(false)}} />Preto</label>
                        <br/>
                        <label> <input name="p1" type="radio" onChange={()=> {alteraP1(0); alteraMostraP2(true); alteraMostraP1(false)}} />Azul</label>
                        <br/>
                        <label> <input name="p1" type="radio" onChange={()=> {alteraP1(0); alteraMostraP2(true); alteraMostraP1(false)}} />Branco</label>
                        <br/>
                        <label> <input name="p1" type="radio" onChange={()=> {alteraP1(1); alteraMostraP2(true); alteraMostraP1(false)}} />Transparente</label>
                    </div>
           
            }


            {
                mostraP2 == true &&
                    <div>
                        <h2> Qual a melhor letra</h2>
                        <label> <input name="p2" type="radio"  onChange={()=> alteraP2(1)} />A</label>
                        <br/>
                        <label> <input name="p2" type="radio" onChange={()=> alteraP2(0)} />B</label>
                        <br/>
                        <label> <input name="p2" type="radio" onChange={()=> alteraP2(0)} />C</label>
                        <br/>
                        <label> <input name="p2" type="radio" onChange={()=> alteraP2(0)} />X</label>
                    </div>
            }

            <hr/>

            <button onClick={()=> calculaTotal()} >Enviar Respostas</button>

            <p>Total de pontos: {total} </p>

        </div>
     );
}

export default Quiz;