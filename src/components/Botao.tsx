interface BotaoProps {
     cor?: 'green' | 'blue' | 'gray';
     children?: any;
     className?: string;
}

export default function Botao(props: BotaoProps) {
     const cores = {
          green: 'from-green-500 to-green-700',
          blue: 'from-blue-500 to-blue-800',
          gray: 'from-gray-400 to-gray-700',
     };

     const cor = props.cor ? cores[props.cor] : cores['gray'];

     return (
          <button className={`
               bg-gradient-to-r ${cor}
               text-white px-4 py-2 rounded-lg
               ${props.className}
          `} type="button">
               {props.children}
          </button>
     )
}
