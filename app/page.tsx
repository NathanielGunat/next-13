import Link from "next/link";

export default function Home() {
  return (
    <>
      HI,IM NATHAN <Link href="/about">about</Link>
      <Link href="/contact">contect me</Link>
      <Link href="/run">run</Link>
    </>
  );
}
