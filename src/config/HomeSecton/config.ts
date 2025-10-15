import { Blogs } from "../../data/Blogs";

function getCategoryList(category : string){
    return Blogs.filter(i => i.categoryList.includes(category));
}

const sevenDaysAgoDDMMYYYY = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB');

export const HomeSections = [
    {name: 'All', list: [Blogs[0]], type: 'date'},
    {name: 'Latest', list: Blogs.filter(i => i.date > sevenDaysAgoDDMMYYYY), type: 'date'},
    {name: 'Creator', list: Blogs, type: 'date'},
    {name: 'Trending', list: [], type: 'popularity'},
    {name: 'Action', list: getCategoryList('Action'), type: 'category'},
    {name: 'Comedy', list: getCategoryList('Comedy'), type: 'category'},
    {name: 'Adventure', list: getCategoryList('Adventure'), type: 'category'},
    {name: 'Slice of Life', list: getCategoryList('Slice of Life'), type: 'category'},
];