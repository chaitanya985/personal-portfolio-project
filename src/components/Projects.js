export default function Projects() {
  return (
    <section id="projects" className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
      <h2 style={{fontFamily: "Tahoma"}} className="text-4xl font-bold mb-5 border-b-[5px] w-[155px] border-indigo-600 pb-2 text-center align-center mx-auto text-stone-50">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-6 bg-slate-800 flex flex-col justify-center items-center
                      gap-4 shadow transition hover:shadow-xl 
                      hover:scale-[102%] rounded-3xl">
          <div className="w-64 rounded">
            <img src="/images/collegewala.png"
                 alt="Project 1"
                 className="w-full h-full bg-cover rounded"/>
          </div>
          <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
            <h2 className="text-xl text-center text-stone-50">
              COLLEGEWALA
            </h2>
            {<p className="text-stone-50 text-justify">
              <p className="text-stone-50 text-center font-bold">May 2024 - Aug 2024</p><br/>
              Developed a college finder website with Next.js,
              React, Tailwind CSS, PostgreSQL and Edgestore which allows
              administrators to add and manage college profiles.
              Each profile includes the college name, description,
              location, accepted entrance exams, available streams,
              and college type. Users can search for colleges based
              on location, streams, and type, filtering results to
              find suitable options. Detailed information about 
              each college is displayed on dedicated pages. An "Apply Now"
              button redirects users to the respective college's website 
              for application.
            </p>}
            <div className="flex gap-4 justify-center">
              {/* <a href="https://your-demo-url.vercel.app" 
                 className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                Demo
              </a> */}
              <a href="https://github.com/chaitanya985/personal-project-collegewala" 
                 target="_blank"
                 className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition">
                Code
              </a>
              {<a href="https://drive.google.com/file/d/1HsWbeJo7rkgZpjCscGL5XQE9KhEFb3oV/view?usp=sharing" 
                 target="_blank"
                 className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
                Demo
              </a>}
            </div>
          </div>
        </div>
        <div className="p-6 bg-slate-800 flex flex-col justify-center items-center
                      gap-4 shadow transition hover:shadow-xl 
                      hover:scale-[102%] rounded-3xl">
          <div className="w-64 rounded">
            <img src="/images/ulearn.png"
                 alt="Project 1"
                 className="w-full h-full bg-cover rounded"/>
          </div>
          <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
            <h2 className="text-xl text-center text-stone-50">
              U LEARN
            </h2>
            {<p className="text-stone-50 text-justify">
              <p className="text-stone-50 text-center font-bold">Sep 2024 - Nov 2024</p><br/>
              Developed a online course platform with 
              Next.js, Prisma, MongoDB, Tailwind CSS, 
              and TypeScript. It features user authentication 
              via NextAuth.js, enabling secure login and 
              registration. Users can create, manage, and 
              search courses by keyword, including adding 
              video content and notes. All course and user 
              data is stored in a MongoDB database. Users
               can also manage a "cart" to track completed 
               courses, adding and removing items as needed.
            </p>}
            <div className="flex gap-4 justify-center">
              {/* <a href="https://your-demo-url.vercel.app" 
                 className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                Demo
              </a> */}
              <a href="https://github.com/chaitanya985/personal-project-ulearn" 
                 target="_blank"
                 className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition">
                Code
              </a>
              {<a href="https://drive.google.com/file/d/1okgZ-bmMaTqsA0H6yFAGhtUfWIARwAY4/view?usp=drive_link" 
                 target="_blank"
                 className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
                Demo
              </a>}
            </div>
          </div>
        </div>
        <div className="p-6 bg-slate-800 flex flex-col justify-center items-center
                      gap-4 shadow transition hover:shadow-xl 
                      hover:scale-[102%] rounded-3xl">
          <div className="w-64 rounded">
            <img src="/images/sanity store.png"
                 alt="Project 1"
                 className="w-full h-full bg-cover rounded"/>
          </div>
          <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
            <h2 className="text-xl text-center text-stone-50">
              SANITY HUB
            </h2>
            {<p className="text-stone-50 text-justify">
              <p className="text-stone-50 text-center font-bold">Feb 2024 - Apr 2024</p><br/>
              Developed a e-commerce clothing store with React, 
              Next.js 15, TypeScript, Sanity.io, Stripe, and 
              Shadcn UI. It features distinct sections for men's
              , women's, kids', and senior's clothing. Users can
              view detailed product information, including rati
              ngs, prices, and estimated delivery times. The app
              lication supports adding items to a cart and direct
              purchase options with integrated payment processing
              using Stripe payment processing. The Sanity.io is 
              used for content management for the store.
            </p>}
            <div className="flex gap-4 justify-center">
              {/* <a href="https://your-demo-url.vercel.app" 
                 className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                Demo
              </a> */}
              <a href="https://github.com/chaitanya985/personal-project-sanity-hub" 
                 target="_blank"
                 className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition">
                Code
              </a>
              {<a href="https://drive.google.com/file/d/1Nta0vf9TORd68o6fHfqnNV5TGHVhY87K/view?usp=sharing" 
                 target="_blank"
                 className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
                Demo
              </a>}
            </div>
          </div>
        </div>
        <div className="p-6 bg-slate-800 flex flex-col justify-center items-center
                      gap-4 shadow transition hover:shadow-xl 
                      hover:scale-[102%] rounded-3xl">
          <div className="w-64 rounded">
            <img src="/images/portfolio.png"
                 alt="Project 1"
                 className="w-full h-full bg-cover rounded"/>
          </div>
          <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
            <h2 className="text-xl text-center text-stone-50">
              PERSONAL PORTFOLIO
            </h2>
            {<p className="text-stone-50 text-justify">
              <p className="text-stone-50 text-center font-bold">Feb 2023 - Mar 2023</p><br/>
              Implemented a personal portfolio website using React 
              and styled with Tailwind CSS. It showcases my skills,
              experience, projects, and blog posts in a clean and 
              modern design. The responsive layout ensures optimal 
              viewing across various devices. Key features include 
              smooth navigation between sections and a visually 
              appealing presentation of content. The project 
              demonstrates proficiency in front-end development 
              with React and Tailwind CSS
            </p>}
            <div className="flex gap-4 justify-center">
              {/* <a href="https://your-demo-url.vercel.app" 
                 className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                Demo
              </a> */}
              <a href="https://github.com/chaitanya985/personal-portfolio-project" 
                 target="_blank"
                 className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition">
                Code
              </a>
              {<a href="https://drive.google.com/file/d/1BEy9Bh26kkZLQK3UhQe3fFsUhsvCvbz3/view?usp=drive_link" 
                 target="_blank"
                 className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
                Demo
              </a>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
