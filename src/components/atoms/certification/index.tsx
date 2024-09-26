import {Icon} from "@iconify/react";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

interface CertificationProps {
    certificationName: string;
    description: string;
}

export function Certification({ certificationName, description }: CertificationProps) {
    return (
        <Card className="flex items-center w-full">
            <Icon icon={"mdi:aws"} className={"w-16 h-16 ml-8 text-secondary"} />
            <CardHeader className="flex flex-col mt-0 ml-4">
                <CardTitle className={"text-lg text-center"}>Certified {certificationName}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
        </Card>
    )
}
