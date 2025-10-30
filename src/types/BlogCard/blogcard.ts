export type BcObject = {
    title: string,
    subTitle: string,
    author: string,
    date: string,
    img: string,
    imgLarge?: string;
    imgHomePc?: string;
    categoryList: string[],
    slug: string,
    readMinutes?: number,
    toc?: TOC[],
}

type TOC = {
    text: string,
    link: string,
}