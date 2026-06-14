import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logoIDS-white.png"
        alt="IDS - Império Dourado Soluções"
        width={180}
        height={60}
        priority
      />
    </Link>
  );
}