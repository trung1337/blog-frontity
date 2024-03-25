import {styled} from "frontity";
import Category from "./category";
import Link from "./link";

const NewPosts = ({ state }) => {
    const listPost = [
        {
            title: "Post 1",
            image: "https://source.unsplash.com/random/800x600",
            description:"This is post 1",
            link: "/post-1"
        },
        {
            title: "Post 2",
            image: "https://source.unsplash.com/random/800x601",
            description:"This is post 2",
            link: "/post-2"
        },
        {
            title: "Post 3",
            image: "https://source.unsplash.com/random/800x602",
            description:"This is post 3",
            link: "/post-3"
        },
        {
            title: "Post 3",
            image: "https://source.unsplash.com/random/800x602",
            description:"This is post 4",
            link: "/post-3"
        }
    ]

    const postItem = listPost.map((post, index) => {
        return (
            <CardPost key={index} >
                <Link link={post.link}>
                    <img src={post.image} alt={post.title} style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "10px"
                    }} />
                    <h3 style={{}}>{post.title}</h3>
                </Link>
            </CardPost>
        )
    })

    return (
        <>
            <div 
                style={{
                    marginTop: "24px"
                }}
            >
                    <h2
                        style={{
                            fontSize: "24px",
                        }}
                    >New Posts</h2>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "10px",
            }}>
                {postItem}
            </div>
        </>
    );
}

export default NewPosts;


const CardPost = styled.div`
    padding: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    border-radius: 10px;
    @media (max-width: 768px) {
	    width: 42%;
    }
  
    @media (min-width: 769px) and (max-width: 1023px){
        width: 42%;
    }
    @media (min-width: 1024px) {
        width: 20%;
    }
`;