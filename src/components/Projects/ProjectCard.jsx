import "./ProjectCardmodule.css";
export const ProjectCard = ( {project} ) => {
  console.log("project in ProjectCard", project);
  return (
    <div className="container">
      <img
        src={project.imageSrc}
        alt={`Image of ${project.title}`}
        className="image"
      />
      <h3 className="title">{project.title}</h3>
      <p className="description">{project.description}</p>
      <ul className="skills">
        {project.skills.map((skill, id) => {
          return (
            <li key={id} className="skill">
              {skill}
            </li>
          );
        })}
      </ul>
      <div className="links">
        <a href={project.source} className="link">
          <div className="links_source">
            Source
          </div>
        </a>
      </div>
    </div>
  );
};
