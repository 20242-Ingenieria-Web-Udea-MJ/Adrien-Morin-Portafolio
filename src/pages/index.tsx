import About from "@/components/organisms/about";
import Links from "@/components/organisms/links";
import Header from "@/components/molecules/header";
import Body from "@/components/organisms/body";

export default function Home() {
  return (
      <main className="flex w-screen">
        <div className="fixed w-[20%] top-0 left-0">
          <About />
        </div>
        <div className="w-[75%] bg-gray-100 pr-10 pl-10 ml-[20%]">
            <Header/>
            <Body />
        </div>
        <div className="fixed w-[5%] h-screen top-0 right-0">
            <Links />
        </div>
      </main>
  );
}
