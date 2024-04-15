import Link from "next/link";
import Link from "next/link";

export default function Page({ params }) {
  return (
    <div>
      <div>My Post: {params.slug}</div>
      <Link href="/">Back to home</Link>
    </div>
  );
}
