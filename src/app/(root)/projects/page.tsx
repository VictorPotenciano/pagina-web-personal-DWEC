import Projects from "@/components/Projects/ProjectList";
import { projectsData } from "@/data/projectsData";


const page = () => {
    return (
        <div>
            <Projects projects={projectsData}/>
        </div>
    );
}

export default page;