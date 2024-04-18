"use client";
import React, { useState, useEffect } from "react";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test`);
  return res.json();
}

export default function CsrFetchData() {
  const [data, setData] = useState([]);
  console.log(data);

  const initData = async () => {
    try {
      const { data } = await getData();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initData();
  }, []);
  return (
    <div>
      <h1>Can see Console log in browser because fetch in CSR</h1>
      <div>
        {data.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </div>
    </div>
  );
}
