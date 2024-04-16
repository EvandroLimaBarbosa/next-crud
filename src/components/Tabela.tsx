import Cliente from "@/core/Cliente"
import { IconeApagar, IconeEdicao } from "./Icones"

interface TabelaProps {
     clientes: Cliente[]
     clienteSelecionado?: (cliente: Cliente) => void
     clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {
     const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

     function renderizarCabecalho() {
          return (
               <tr>
                    <th className="text-left p-3">Código</th>
                    <th className="text-left p-3">Nome</th>
                    <th className="text-left p-3">Idade</th>
                    {exibirAcoes ? <th className="text-center p-3">Ações</th> : false}
               </tr>
          )
     }

     function renderizarDados() {
          return props.clientes?.map((cliente, i) => {
               return (
                    <tr key={cliente.id}
                         className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}`}>
                         <td className="text-left p-3">{cliente.id}</td>
                         <td className="text-left p-3">{cliente.nome}</td>
                         <td className="text-left p-3">{cliente.idade}</td>
                         {exibirAcoes ? renderizarAcoes(cliente) : false}
                    </tr>
               )
          })
     }

     function renderizarAcoes(cliente: Cliente) {
          return (
               <td className="flex justify-center items-center">
                    {props.clienteSelecionado ? (
                         <button
                              onClick={() => props.clienteSelecionado?.(cliente)} type="button"
                              className={`
                                   text-green-600 rounded-full p-2 m-1
                                   hover:bg-blue-50
                         `}>
                              {IconeEdicao}
                         </button>
                    ) : false
                    }
                    {props.clienteExcluido ? (
                         <button
                              onClick={() => props.clienteExcluido?.(cliente)}
                              type="button"
                              className={`
                                   text-red-500 rounded-full p-2 m-1
                                   hover:bg-blue-50
                         `}>
                              {IconeApagar}
                         </button>
                    ) : false
                    }
               </td>
          )
     }
     return (
          <table className="w-full rounded-xl overflow-hidden">
               <thead className={`
                    text-gray-100
                    bg-gradient-to-r from-blue-800 via-blue-900 to-sky-950
               `}>
                    {renderizarCabecalho()}
               </thead>
               <tbody>
                    {renderizarDados()}
               </tbody>
          </table>
     )
}