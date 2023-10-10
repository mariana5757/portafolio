export function Image() {
  return (
    <div>
      <img class="picture" src="/foto.jpg" width="90%" alt="Foto de mariana" />
    </div>
  );
}

export function Name() {
  return (
    <div>
      <h1>Mariana Ortiz</h1>
    </div>
  );
}

export function Information() {
  return (
    <>
      <h3>Estudiante de analisis y desarrollo de software</h3>
      <p>
        Apasionada por el aprendizaje, el desarrollo de software y a los nuevos
        retos.
      </p>
      <p>Aquí podrás encontrar algunos de mis ejercicios realizados: </p>
      <a href="https://github.com/mariana5757">
        <button class="btn btn-custom">GitHub</button>
      </a>
    </>
  );
}

export function Django() {
  return (
    <>
      <img class="logo" src="/django.png" alt="logo django" />
      <p>Habilidades en el framework Django</p>
    </>
  );
}

export function ReactLogo() {
  return (
    <>
      <img class="logo" src="/react.png" alt="logo react" />
      <p>Conocimiento básico en React</p>
    </>
  );
}

export function Skills() {
  return (
    <>
      <ul>
        <li>
          <h3>Cualidades que me representan: </h3>
        </li>
        <li>Trabajo en equipo</li>
        <li>Proactividad</li>
        <li>Responsabilidad</li>
        <li>Respeto</li>
      </ul>
    </>
  );
}

export function Contact() {
  return (
    <>
      <ul>
        <li>
          <h2>Contacto</h2>
        </li>
        <li>molondono57@gmail.com</li>
      </ul>
    </>
  );
}
