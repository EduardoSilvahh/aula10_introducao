'use client'

import { useState } from "react";

function quizintegrador(){

    const[ p1, alteraP1 ] = useState(0)
    const[ p2, alteraP2 ] = useState(0)
    const[ p3, alteraP3 ] = useState(0)
    const[ p4, alteraP4 ] = useState(0)
    const[ p5, alteraP5 ] = useState(0)
    const[ p6, alteraP6 ] = useState(0)
    const[ p7, alteraP7 ] = useState(0)
    const[ p8, alteraP8 ] = useState(0)
    const[ p9, alteraP9 ] = useState(0)
    const[ p10, alteraP10 ] = useState(0)
    const[ p11, alteraP11 ] = useState(0)
    const[ p12, alteraP12 ] = useState(0)
    const[ p13, alteraP13 ] = useState(0)
    const[ p14, alteraP14 ] = useState(0)
    const[ p15, alteraP15 ] = useState(0)



    return(
        <div>
            <h1>Quiz Conhecimentos Gerais</h1>
            <br/>
            <hr/>
            <h2>Quem foi a primeira pessoa a viajar no Espaço?</h2>
            <label><input name="p1" type="radio" onChange={()=> alteraP1(1)}/>Yuri Gagarin</label>
            <label><input name="p1" type="radio" />A cadela Laika</label>
            <label><input name="p1" type="radio" />Neil Armstrong</label>
            <label><input name="p1" type="radio" />Marcos Pontes</label>
            <label><input name="p1" type="radio" />Buzz Aldrin</label>




        </div>
    )


}