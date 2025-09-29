import '../../styles/components/individuals/category-section.css';

export default function CategorySection({
  categoryList,
}: {
  categoryList: string[];
}) {
  const getLink = (i: string) =>
    `/category/${i.replaceAll(/\s+/ig, '-')}`;
  return (
    <section className="mt-2 flex items-center gap-2">
      {categoryList.map((i, idx) => (
        <a href={getLink(i)} key={idx}  className="category-span">
          {i}
        </a>
      ))}
    </section>
  );
}
//