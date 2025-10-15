// import { frontendUrl } from "./Head.astro"
const frontendUrl = import.meta.env.PUBLIC_FRONTEND_URL;
const commonDesc = "Anime Astra is an Anime Listicle which aims to change the listicle and article world by providing lists of top-quality anime even if underrated and answering all the important questions needed to start watching an Anime. Through Astra, you can just start watching an Anime right then and no need to go to different websites and rethink yourself.";

export const defaultHead = {
    title: "Anime Astra",
    description: commonDesc,
    keywords: "anime listicle, anime blog, anime list, top 5 anime, top 10 anime",
    url: frontendUrl,
    imageUrl: frontendUrl + "/animeastra-og-img-pc-2.webp",
    author: "Anime Astra Team",
    jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Anime Astra",
        "url": frontendUrl,
        "image": frontendUrl + "/animeastra-og-img-pc-2.webp",
        "description": commonDesc,
        "alternativeName": "Anime Listicle hub",
        "publisher": {
            "name": "Anime Astra Team",
            "url": frontendUrl,
        }
    },
}