import React from "react";

async function getData(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test/${slug}`);
  return res.json();
}

export default async function Page({ params }) {
  const data = await getData(params.slug);
  return (
    <div className="flex flex-col px-10 gap-2">
      <div>id : {params.slug}</div>
      <div>name : {data.name}</div>
      <div>username : {data.username}</div>
      <div>email : {data.email}</div>
    </div>
  );
}
