import Link from "next/link";

export default function Page({ params }) {
  return (
    <div>
      <div>
        slug: {params.slug} id : {params.id}
      </div>
      <Link href="/">Back to home</Link>
    </div>
  );
}
