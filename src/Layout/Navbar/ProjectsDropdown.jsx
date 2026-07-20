import { Link } from "react-router-dom";

const ProjectsDropdown = ({ projects }) => {
  return (
    <div className="group relative">
      <button className="font-medium hover:text-violet-600 transition">
        Projects ▾
      </button>

      <div
        className="
          invisible
          absolute
          right-0
          top-10
          w-56
          rounded-xl
          border
          bg-white
          p-2
          opacity-0
          shadow-xl
          transition-all
          group-hover:visible
          group-hover:opacity-100
        "
      >
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.path}
            className="block rounded-lg px-4 py-2 hover:bg-violet-50"
          >
            {project.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsDropdown;
