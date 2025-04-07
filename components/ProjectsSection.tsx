export default function ProjectsSection() {
    return (
      <section id="projects" className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Project One</h3>
            <p>A simple project description goes here.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
            <p>Another project description goes here.</p>
          </div>
        </div>
      </section> 
    );
  }
  