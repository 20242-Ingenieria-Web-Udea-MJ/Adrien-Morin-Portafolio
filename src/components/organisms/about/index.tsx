import InformationTable from "@/components/molecules/informationTable";
import Profile from "@/components/molecules/profile";
import {Separator} from "@/components/ui/separator";
import ProgressionTable from "@/components/molecules/progressionTable";
import SkillsList from "@/components/molecules/skillsList";

export default function About() {
    return (
        <div className="flex flex-col items-center w-full mx-auto gap-6 text-sm pr-6 pl-6 bg-white h-screen overflow-auto" >
            <div className={"h-60 sticky top-0 left-0 z-40 w-full mb-10"}>
                <Profile
                    name="Adrien Morin"
                    description="Computer Engineer"
                />
            </div>
            <div className={"w-full"}>
                <Separator className="my-2" />
                <InformationTable
                    information={[
                        { label: "Phone number", content: "+33 7 81 25 23 06" },
                        { label: "Mail", content: "morinadrien71@gmail.com" },
                        { label: "Location", content: "Lyon, France" },
                        { label: "Licence", content: "Driving licence & car" },]}
                />
                <Separator className="my-2" />
                <ProgressionTable title={"Languages"} information={[
                    { label: "French", progression: 100, progression_label: "Native" },
                    { label: "English", progression: 80, progression_label: "C1" },
                    { label: "Spanish", progression: 75, progression_label: "B2/C1" },
                ]} />
                <Separator className="my-2" />
                <ProgressionTable title={"Programming languages"} information={[
                    { label: "HTML", progression: 100, progression_label: "Advanced" },
                    { label: "CSS", progression: 90, progression_label: "Advanced" },
                    { label: "Javascript/Typescript", progression: 65, progression_label: "Confirmed" },
                    { label: "Java", progression: 75, progression_label: "Advanced" },
                    { label: "C/C++", progression: 50, progression_label: "Intermediate" },
                    { label: "SQL", progression: 75, progression_label: "Advanced" },
                ]} />
                <Separator className="my-2" />
                <SkillsList title={"Extra Skills"} list={[
                    "Git, Github, Gitlab, CI/CD",
                    "AWS, Azure",
                    "Docker, Terraform",
                    "Agile methodology, SCRUM, Kanban, JIRA",
                    "OWASP SAMM, ISO 27001, GDPR",
                    "Angular, Vue.js, Express.js, AdonisJS, Spring Boot"
                ]} />
                <Separator className="my-2" />
            </div>
        </div>
    );
}
