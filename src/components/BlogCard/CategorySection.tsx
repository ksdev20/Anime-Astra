import '../../styles/components/individuals/category-section.css';

export default function CategorySection({
  categoryList,
}: {
  categoryList: string[];
}) {
  const getLink = (i: string) =>
    `/category/${i.replaceAll(/\s+/ig, '-').toLowerCase()}`;
  return (
    <section className="mt-2 flex items-center gap-2">
      {categoryList.map((i, idx) => (
        <a key={idx} href={getLink(i)} className="category-span">
          {i}
        </a>
      ))}
    </section>
  );
}
