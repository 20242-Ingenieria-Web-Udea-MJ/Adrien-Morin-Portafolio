import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

const imageLink: string = "https://media.licdn.com/dms/image/v2/D4E03AQGWrxgREsxYeA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700753017283?e=1732752000&v=beta&t=vwp0tjkAJUp2SiuNXKt7ryKjl_w4mDI5tOTMflMKBh4";

interface ProfileProps {
    name: string;
    description: string;
}

export default function Profile({ name, description }: ProfileProps) {
    return (
        <div className="flex flex-col items-center">
            <Avatar className="w-40 h-40">
                <AvatarImage src={imageLink} alt="@shadcn"/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-4">
                {name}
            </h3>
            <h2 className="text-xl text-gray-500 mt-2">
                {description}
            </h2>
        </div>
    );
}
