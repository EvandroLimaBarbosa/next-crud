import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log('Selecionou: ' + cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log('Excluiu: ' + cliente.nome)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-sky-950 via-blue-900 to-blue-900
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        </div>
        {/* <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}>
        </Tabela> */}
        <Formulario cliente={clientes[1]}/>
      </Layout>
    </div>
  )
}