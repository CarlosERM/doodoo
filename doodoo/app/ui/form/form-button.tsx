export default function FormButton({ name }: { name: string }) {
  return (
    <input
      className="py-2 md:py-3 bg-c6 rounded-xl hover:bg-c1 cursor-pointer font-medium text-xl md:text-3xl mt-5"
      type="submit"
      value={name}
    />
  );
}
