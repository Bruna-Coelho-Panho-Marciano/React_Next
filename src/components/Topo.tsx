import Image from "next/image";
import Link from "next/link";

const nome = "Bruna Marciano";
const curso = "Curso: React NextJS";

export default function Topo() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center bg-zinc-200 min-h-[60px] p-2 text-xl gap-6 ">
        <Image src="/next.svg" alt="Logo Next.js" width={100} height={24} />
        <div className="text-red-600 font-bold">{nome}</div>
        <div className="font-bold">{curso}</div>
      </div>

      <nav className="flex  justify-between items-center gap-6  p-4  bg-gray-500 text-white">
        <Link href={"/"}>Home</Link>
        <Link
          href={{
            pathname: "/produtos/produtos",
            query: { nome: "Bruna", curso: "React NextJS" },
          }}
        >
          Produtos
        </Link>
        <Link href={"/teste/Teste"}>Teste</Link>
        <Link href={"/usestate/Usestate"}>UseState</Link>
        <Link href={"/useeffect/Useeffect"}>UseEffect</Link>
        <Link href={"/inputs/Inputs"}>Inputs</Link>
        <Link href={"/filtragem/Filtragem"}>Filtragem</Link>
      </nav>
    </div>
  );
}
