import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-[800px] text-5xl border-b-4 border-b-black">
        <Image alt="Foto de premio" src="/ImagenEjemplo.png" width={1440} height={810}></Image>
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
