export default function Page({ params }) {
  return (
    <div>
      <div>
        slug: {params.slug} id : {params.id}
      </div>
    </div>
  );
}
