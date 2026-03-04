// Começa com letra maiúscula por ser um componente React
// Criar um componente React é o mesmo que criar uma função JavaScript

// Usando destructuring vamos pegar uma propriedade chamada "tools" do objeto de props
function App({ tools = "React"}) {
    // JSX: JavaScript + XML
    // O componente precisa retornar um elemento JSX, que é o que será renderizado na tela
    // return <h1>Bem-vindo ao {props.tools}!</h1>
    return <h1>Bem-vindo ao {tools}!</h1>
}

// Quando exportamos um componente, podemos importá-lo em outros arquivos para usá-lo
// O export default é para designar um componente padrão/principal
export default App;