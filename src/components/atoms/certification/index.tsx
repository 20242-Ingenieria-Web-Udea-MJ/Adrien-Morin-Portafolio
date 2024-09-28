// ----------------------------------------------------------------------------------
// This atom is a type of card that will be used to show a certification that I have.
// ----------------------------------------------------------------------------------

import {Icon} from "@iconify/react";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

interface CertificationProps {
    certificationName: string;
    description: string;
}

export function Certification({ certificationName, description }: CertificationProps) {
    return (
        <Card className="flex items-center w-full">
            <Icon icon={"mdi:aws"} className={"w-16 h-16 lg:ml-8 ml-4 text-secondary"} />
            <CardHeader className="flex flex-col mt-0 lg:ml-4 w-3/4">
                <CardTitle className={"text-lg"}>Certified {certificationName}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
        </Card>
    )
}
