import Image from "next/image";
import Link from "next/link";

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <Link href="/" className="inline-flex items-center gap-1">
      {/* Logo menorzinho */}
      <Image
        src="/logoIDStower.png"
        alt="IDS — Imperio Dourado Soluções"
        width={size}
        height={size}
        priority
      />

      {/* Texto maior e branco */}
      <span className="font-heading text-6xl text-white leading-none">
        IDS
      </span>
    </Link>
  );
}
