import Link from "next/link";

export default function Layout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <div className="flex justify-end fixed bottom-10 w-full">
        <Link href="/">Back to home</Link>
      </div>
      {children}
    </section>
  );
}
