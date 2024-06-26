import Cliente from "@/core/Cliente";
import Input from "./Input";
import { useState } from "react";
import Botao from "./Botao";

interface FormularioProps {
     cliente: Cliente;
     clienteMudou?: (cliente: Cliente) => void;
     cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
     const id = props.cliente?.id ?? null;
     const [nome, setNome] = useState(props.cliente?.nome ?? '')
     const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
     return (
          <div>
               {id ? (
                    <Input
                         somenteLeitura
                         texto="Código"
                         valor={id}
                         className="mb-2"
                    />
               ) : false}
               <Input texto="Nome" valor={nome} valorMudou={setNome} className="mb-2" />
               <Input texto="Idade" tipo="number" valor={idade} valorMudou={setIdade} />
               <div className="flex justify-end mt-6">
                    <Botao className='mr-2' cor="blue"
                         onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                         {id ? "Alterar" : 'Salvar'}
                    </Botao>
                    <Botao onClick={props.cancelado}>Cancelar</Botao>
               </div>
          </div >
     )
}