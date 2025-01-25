import Skills from "../components/Skills";
import Intro from "../components/Intro";
import ProjectCard from "../components/ProjectCard";
import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center w-full flex-1">
      <Hero />
      <Intro />
      <Skills />
      <div className="flex flex-col justify-center p-10 w-full">
        <div className="flex flex-col justify-center gap-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-white">Projects</h2>
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
      {/* Interests */}
      <div className="flex flex-col justify-center items-center p-10 w-full max-w-6xl">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          possimus dolorum soluta cumque suscipit beatae quos? Nobis, maxime et
          beatae voluptatum, facilis, vero nemo provident voluptatem sunt
          corrupti fugiat! Aut! Consequatur a reprehenderit quibusdam modi!
          Velit eligendi voluptas ea nihil ducimus fugit quod necessitatibus
          quis? Quam ea maxime, odit nulla, ullam sed a accusantium pariatur,
          corrupti quos repudiandae nihil similique. Ex repellat ratione
          expedita qui unde quasi est! Eos optio dolorem cumque cum quidem a
          nobis porro. Quisquam aut ea perspiciatis, iusto veritatis
          voluptatibus, dolorum distinctio dignissimos quas ducimus aperiam.
          Explicabo dolore id suscipit quo facere tempore, autem vitae veritatis
          architecto enim! Tempore, dolore! Nemo sapiente, ad officia maxime
          beatae quia sed, praesentium quis ducimus neque tenetur? Ipsum, iusto
          vitae! Maxime earum accusamus assumenda quae ex suscipit doloribus
          atque ut, odit quas, sunt veritatis inventore quos dignissimos nisi
          quam minima aperiam aspernatur numquam quis eligendi voluptatum
          deleniti facere. Error, esse. Fuga aliquid et iusto sunt molestiae vel
          maiores ipsam labore maxime, commodi quasi, enim aspernatur veniam in
          doloribus explicabo aperiam doloremque officiis deserunt laudantium!
          Repellat quis ipsam officia et magnam! Ab error, alias laudantium sed
          nobis earum illum minima accusamus mollitia hic iusto provident
          similique autem repellat iste saepe! Qui rem autem maxime veniam
          ipsum. Vitae ducimus animi quibusdam sint. Esse quia veritatis, nobis
          rerum recusandae obcaecati iste voluptatum excepturi natus similique
          optio adipisci? Laudantium voluptates, ducimus illo placeat similique
          id recusandae itaque, at asperiores possimus modi! Fuga, accusantium.
          Alias! Nihil rerum cum illo porro excepturi pariatur officiis magnam
          quos sapiente perspiciatis sequi, corporis iusto magni neque omnis
          dolorem sit totam modi, laboriosam error dolore quisquam? Eveniet
          autem aliquid aperiam. Ad repudiandae maiores iste nobis odit odio
          similique atque, provident dicta esse dolorem voluptatem porro
          voluptates cum ipsum dolorum? Aliquid magnam dolore minima veritatis
          quis aliquam asperiores sequi est vitae. Molestiae corporis neque
          temporibus atque quaerat ullam totam quam, repudiandae delectus
          necessitatibus nisi veniam dignissimos voluptates? Dolorem illum
          corrupti, quas at, sint culpa reprehenderit enim hic necessitatibus
          harum, iste ad. Molestiae eaque, blanditiis deleniti fugiat omnis
          repellendus ducimus voluptatibus id nihil. Iusto dignissimos quae in
          nobis beatae, ab debitis voluptatem, voluptates doloremque, placeat
          ipsa excepturi. Cumque corrupti officiis ab animi. Quasi repudiandae
          nemo tempora fuga inventore laborum neque, provident eius est
          perferendis eum, temporibus, velit pariatur molestiae facere accusamus
          quam error maiores sed. Voluptatum placeat est, voluptates dolorum
          eligendi et! Rerum sit sunt voluptate quaerat, maxime suscipit ad
          explicabo deleniti beatae et alias quod eveniet enim distinctio
          commodi vel id, amet nulla dolorum quis debitis? Consequatur fugiat
          ullam repudiandae id! In maxime mollitia at tempore saepe nam impedit
          soluta, quam nulla eaque ratione molestiae repudiandae quidem error
          similique blanditiis excepturi! Nostrum omnis eos ipsa? Nemo illo
          voluptatum saepe? Deleniti, maiores? Ullam sunt necessitatibus, rerum
          cum libero eveniet iste, adipisci fugit nostrum, sapiente ad
          distinctio fuga quas. Non totam illum voluptas quibusdam ipsa magni
          nisi rem maxime asperiores, eos tempore quia. Autem ea sed magnam,
          maxime sint est deserunt temporibus sequi officia! Facilis aut impedit
          nostrum quis veritatis nobis eum rerum. In fuga culpa quia fugit odit
          necessitatibus iure, vitae facere. At sequi saepe vitae omnis ex
          fugiat. Omnis autem iste dolor labore modi eaque recusandae minus
          quidem repellat a dolore quod eum doloremque voluptatem aspernatur,
          maxime reprehenderit. Illum, rem aut! Perferendis fuga et voluptatem
          autem itaque nulla explicabo ullam incidunt magnam laborum quidem quos
          optio minima, dolorum quibusdam, cupiditate doloribus! Nobis quia,
          cupiditate ab unde eaque magnam quo maiores fugit. Magni quisquam
          consequatur accusantium laudantium iure maiores. Perferendis debitis
          tenetur saepe assumenda omnis, eaque asperiores? Labore incidunt omnis
          blanditiis, perspiciatis, molestiae nisi rem reiciendis, praesentium
          eius ducimus minus laudantium necessitatibus!
        </p>
      </div>
    </div>
  );
}
