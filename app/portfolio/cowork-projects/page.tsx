import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import projectsData from "@/data/projects/cowork-projects.json";

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tools: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  screenshots: string[];
  outcome: string;
}

const projects = projectsData as Project[];

export const metadata = {
  title: "Cowork Projects — ac-ai-agent",
  description: "Collaborative AI projects built alongside clients and partner teams.",
};

export default function CoworkProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col">
      <PageHeader backLabel="← home" backHref="/" />
      <div className="h-10 flex-shrink-0" />

      <section className="border-b border-white/5 px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-violet-400 tracking-widest uppercase mb-2">Portfolio</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Cowork Projects</h1>
          <p className="text-sm text-neutral-400 mt-2 max-w-xl leading-relaxed">
            Collaborative AI projects built alongside clients and partner teams — combining domain expertise with applied AI engineering.
          </p>
        </div>
      </section>

      <section className="px-6 py-10 flex-1">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } rounded-xl overflow-hidden border border-white/5 bg-neutral-900`}
            >
              <div className="md:w-[45%] min-h-[220px] relative bg-neutral-800 flex items-center justify-center">
                {project.screenshots.length > 0 ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.screenshots[0]} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-violet-900/20 to-neutral-800 p-6">
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="text-[10px] font-mono bg-white/5 border border-white/10 text-neutral-400 px-2.5 py-0.5 rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <p className="text-[10px] font-mono text-neutral-600">screenshot coming soon</p>
                  </div>
                )}
              </div>
              <div className="md:w-[55%] p-7 flex flex-col justify-center gap-4">
                <div>
                  <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-1">Cowork Projects</p>
                  <h2 className="text-xl font-bold text-white">{project.title}</h2>
                  <p className="text-sm text-violet-400 mt-1">{project.tagline}</p>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span key={tool} className="text-[10px] font-mono bg-white/5 border border-white/[0.07] text-neutral-500 px-2 py-0.5 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
                {project.outcome && (
                  <div className="border-l-2 border-violet-500/40 pl-3">
                    <p className="text-[11px] text-neutral-500 font-mono leading-relaxed">{project.outcome}</p>
                  </div>
                )}
                <div className="flex gap-2 flex-wrap">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="text-xs font-mono text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-full transition-colors">
                      GitHub →
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="text-xs font-mono bg-white text-neutral-900 px-3 py-1.5 rounded-full hover:bg-white/90 transition-colors">
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="border border-dashed border-white/10 rounded-xl p-10 flex items-center justify-center">
            <p className="text-xs font-mono text-neutral-700">Projects coming soon</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
