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
              Full Stack Developer Intern
            </h2>
            <h3 className="text-xl text-indigo-400">
              Talentspot Services
            </h3>
            <p className="text-gray-400 text-sm">
              Apr 2023 - Sep 2023
            </p>
          </div>
          <ul className="text-stone-50 list-disc pl-4 space-y-2">
            <li>Successfully implemented a new screen-sharing feature in the video conferencing application, leading to a 15% increase in user satisfaction</li>
            <li>Optimized website navigation, resulting in a 10% increase in user engagement</li>
            <li>Gained knowledge of React.js, Node.js, Express.js, MongoDB, WebSockets and WebRTC</li>
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
              Python Mentor
            </h2>
            <h3 className="text-xl text-indigo-400">
              Exercism.org
            </h3>
            <p className="text-gray-400 text-sm">
              Aug 2024 - Present
            </p>
          </div>
          <ul className="text-stone-50 list-disc pl-4 space-y-2">
            <li>Actively mentoring over 60 aspiring Python developers on Exercism.org platform, guiding them through challenging coding exercises</li>
            <li>Increased their problem-solving skills by an average of 20% and Achieved an 86% satisfaction rating</li>
            <li>Gained reputation above 300 points and completed more than 70 sessions</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
  