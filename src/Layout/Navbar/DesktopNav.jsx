import { NavLink } from "react-router-dom";
import { projects } from "@/Data/projects";
import ProjectsDropdown from "./ProjectsDropdown";

const DesktopNav = () => {
  const visible = projects.slice(0, 4);
  const hidden = projects.slice(4);

  return (
    <div className="hidden items-center gap-8 lg:flex">
      {visible.map((project) => (
        <NavLink
          key={project.id}
          to={project.path}
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-violet-600"
              : "font-medium hover:text-violet-600 transition"
          }
        >
          {project.title}
        </NavLink>
      ))}

      <ProjectsDropdown projects={hidden} />
    </div>
  );
};

export default DesktopNav;
