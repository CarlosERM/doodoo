export default function Input({
  label,
  type,
}: {
  label: string;
  type: string;
}) {
  return (
    <>
      <label htmlFor={type} className="block text-base font-medium mb-1">
        {label}
      </label>
      <input className="p-2.5 rounded-lg bg-c2 mb-3" type={type} name={type} />
    </>
  );
}
