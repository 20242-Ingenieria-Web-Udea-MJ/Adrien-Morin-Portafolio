import RoundedLinkButton from "@/components/atoms/roundedLinkButton";

export default function Links() {
    return (
        <div className="flex flex-col items-center w-full mx-auto gap-6 p-6 text-sm">
            <h2 className={"text-lg font-semibold tracking-tight font-bold mt-4"}>Links</h2>
            <RoundedLinkButton iconName="ri:linkedin-fill" link="https://www.linkedin.com/in/adrienmorin/"/>
            <RoundedLinkButton iconName="ri:github-fill" link="https://github.com/AdrienMorin"/>
        </div>
    );
}
