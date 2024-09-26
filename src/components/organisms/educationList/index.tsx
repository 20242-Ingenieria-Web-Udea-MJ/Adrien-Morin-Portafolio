import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";

interface EducationItemProps {
    leftTitle: string;
    leftLabel: string;
    date: string;
    rightTitle: string;
    description: string;
}

interface EducationListProps {
    list: EducationItemProps[];
}

export function EducationList({ list }: EducationListProps) {
    return (
        <Card className={"bg-white w-full p-12"}>
            {list.map((info, index) => (
                <div key={index}>
                    <div className={"flex w-full justify-between"}>
                        <div className={"w-1/6"}>
                            <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-4">
                                {info.leftTitle}
                            </h2>
                            <div className="flex justify-between items-center gap-2 pt-4">
                                <p className="leading-7 ">
                                    {info.leftLabel}
                                </p>
                                <Badge className={"bg-secondary"}>{info.date}</Badge>
                            </div>
                        </div>
                        <div className={"w-4/6"}>
                            <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-4">
                                {info.rightTitle}
                            </h2>
                            <p className="leading-7 mt-0 w-full [&:not(:first-child)]:mt-4 text-justify">
                                {info.description}
                            </p>
                        </div>
                    </div>
                    {index < list.length - 1 && <Separator className={"mt-8 mb-6"}/>}
                </div>
            ))}
        </Card>

    )
}
