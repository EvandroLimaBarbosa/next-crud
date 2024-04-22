interface InputProps {
     className?: string;
     tipo?: 'text' | 'number'
     texto: string
     valor: any
     somenteLeitura?: boolean
     valorMudou?: (valor: any) => void
}

export default function Input(props: InputProps) {
     return (
          <div className={`
               ${props.className}
          `}>
               <label className="flex flex-col">
                    {props.texto}
                    <input
                         // placeholder="Nome"
                         type={props.tipo ?? 'text'}
                         value={props.valor}
                         readOnly={props.somenteLeitura}
                         onChange={e => props.valorMudou?.(e.target.value)}
                         className={`
                              border border-blue-500 rounded-md
                              focus:outline-none bg-gray-100
                              ${props.somenteLeitura ? '' : 'focus:bg-white'}
                              px-4 py-2 mt-4
                         `}
                    />
               </label>
          </div>
     )
}