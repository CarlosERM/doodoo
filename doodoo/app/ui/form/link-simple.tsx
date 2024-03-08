import Link from "next/link";

export default function LinkSimple({
  name,
  route,
}: {
  name: string;
  route: string;
}) {
  return (
    <Link
      className="text-sm font-medium text-c4 hover:text-c3 hover:underline"
      href={route}
    >
      {name}
    </Link>
  );
}
