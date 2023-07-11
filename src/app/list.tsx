const List = ({ technologies }: { technologies: string[] }) => (
  <ul className="list-disc mt-5">
    {technologies.map(tech => (
      <li key={tech}>{tech}</li>
    ))}
  </ul>
)

export { List };
