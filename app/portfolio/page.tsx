import Project from "@/lib/types/Project";
import PortfolioData from "@/lib/data/PortfolioData.json";
import ClientSideRoute from "@/lib/components/ClientSideRoute";

export default function Portfolio() {
  return (
    <main className="mx-auto">
      <div className="flex flex-col gap-y-4 pb-16">
        <div>
          <Introduction />
        </div>
        <hr className="border-skin-line" />
        <div>
          <h1 className="text-xl font-semibold capitalize">
            Tell me more about ...
          </h1>
        </div>
        <ProjectPreviews />
      </div>
    </main>
  );
}

const Introduction = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold capitalize">Portfolio</h1>
      <p className="text-md font-medium">Yeaaaaaa man, I create stuff too.</p>
    </div>
  );
};

const ProjectPreviews = () => {
  const projects: Project[] = PortfolioData.projects;

  return (
    <div className="flex flex-col gap-y-4 cursor-pointer">
      {projects.map((element, outerIndex) => {
        return (
          <ClientSideRoute
            route={`/portfolio/${element.title}`}
            key={outerIndex}
          >
            <div className="rounded-md bg-white border-gray-100 border-2 p-5 hover:bg-gray-200 hover:ring-2 ring-gray-200">
              <h1 className="text-lg font-semibold capitalize">
                {element.title.toUpperCase()}
              </h1>
              <p>{element.miniSummary}</p>
              <h2 className="text-sm font-semibold capitalize">
                {element.typeOfProject}
              </h2>
              <div className="flex flex-row gap-x-2 flex-wrap gap-y-2 mt-4">
                {element.tags.map((element, innerIndex) => {
                  return (
                    <p
                      className="bg-gray-300 rounded-full p-2 text-xs font-semibold"
                      key={innerIndex}
                    >
                      {element}
                    </p>
                  );
                })}
              </div>
            </div>
          </ClientSideRoute>
        );
      })}
    </div>
  );
};
