import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col space-y-10 justify-center items-center w-full">
      <h1 className="text-3xl">Projects</h1>
      <div className="flex flex-col gap-4 w-full flex-1">
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
  );
}
