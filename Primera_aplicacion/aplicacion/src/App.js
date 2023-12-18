
import './App.css';
import './hoja-estilos/Testimonio.css';
import { Testimonio } from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='cont-principal'>
        <h1> Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre='Shawn Wang en Singapur'
          cargo='Ingeniero de Software en Amazon'
          descripcion='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
          imagen='Shawn'
        />
        <Testimonio
          nombre='Sarah Chima en Nigeria'
          cargo='Ingeniera de Software en ChatDesk'
          descripcion='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble'
          imagen='Sarah'
        />
        <Testimonio
          nombre='Emma Bostian en Suecia'
          cargo='Ingeniera de Software en Spotify'
          descripcion='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
          imagen='Emma'
        />
      </div>
    </div>
  );
}
export default App;
