import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";

export default function Logo() {
  return (
    <Link className="self-center" href="/#">
      <Image className="w-56 sm:w-64 my-6" src={logo} alt="Doodoo logo" />
    </Link>
  );
}
