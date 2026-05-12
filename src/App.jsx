import { motion } from "framer-motion"
function App() {
  return (
    <div className="bg-black text-white">

                  {/* Hero Section */}
      <section className="min-h-screen flex justify-center px-6 py-20">

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-blue-500">Sujal</span>
            </h1>

            <p className="text-2xl text-gray-300 mt-6">
              Crafting Intelligent Software Experiences
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mt-6">
              Software developer passionate about AI/ML, real-time systems, and building modern digital experiences.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap justify-center md:justify-start">

              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl text-lg font-medium transition">
                View Projects
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                className="border border-gray-600 hover:border-white px-6 py-3 rounded-xl text-lg font-medium transition"
              >
                Resume
              </a>
              <a
  href="https://github.com/SujalMRC"
  target="_blank"
  className="border border-gray-600 hover:border-white px-6 py-3 rounded-xl text-lg font-medium transition"
>
  GitHub
</a>

<a
  href="https://linkedin.com/in/sujal-chinchmalatpure-58a883269"
  target="_blank"
  className="border border-gray-600 hover:border-white px-6 py-3 rounded-xl text-lg font-medium transition"
>
  LinkedIn
</a>
            

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <img
              src="/profile.jpg"
              alt="Sujal"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl border border-zinc-800 shadow-2xl hover:scale-105 transition duration-500"          />
          </motion.div>

        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-zinc-950">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500 transition">

              <h3 className="text-2xl font-semibold">
                Forest Fire Detection Using ML
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Machine learning based system for predicting forest fire risks using environmental parameters and real-time data analysis.
              </p>

              <div className="flex gap-3 mt-6 flex-wrap">

                <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                  Python
                </span>

                <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                  TensorFlow
                </span>

                <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                  ML
                </span>

              </div>

            </div>

            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500 transition">

              <h3 className="text-2xl font-semibold">
                Banking Management System
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Console-based banking application with authentication, transaction tracking, and secure file handling.
              </p>

              <div className="flex gap-3 mt-6 flex-wrap">

                <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                  C++
                </span>

                <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                  OOP
                </span>

                <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                  File Handling
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            Skills
          </h2>

          <div className="flex flex-wrap gap-4">

            <span className="bg-zinc-900 px-5 py-3 rounded-xl border border-zinc-800">
              C++
            </span>

            <span className="bg-zinc-900 px-5 py-3 rounded-xl border border-zinc-800">
              Java
            </span>

            <span className="bg-zinc-900 px-5 py-3 rounded-xl border border-zinc-800">
              Python
            </span>

            <span className="bg-zinc-900 px-5 py-3 rounded-xl border border-zinc-800">
              SQL
            </span>

            <span className="bg-zinc-900 px-5 py-3 rounded-xl border border-zinc-800">
              Object-Oriented Programming
            </span>

            <span className="bg-zinc-900 px-5 py-3 rounded-xl border border-zinc-800">
              Machine Learning
            </span>

            <span className="bg-zinc-900 px-5 py-3 rounded-xl border border-zinc-800">
              Problem Solving
            </span>

            <span className="bg-zinc-900 px-5 py-3 rounded-xl border border-zinc-800">
              Git & GitHub
            </span>

            <span className="bg-zinc-900 px-5 py-3 rounded-xl border border-zinc-800">
              Data Structures & Algorithms
            </span>

          </div>

        </div>

      </section>
          {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-zinc-950">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Contact
          </h2>

          <p className="text-gray-400 text-lg">
            Interested in collaborating or discussing opportunities?
          </p>

          <div className="mt-10 space-y-4">

            <p className="text-white text-lg">
              📧 sujalmrc@gmail.com
            </p>

            <p className="text-white text-lg">
              📍 Pune, Maharashtra
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}

export default App