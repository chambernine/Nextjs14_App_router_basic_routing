import Link from "next/link";
import React from "react";
async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test`);
  return res.json();
}
export default async function page() {
  const { data } = await getData();
  console.log(data);

  return (
    <div>
      List :{" "}
      {data.map((item) => (
        <div key={item.id} className="flex">
          {item.name}
          <Link href={`/example/${item.id}`} className="flex absolute left-60">
            view...
          </Link>
        </div>
      ))}
    </div>
  );
}
