import Image from "next/image";

export default function Home() {
  return (
    <div className="text-2xl font-bold">
      Facebook - Connect to world!
      <Image src="/image.png" alt="" className="mx-auto" width={250} height={250}/>
    </div>
  );
}
