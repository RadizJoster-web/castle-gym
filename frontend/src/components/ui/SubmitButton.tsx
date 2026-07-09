export default function SubmitButton({ label }: { label: string }) {
  return (
    <button
      type="submit"
      className="w-full px-6 py-3 mt-4 rounded-full font-body text-sm font-semibold transition-all duration-300 bg-primary text-main shadow-lg shadow-primary/20 hover:opacity-90"
    >
      {label}
    </button>
  );
}
