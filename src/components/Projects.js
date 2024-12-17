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
              collegewala
            </h2>
            {/* <p className="text-stone-50 text-justify">
              This is a project built on react which tracks your progess in dsa 
              and stores that in the local storage.
            </p> */}
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
              u learn
            </h2>
            {/* <p className="text-stone-50 text-justify">
              This is a project built on react which tracks your progess in dsa 
              and stores that in the local storage.
            </p> */}
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
              sanity hub
            </h2>
            {/* <p className="text-stone-50 text-justify">
              This is a project built on react which tracks your progess in dsa 
              and stores that in the local storage.
            </p> */}
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
              personal portfolio
            </h2>
            {/* <p className="text-stone-50 text-justify">
              This is a project built on react which tracks your progess in dsa 
              and stores that in the local storage.
            </p> */}
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
