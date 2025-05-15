export default function ProjectGrid({ title, projects, isArt }) {
  return (
    <section className={isArt ? 'arts' : 'projects'}>
      <h2>{title}</h2>
      <div className={isArt ? 'art-grid' : 'project-grid'}>
        {projects.map((proj, idx) => (
          <div className={isArt ? 'art-card' : 'project-card'} key={idx}>
            <img src={proj.image} alt={proj.alt} />
            {!isArt && proj.title && <div className="card-title">{proj.title}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
