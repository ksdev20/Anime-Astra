import { type BcObject } from "../../types/BlogCard/blogcard";
import "../../styles/components/BlogCard/BlogCard.css";
import CategorySection from "./CategorySection";

// <a href={'/' + slug} className="bc-sub-title">{subTitle}</a>
export default function BlogCard({ BcObject }: { BcObject: BcObject }) {
  const {
    title,
    subTitle,
    author,
    date,
    img,
    imgLarge,
    imgHomePc,
    categoryList,
    slug,
    readMinutes,
  } = BcObject;
  return (
    <article aria-label={`Article Card titled ${title}`} className="blog-card">
      <a aria-label="" href={"/" + slug} className="bc-img">
        <picture className="bc-image">
          <source media="(max-width: 640px)" srcSet={img} type="img/jpeg" />
          <source media="(min-width: 641px)" srcSet={imgHomePc} type="img/jpg" />
          <img src={img} alt={`Cover image for article`} className="bc-img" />
        </picture>
      </a>
      <section className="text-section">
        <a href={"/" + slug} className="bc-title">
          <h2>{title}</h2>
        </a>
        <section className="bc-bottom">
          <span>
            by{" "}
            <a href={"/creator/" + author} className="hov-ul">
              {author}
            </a>
          </span>
          <span>• {date}</span>
          {readMinutes && <span>• {readMinutes} Minutes</span>}
        </section>
        <CategorySection categoryList={categoryList} />
      </section>
    </article>
  );
}
