interface AboutProps {
    name: string;
    description: string;
}

export default function About({ name, description }: AboutProps) {
    return (
        <div className="flex flex-col items-center">
            about
        </div>
    );
}
