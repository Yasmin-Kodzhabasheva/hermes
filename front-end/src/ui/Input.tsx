interface InputProps {
  id: string;
  label: string;
  type: "text" | "email" | "password";
  required?: boolean;
  placeholder?: string;
  error?: string;
}

export default function Input({
  id,
  label,
  type,
  required = false,
  placeholder = "",
  error = "",
}: InputProps) {
  return (
    <div>
      <div>
        <label
          htmlFor={id}
          className="mb-1 block text-sm font-semibold text-gray-700"
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          className="w-full border border-gray-300 px-4 py-2 transition-colors focus:border-[#f36d21] focus:ring-1 focus:ring-[#f36d21] focus:outline-none"
        />
      </div>
      <span className="text-red-500">{error}</span>
    </div>
  );
}
