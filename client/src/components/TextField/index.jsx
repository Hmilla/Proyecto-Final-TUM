export default function TextField({
    value,
    onChange,
    placeholder = "Escribe tu tarea",
    className,
    type="text",
    name,
    id
  }) {
    return (
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className={`border w-full px-2 py-3 rounded-l outline-none ${className}`}
        placeholder={placeholder}
        
      />
    );
  }