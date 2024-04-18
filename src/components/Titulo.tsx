export default function Titulo(props:any){
     return (
          <div className="flex flex-col justify-center">
               <h1 className="px-6 py-4 text-3xl font-medium">
                    {props.children}
               </h1>
               <hr className="border-2 border-blue-800"/>
          </div>
     )
}
