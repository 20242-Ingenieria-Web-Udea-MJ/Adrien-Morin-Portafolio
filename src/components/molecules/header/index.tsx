import { Button } from "@/components/ui/button"
import {Icon} from "@iconify/react";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const buttonLink: string = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1GVQuM7XCeJb4nQBAPjYWkHBredj4VzcR6lFAogGqlK4Xf2e60J5FfccbNZex1uusvO74B4teV";

export default function Header() {
    return (
        <div className="w-full p-12 bg-white">
            <h1 className="text-4xl font-bold text-primary">
                {"I'm Adrien Morin,"}
            </h1>
            <h1 className="text-4xl font-bold mt-2">
                Seeking a <span className={"text-secondary"}>Cloud, Information Security or Data</span> Internship for
                February 2025
            </h1>
            <p className="text-lg mt-4">As an INSA Lyon student in Computer Science, I am looking for a <span
                className={"text-secondary"}>6-month project</span>.</p>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="secondary" className={"mt-6 h-12"}>
                        <Icon icon={"akar-icons:schedule"} className={"mr-2"}/>
                        Schedule a meeting
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-white min-w-[1000px] min-h-[600px]">
                    <DialogHeader>
                        <DialogTitle>Schedule a meeting</DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                        <iframe
                            src={buttonLink}
                            width={"950px"}
                            height={"500px"}
                            allowFullScreen
                            title="Embedded Page"
                        ></iframe>
                    </div>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}