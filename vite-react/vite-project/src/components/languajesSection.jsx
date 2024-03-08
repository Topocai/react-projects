import './componentsStyles/languajesSection.css';

export function LanguajeCard({ children, language="NodeJS", iconWidth="40%" }) {
    const icons = {
        "NodeJS": "/nodeJSIcon.svg",
        "Javascript": "/javascriptIcon.svg",
        "Html": "/htmlIcon.svg",
        "Css": "/cssIcon.svg",
        "Vite": "/viteJSIcon.svg",
        "React": "/reactIcon.svg",
        "Git": "/gitIcon.svg",
        "Github": "/gitHubIcon.svg"
    };

    return (
        <article className="languajeCard" >
            <img src={icons[language]} alt={language} width={iconWidth}/>
            {children}
        </article>
    )
}

export function LanguajesSection({ 
    languajes = [["NodeJS", <h3>Heading 3</h3>], ["Github", <h3>Heading 3</h3>], ["Vite", <h3>Heading 3</h3>]] ,
    }) 
{
    return (
        <section className='languajes-section'>
            <h2>Tengo conocimientos de lo siguiente</h2>
            <div className="languajes">
                {languajes.map((languaje) => <LanguajeCard key={languaje[0]} language={languaje[0]}>{languaje[1]}</LanguajeCard>)}
            </div>
        </section>
    )
}