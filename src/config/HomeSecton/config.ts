import { Blogs } from "../../data/Blogs";

function getCategoryList(category : string){
    return Blogs.filter(i => i.categoryList.includes(category));
}

export const HomeSections = [
    {name: 'Latest', list: Blogs.filter(i => i.date > '18/9/25'), type: 'date'},
    {name: 'Trending', list: [], type: 'popularity'},
    {name: 'Action', list: getCategoryList('Action'), type: 'category'},
    {name: 'Comedy', list: getCategoryList('Comedy'), type: 'category'},
    {name: 'Adventure', list: getCategoryList('Adventure'), type: 'category'},
    {name: 'Slice of Life', list: getCategoryList('Slice of Life'), type: 'category'},
];