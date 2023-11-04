export default function Button ({text, type="button", className, variant="primary"}){

    const colors ={
        primary: "bg-green-400 border-green-400 text-white",
        secondary: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4 mb-4",
        danger: "bg-red-400 border-red-400 text-white",
        warning: "bg-yellow-400 border-yellow-400 text-black",
        dark: "bg-black border-black text-white",
    }

    return(
        <button type={type} className={`${colors[variant]} px-2 py-3 rounded-r  ${className}`}>
          {text}
        </button>
    )
}