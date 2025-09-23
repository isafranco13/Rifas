import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-[800px] text-5xl border-b-4 border-b-black">
        HERO
      </div>
      <div className="flex justify-center items-center h-[800px] text-5xl border-b-4 border-b-black">
        FEATURED
      </div>
      <div className="flex justify-center items-center h-[800px] text-5xl border-b-4 border-b-black">
        ABOUT
      </div>
    </>

  );
}
