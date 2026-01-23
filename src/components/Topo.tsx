import Image from "next/image";

const nome = "Bruna Marciano";
const curso = "Curso: React NextJS";

export default function Topo() {
  return (
    <div className="flex justify-between items-center bg-zinc-200 h-[60px] p-2 text-2xl">
      <Image src="/next.svg" alt="Logo Next.js" width={100} height={24} />
      <div className="subtitulo">{nome}</div>
      <div>{curso}</div>
    </div>
  );
}
