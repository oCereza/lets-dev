import React from 'react';

// import { Container } from './styles';

const Callback: React.FC = () => {
    function printaNome(nome: string, callback: () => void) {
        console.log("João")
        callback();
    }

    printaNome("João", () => {
        console.log("Silva")

    })

    return (
        <div>
            <h1>OOI</h1>
        </div>
    );
}

export default Callback;