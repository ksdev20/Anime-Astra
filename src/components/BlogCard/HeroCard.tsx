import { type BcObject } from "../../types/BlogCard/blogcard";
import "../../styles/components/BlogCard/HeroCard.css";

export default function HeroCard({ BcObject, smallHero = false }: { BcObject: BcObject, smallHero?: boolean }) {
  const { title, subTitle, author, date, img } = BcObject;
  return (
    <div className={`hero-card ${smallHero ? 'small-hero' : ''}`}>
      <img src={img} alt="" className="hero-img" />
      <section className="hero-ol">
        <div className="hero-ol-main">
          <a href="/" className="hc-title hov-ul">
            {title}
          </a>
          <span className="bc-sub-title">{subTitle}</span>
          <section className="bc-bottom">
            <span>
              by{" "}
              <a href="/" className="hov-ul">
                {author}
              </a>
            </span>
            <span>⦿ {date}</span>
          </section>
        </div>
      </section>
    </div>
  );
}
