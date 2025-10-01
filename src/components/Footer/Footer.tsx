import { LegalItems, NormalPages } from "../../config/pages/config";
import "../../styles/components/individuals/footer.css";

export default function Footer() {
  return (
    <footer aria-label="Site Footer">
      <section className="site-footer">
        <div aria-label="Site Logo Section" className="site-logo-section">
          <div className="sls-line"></div>
          <a href="/" className="site-logo sl-main">
            Anime Astra
          </a>
        </div>
        <ul aria-label="Links to site's standard pages" className="pages legals-sf mb-2">
          {NormalPages.map((i, idx) => (
            <li key={idx} className="sf-item">
              <a href={i.link}>{i.text}</a>
            </li>
          ))}
        </ul>
        <ul aria-label="Links to site's Legal pages and sections" className="legals-sf">
          {LegalItems.map((obj, idx) => (
            <li key={idx} className="sf-item">
              <a href={obj.link}>{obj.text}</a>
            </li>
          ))}
        </ul>
        <p aria-label="Copyright declaration" className="text-sm text-[gray] mt-5">©2025 Anime Astra. All Rights Reserved.</p>
      </section>
    </footer>
  );
}
