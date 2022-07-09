import React from 'react';

// import { Container } from './styles';

const Promisses: React.FC = () => {

    const motoristaAceitou = true;

    const promessa = new Promise((resolve, reject) => {
        if (!motoristaAceitou) {
            resolve("Motorista aceitou a corrida");
        } else {
            reject("Motorista rejeitou");
        }
    });

    promessa
    .then((sucesso) => console.log(sucesso))
    .catch((erro)=> console.log(erro))
    .finally(()=> console.log("Acabou"))
    
return (
        <div>
            <h1>Promisses</h1>
        </div>
    );
}

export default Promisses;