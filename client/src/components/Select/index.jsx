export default function Select({ title, value, onChange, items, className }) {
    return (
      <div className={className}>
        <label htmlFor="select" className="block text-sm font-semibold text-gray-700 mb-1">
          Selecciona {title}
        </label>
        <select
          id="selectClass"
          value={value}
          onChange={onChange}
          className="w-full border rounded-md p-2 bg-blue-100 text-gray-800 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {items.map((item) => (
            <option key={item} value={item} className="text-gray-800">
              {item}
            </option>
          ))}
        </select>
      </div>
    );
  }
  