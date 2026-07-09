export default function FormInput({
  label,
  type,
  id,
  placeholder,
}: {
  label: string;
  type: string;
  id: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-1.5 mb-4">
      <label
        htmlFor={id}
        className="text-sm font-semibold text-secondary font-body"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-main border border-border-color text-secondary font-body text-sm placeholder:text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
      />
    </div>
  );
}
