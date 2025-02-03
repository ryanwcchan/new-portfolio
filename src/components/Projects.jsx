import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center lg:p-10 p-6 w-full"
    >
      <div className="flex flex-col justify-center gap-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold dark:text-white">Projects</h2>
        <div className="flex flex-col justify-center items-center gap-6 flex-wrap">
          <ProjectCard
            title={"Full-Stack Social Media App - Social Hub"}
            img={"/socialhub-screenshot.png"}
            description={
              "A social media app allowing users to create posts, add likes and comment on posts and follow other users. Built with Next.js, React, Shadcn UI, Tailwind CSS, Node, and PostgreSQL. Users can sign up and log in via Google using Clerk for user authentication. Database management with Prisma ORM, PostgreSQL database hosted on Neon."
            }
            github={"https://github.com/ryanwcchan/social-media-app"}
            link={"https://social-hub-ashen.vercel.app/"}
            icons={["typescript", "react", "nextjs", "tailwind", "postgresql"]}
          />
          <ProjectCard
            title={"Full-Stack Messaging App"}
            img={"/pern-chat-app-screenshot.png"}
            description={
              "A messaging app with user authentication using JWT and a dynamic frontend displaying user profiles and messages. Built with React, Node, Express, and PostgreSQL. Users can sign up, add users, and send messages. Database management with Prisma ORM, PostgreSQL database hosted on Neon. Implemented Socket.io for real-time messaging."
            }
            github={"https://github.com/ryanwcchan/pern-chat-app"}
            link={"https://pern-chat-app-1-6nfn.onrender.com/"}
            icons={["typescript", "react", "nodejs", "tailwind", "postgresql"]}
          />
          <ProjectCard
            title={"E-commerce Shopping Cart App"}
            img={"/shopping-cart-screenshot.png"}
            description={
              "A front-end platform showcasing React development skills and best practices. The app features a responsive home page, a shop page with product cards displaying images, titles, description and prices. Users can view detailed product information, manage their cart with quantity adjustments, and proceed to review and checkout their order."
            }
            github={"https://github.com/ryanwcchan/shopping-cart"}
            link={"https://shopping-cart-ashen-three.vercel.app"}
            icons={["react", "javascript", "css"]}
          />
        </div>
      </div>
    </div>
  );
}
