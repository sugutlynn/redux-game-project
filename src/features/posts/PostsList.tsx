import { useAppSelector } from "../../store/store"

export default function PostsList() {
    const posts = useAppSelector(state => state.posts);
    
    return (
        <section>
            <h2>Posts</h2>
            
    {posts && posts.map(post  => (
        <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
            
    </article>
       
    ))}
        </section>
    )
}

