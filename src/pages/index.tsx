import Layout from "@/components/Layout";

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 to-black
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <span className="text-3xl">
          Conteudo
        </span>
      </Layout>
    </div>
  )
}