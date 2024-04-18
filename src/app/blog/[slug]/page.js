async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test`);
  return res.json();
}

export default async function Page({ params }) {
  const data = await getData();

  return (
    <div>
      <div>My Post: {params.slug}</div>
    </div>
  );
}
