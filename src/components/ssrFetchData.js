async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test`);
  return res.json();
}

export default async function SsrFetchData() {
  const { data } = await getData();
  console.log(data);

  return (
    <div>
      <h1>Console log in browser don't log anythings because fetch in SSR</h1>
      <div>
        {data.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </div>
    </div>
  );
}
