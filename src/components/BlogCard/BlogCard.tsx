import { type BcObject } from '../../types/BlogCard/blogcard';
import '../../styles/components/Individuals/BlogCard.css';

export default function BlogCard({BcObject}: {BcObject: BcObject}) {
    const {title, subTitle, author, date, img} = BcObject;
  return (
    <div className="blog-card">
      <img src={img} alt="" className="bc-img" />
      <a href='/' className="bc-title">{title}</a>
      <span className="bc-sub-title">{subTitle}</span>
      <section className="bc-bottom">
        <span>
          by <a href='/' className='hov-ul'>{author}</a>
        </span>
        <span>{date}</span>
      </section>
    </div>
  );
}
