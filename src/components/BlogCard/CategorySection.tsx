export default function CategorySection({
  categoryList,
}: {
  categoryList: string[];
}) {
  return (
    <section className="mt-2 flex items-center gap-2">
      {categoryList.map((i, idx) => (
        <a key={idx} href={"/category/" + i.toLowerCase()} className="category-span">
          {i}
        </a>
      ))}
    </section>
  );
}
