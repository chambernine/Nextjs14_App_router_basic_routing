export async function GET(request, { params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const data = await res.json();

  return Response.json({ data });
}
