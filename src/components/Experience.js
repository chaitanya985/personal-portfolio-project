import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto mt-[200px]">
      <h2 style={{fontFamily: "Tahoma"}} className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] border-indigo-600 pb-2 text-center align-center mx-auto text-stone-50">
        Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          viewport={{ once: false }}
          className="p-6 bg-slate-800 flex flex-col justify-start
                    gap-4 shadow transition hover:shadow-xl 
                    hover:scale-[102%] rounded-3xl"
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl text-stone-50">
              FULL STACK DEVELOPER INTERN
            </h2>
            <h3 className="text-xl text-indigo-400">
              TALENTSPOT SERVICES
            </h3>
            <p className="text-gray-400 text-sm">
              Apr 2023 - Sep 2023
            </p>
          </div>
          <ul className="text-stone-50 list-disc pl-4 space-y-2">
            <li>Contributed to the development of a screen-sharing feature, enhancing user experience and improving satisfaction</li>
            <li>Assisted in optimizing website navigation, leading to a smoother user experience</li>
            <li>Worked with React.js, Node.js, and MongoDB, implementing WebSockets and WebRTC for real-time audio and video communication</li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          viewport={{ once: false }}
          className="p-6 bg-slate-800 flex flex-col justify-start
                    gap-4 shadow transition hover:shadow-xl 
                    hover:scale-[102%] rounded-3xl"
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl text-stone-50">
              PYTHON MENTOR
            </h2>
            <h3 className="text-xl text-indigo-400">
              EXERCISM.ORG
            </h3>
            <p className="text-gray-400 text-sm">
              Aug 2024 - Dec 2024
            </p>
          </div>
          <ul className="text-stone-50 list-disc pl-4 space-y-2">
            <li>Mentored 70+ Python developers on Exercism.org, helping them tackle challenging coding exercises</li>
            <li>Provided detailed feedback and guidance, improving their problem-solving abilities and coding efficiency</li>
            <li>Achieved an 86% satisfaction rating and earned 300+ reputation points through active mentorship</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
  