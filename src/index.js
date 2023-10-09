import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))
const name = ReactDOM.createRoot(document.getElementById('name'))
const information = ReactDOM.createRoot(document.getElementById('information'))
const django = ReactDOM.createRoot(document.getElementById('django'))
const react_div = ReactDOM.createRoot(document.getElementById('react_div'))

function Image() {
    return <div>
        <img class="picture" src="/foto.jpg" width='90%'alt="Foto de mariana" />
    </div>
}

function Name() {
    return <div>
        <h1>Mariana Ortiz</h1>
    </div>
}

function Information() {
    return <div>
        <h3>Estudiante de analisis y desarrollo de software</h3>
        <p>Apasionada por el aprendizaje, el desarrollo de software y a los nuevos retos.</p>
        <a href="https://github.com/mariana5757">
        <button class="btn btn-primary" >GitHub</button></a>
    </div>
}

function Django() {
    return <div>
        <img src="/django.png" width='50%' height='50%' alt="logo django" />
        <p>Habilidades en el framework Django</p>
    </div>
}

function ReactLogo(){
    return <div>
        <img src="/react.png" width='50%' height='50%'  alt="logo react" />
        <p>Conocimiento básico en React</p>
    </div>
}

root.render(
    <Image />
)

name.render(
    <Name />
)

information.render(
    <Information />
)
django.render(
    <Django/>
)
react_div.render(
    <ReactLogo/>
)
