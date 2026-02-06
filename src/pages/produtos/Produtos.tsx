import Card from "@/components/Card";
import Topo from "@/components/Topo";
import { useRouter } from "next/router";

const produtos = [
  {
    id: 1,
    produto: "Mouse",
    valor: 49.99,
    desconto: 10,
    disponivel: true,
  },
  {
    id: 2,
    produto: "Teclado",
    valor: 69.99,
    desconto: 2,
    disponivel: true,
  },
  {
    id: 3,
    produto: "Monitor",
    valor: 459.99,
    desconto: 0,
    disponivel: true,
  },
  {
    id: 4,
    produto: "CPU",
    valor: 1250.0,
    desconto: 150,
    disponivel: true,
  },
  {
    id: 5,
    produto: "Caixa de Som",
    valor: 350.0,
    desconto: 0,
    disponivel: true,
  },
];

function calcularDesconto(valor: number, desconto: number) {
  return valor - desconto;
}

function calcularDesconto2(valor: number, desconto: number) {
  return valor - desconto / 2;
}

export default function ProdutosPagina() {
  const router = useRouter();
  const { nome, curso } = router.query;
  console.log(nome);
  console.log(curso);
  return (
    <div>
      <Topo />
      <div className="flex flex-row justify-center items-center flex-wrap gap-3 p-4">
        {produtos.map((e) => {
          if (e.disponivel) {
            return (
              <Card
                key={e.id}
                produto={e.produto}
                valor={e.valor}
                desconto={e.desconto}
                funcao={calcularDesconto}
              >
                <div>
                  <b>Teste Curso de React NextJS</b>
                </div>
                <div>CFBCursos</div>
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
}
