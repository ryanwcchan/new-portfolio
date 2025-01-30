import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-col justify-center p-10 w-full">
      <div className="flex flex-col justify-center gap-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold dark:text-white">Projects</h2>
        <div className="flex flex-col justify-center items-center gap-6 flex-wrap">
          <ProjectCard
            title={"Project 1"}
            img={
              "https://bunny-wp-pullzone-mmjnamrbj3.b-cdn.net/wp-content/uploads/placeholder-14.png"
            }
          />
          <ProjectCard
            title={"Project 1"}
            img={
              "https://bunny-wp-pullzone-mmjnamrbj3.b-cdn.net/wp-content/uploads/placeholder-14.png"
            }
            right={true}
          />
          <ProjectCard
            title={"Project 1"}
            img={
              "https://bunny-wp-pullzone-mmjnamrbj3.b-cdn.net/wp-content/uploads/placeholder-14.png"
            }
          />
        </div>
      </div>
    </div>
  );
}
