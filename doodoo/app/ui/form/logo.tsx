import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";

export default function Logo() {
  return (
    <Link className="self-center w-56" href="/#">
      <Image src={logo} alt="Doodoo logo" />
    </Link>
  );
}
