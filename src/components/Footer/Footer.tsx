import { LegalItems, NormalPages } from "../../config/pages/config";
import "../../styles/components/individuals/footer.css";

export default function Footer() {
  return (
    <footer>
      <section className="site-footer">
        <div className="w-full flex justify-center mb-5 relative z-[1] max-w-[800px]">
          <div className="absolute z-[-1] w-full h-[3px] bg-[gray] top-[50%]"></div>
          <a href="/" className="site-logo fot-sl p-1 bg-black">
            Anime Astra
          </a>
        </div>
        <ul className="pages legals-sf mb-2">
          {NormalPages.map((i) => (
            <li className="sf-item">
              <a href={i.link}>{i.text}</a>
            </li>
          ))}
        </ul>
        <ul className="legals-sf">
          {LegalItems.map((obj) => (
            <li className="sf-item">
              <a href={obj.link}>{obj.text}</a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-[gray] mt-5">©2025 Anime Astra. All Rights Reserved.</p>
      </section>
    </footer>
  );
}
