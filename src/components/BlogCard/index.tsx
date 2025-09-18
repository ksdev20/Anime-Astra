import { type BcObject } from '../../types/BlogCard/blogcard';

export default function BlogCard({BcObject}: {BcObject: BcObject}) {
    const {title, subTitle, author, date, img} = BcObject;
  return (
    <div className="blog-card">
      <img src={img} alt="" className="bc-img" />
      <span className="bc-title">{title}</span>
      <span className="bc-sub-title">{subTitle}</span>
      <section className="bc-bottom">
        <span>
          by <a href='/'>{author}</a>
        </span>
        <span>{date}</span>
      </section>
    </div>
  );
}
