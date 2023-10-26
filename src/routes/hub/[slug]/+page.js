import posts from "/src/lib/contentrain/Posts/en.json";

export function load({ params }) {
    let result = posts.find(post => post.slug === params.slug);

    return {
        heading: result.Heading,
        description: result.Description,
        date: result.Date,
        author: result.Author,
        image: result.Image,
        content: result.content
    }
}