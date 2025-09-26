import { Blogs } from "./Blogs";

export const Creators = [
    {
        name: 'MasterMind',
        about: 'Mastermind is a reader, writer, and aspiring do-it-all man. He writes for his personal blog, Two of Sixty Six, whenever he gets a spare hour. Can be found checking out far too many books from the library, sketching up a storm, or picking up another anime from his paused list.',
        createdAt: '20/09/2025',
        posts: Blogs.slice(0, 3),
        socialMedia: [
            {
                name: 'X',
                svg: 'x-icon',
                link: 'https://x.com/BhartiyaFIrst1'
            },
            {
                name: 'Instagram',
                svg: 'reddit-icon',
                link: 'https://www.reddit.com/user/Acrobatic_Fan_275/'
            },
        ]
    }
];