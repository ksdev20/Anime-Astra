import { type BcObject } from "../../types/BlogCard/blogcard";
import "../../styles/components/BlogCard/HeroCard.css";

//setHasInteracted(true);
export default function HeroCard({
  BcObject,
  smallHero = false,
}: {
  BcObject: any;
  smallHero?: boolean;
}) {
  const { title, subTitle, author, date, img, slug, readMinutes } = BcObject;
  return (
    <article aria-label={`Article Card titled ${title}`} className={`hero-card ${smallHero ? "small-hero" : ""}`}>
      <img src={img} alt={`Cover Image for Article`} className="hero-img"/>
      <section className="hero-ol">
        <div className="hero-ol-main">
          <a href={'./' + slug} className="hc-title hov-ul" aria-label="Link to Article">
            <h2>{title}</h2>
          </a>
          <section className="bc-bottom">
            <span>
              by{" "}
              <a href={"/creator/" + author} className="hov-ul" aria-label={`Link to Creator ${author}'s Page`}>
                {author}
              </a>
            </span>
            <span aria-label="Publish date">• {date}</span>
            {readMinutes && (<span>• {readMinutes} Minutes</span>)}
          </section>
        </div>
      </section>
    </article>
  );
}
