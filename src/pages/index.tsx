import Topo from "../components/Topo";
import Card from "../components/Card";
// import { Geist, Geist_Mono } from "next/font/google";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const nome = "Bruna Marciano";
const idade = 32;
const curso = "Curso: React NextJS";

const retornarIdade = () => idade;

export default function Home() {
  function retornarNome() {
    return nome;
  }

  return (
    <main>
      <Topo />
      <div className="bg-gray-400  flex flex-col items-center justify-center text-2xl min-h-[600px] w-[100%]">
        <div style={{ color: "gray" }}>Hello World</div>
        <div>Curso de React Next.js</div>
        <div>
          Meu nome é {retornarNome()} tenho: {retornarIdade()} anos.
        </div>
      </div>
      <div style={teste}>Estilo em Objeto</div>
    </main>
  );
}

const teste = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#00f",
  backgroundColor: "#eee",
  fontSize: "20px",
  padding: "10px",
  fontWeight: "bold",
};
