import { type BcObject } from '../../types/BlogCard/blogcard';
import '../../styles/components/BlogCard/BlogCard.css';
import CategorySection from './CategorySection';

export default function BlogCard({BcObject}: {BcObject: BcObject}) {
    const {title, subTitle, author, date, img, categoryList} = BcObject;
  return (
    <div className="blog-card">
      <img src={img} alt="" className="bc-img" />
      <a href='/' className="bc-title">{title}</a>
      <span className="bc-sub-title">{subTitle}</span>
      <section className="bc-bottom">
        <span>
          by <a href='/' className='hov-ul'>{author}</a>
        </span>
        <span>⦿ {date}</span>
      </section>
      <CategorySection categoryList={categoryList} />
    </div>
  );
}
