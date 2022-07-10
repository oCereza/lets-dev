import React, { useState } from 'react';
import axios from "axios";

// import { Container } from './styles';

const AsyncAwait: React.FC = () => {
    const [minhaFotoDePerfil, setMinhaFotoDePerfil] = useState("");

    axios
    .get("https://api.github.com/users/oCereza")
    .then((resposta: any) => { setMinhaFotoDePerfil(resposta.data.avatar_url);
    })
    .catch((erro: any) => { console.log(erro) })
    .finally(() => { console.log("Foi") })

    // const buscarDadosDoGitHub = () => {
    //     return new Promise((resolve, reject) => {


    //     });
    // }

    // async function start(){
    //     const resposta = await chamarUber();
    //     console.log(resposta)
    // }

    // start();

    return (
        <div>
            <img src={minhaFotoDePerfil} alt="ooi" />
        </div>
    );
}

export default AsyncAwait;