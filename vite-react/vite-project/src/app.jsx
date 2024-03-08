import './components/trash/shape378.jsx';
import { LanguajesSection } from './components/languajesSection.jsx';
import { ProjectsSection } from './components/projectsSection.jsx';
import './app.css'

const languajes = [
  ["NodeJS", <h3>Heading 3</h3>],
  ["Html", <h3>Heading 3</h3>],
  ["Css", <h3>Heading 1</h3>],
  ["Javascript", <h3>Heading 3</h3>],
  ["React", <h3>Heading 3</h3>],
  ["Git", <h3>Heading 3</h3>],
  ["Github", <h3>Heading 3</h3>],
  ["Vite", <h3>Heading 3</h3>]
]

export function App() {
    return (
      <>
        <header>
          <img src="NeonBing.png" alt="" width="20%" />
          <h1>¡Hola! Bienvenido al portfolio web de Topocai</h1>
          <p>Soy un desarrolador independiente que se especializa en JavaScript</p>
        </header>
        <main>
          <LanguajesSection languajes={languajes}/>
          <ProjectsSection />
        </main>
      </>
    );
}