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
      <img class="logo d-none d-sm-block" src="/django.png" alt="logo django" />
      <p>Habilidades en el framework Django</p>
    </>
  );
}

export function ReactLogo() {
  return (
    <>
      <img class="logo d-none d-sm-block" src="/react.png" alt="logo react" />
      <p>Conocimiento básico en React</p>
    </>
  );
}

export function Skills() {
  return (
    <>
      <ul class="ul">
        <li>
          <h4>Cualidades que me representan: </h4>
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

export function Phrase() {
  return (
    <>
      <h2>
        Trabajar duro te llevará a la cima, disfrutar el camino te llevará más
        lejos.
      </h2>
    </>
  );
}

export function Biography() {
  return (
    <>
      <h4>Sobre mí:</h4>
      <p>
        Nací en Roldanillo, Valle, en 1998, en el seno de una familia unida y
        humilde. Siempre he sentido una profunda pasión por el aprendizaje y una
        inquebrantable curiosidad por el mundo que me rodea. En la actualidad,
        me esfuerzo incansablemente para alcanzar mis sueños y superar los
        desafíos que se presentan en mi día a día.
      </p>
    </>
  );
}
