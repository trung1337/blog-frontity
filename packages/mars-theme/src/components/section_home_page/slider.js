import {Carousel} from "antd";
import {styled} from "frontity";
import Link from "../link";

const Slider = ({ state }) => {
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
        }
    ]

    const sliderItem = listPost.map((post, index) => {
        return (
            <div key={index} >
                <div
                 style={{position:'relative'}}
                >
                    <img 
                    src={post.image} 
                    alt={post.title} 
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "70vh",
                        borderRadius: "10px"
                    }}
                    />

                <div
                    style={{
                        position: "absolute",
                        bottom: "40px",
                        left: "40px",
                        width: "50%",
                        padding: "10px",
                        borderRadius: "10px",
                        color: "#fff",
                        fontSize: "16px",
                        textAlign: "start"
                    }}
                >
                    <h2>{post.title}</h2>
                    <button style={{
                        padding: "10px 16px",
                        backgroundColor: "#fff",
                        color: "#000",
                        border: "none",
                        borderRadius: "5px",
                        fontSize: "14px",
                        fontWeight: "500",
                    }}>
                        <Link href={post.link}>Read more</Link>
                    </button>
                </div>
                </div>
            </div>
        )
    })

    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };

    return (
        <Carousel 
        autoplay
        style={{
            position: "relative",
            color: "#000",
            borderRadius: "10px",
        }}
        afterChange={onChange}
        dotPosition="right"
        dotColor="#000"
        >
            {sliderItem}
        </Carousel>
    );
}   
export default Slider;

const SliderContentdDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SliderDiv = styled.div`

`;
