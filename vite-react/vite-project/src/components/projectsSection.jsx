const ProjectArticle = ({ title, description, Thumbnail }) => {
    return (
        <article class="project">
            <Thumbnail />
            <h3>{title}</h3>
            <p>
                {description}
            </p>
        </article>
    )
}

export function ProjectsSection() {
    return (
        <section>
            <h2>Proyectos</h2>
            <ProjectArticle
                title="Proyecto 1"
                description="Descripción del proyecto 1"
                Thumbnail={() => <img src="https://via.placeholder.com/150" alt="" />}
            />
        </section>
    )
}