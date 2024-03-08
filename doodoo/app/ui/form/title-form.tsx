export default function TitleForm({ name }: { name: string }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">{name}</h2>
  );
}
