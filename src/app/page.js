import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row gap-10">
      <div>Home</div>
      <Link href="/blog/1/2">Blog 1</Link>
      <Link href="/blog/1/2">Blog 1 id 2</Link>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
