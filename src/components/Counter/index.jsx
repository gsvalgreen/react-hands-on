// O componente counter é composto por todo o diretório src/components/Counter

import { useState } from "react";

function Counter() {
    // useState é um hook do React que permite adicionar estado a um componente funcional
    // Ele retorna um array com dois elementos: o valor atual do estado e uma função para atualizar esse valor
    const [count, setCount] = useState(0);

    // não se altera o estado diretamente, mas sim usando a função de atualização (setCount) para garantir que o React saiba quando o estado mudou e possa re-renderizar o componente corretamente
    // portanto -> count = 1 --- INCORRETO
    // setCount(1) --- CORRETO


    // Botão para incrementar +1 no contador ao clicar
    return (
        // React só pode retornar um elemento JSX, então precisamos envolver tudo em uma div
        // <div>
        //     <h1>Contador: {count}</h1>
        //     <button>Incrementar</button>
        // </div>
        // Uma alternativa para envolver tudo sem criar uma div extra é usar um Fragment, que é representado por <> e </>.
        // Isso evita a criação de um elemento extra no DOM, mantendo a estrutura mais limpa.
        <>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <h2>Contador: {count}</h2>
        </>
    )
}

export default Counter;