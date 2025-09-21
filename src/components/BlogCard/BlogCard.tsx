import { type BcObject } from "../../types/BlogCard/blogcard";
import "../../styles/components/BlogCard/BlogCard.css";
import CategorySection from "./CategorySection";

export default function BlogCard({ BcObject }: { BcObject: BcObject }) {
  const { title, subTitle, author, date, img, categoryList, slug, readMinutes } = BcObject;
  return (
    <div className="blog-card">
      <a href={'./' + slug}>
        <img src={img} alt="" className="bc-img" />
      </a>
      <section className="text-section">
        <a href={'./' + slug} className="bc-title">
          {title}
        </a>
        <a href={'./' + slug} className="bc-sub-title">{subTitle}</a>
        <section className="bc-bottom">
          <span>
            by{" "}
            <a href={"/creator/" + author} className="hov-ul">
              {author}
            </a>
          </span>
          <span>• {date}</span>
          {readMinutes && (<span>• {readMinutes} Minutes</span>)}
        </section>
        <CategorySection categoryList={categoryList} />
      </section>
    </div>
  );
}
