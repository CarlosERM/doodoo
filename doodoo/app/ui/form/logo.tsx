import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";

export default function Logo() {
  return (
    <Link className="absolute left-5" href="/#">
      <Image className="sm:w-48	my-6" src={logo} alt="Doodoo logo" />
    </Link>
  );
}
