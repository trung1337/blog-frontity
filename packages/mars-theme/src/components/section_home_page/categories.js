import {styled} from "frontity";
import Link from "../link";

const Category = ({ state }) => {
    const listCategory = [
        {
            title: "Category 1",
            image: "https://source.unsplash.com/random/800x600",
            link: "/category-1"
        },
        {
            title: "Category 2",
            image: "https://source.unsplash.com/random/800x601",
            link: "/category-2"
        },
        {
            title: "Category 3",
            image: "https://source.unsplash.com/random/800x602",
            link: "/category-3"
        },{
            title: "Category 4",
            image: "https://source.unsplash.com/random/800x601",
            link: "/category-4"
        },
        {
            title: "Category 5",
            image: "https://source.unsplash.com/random/800x602",
            link: "/category-3"
        },{
            title: "Category 6",
            image: "https://source.unsplash.com/random/800x601",
            link: "/category-4"
        }
    ]
    const categoryItem = listCategory.map((category, index) => {
        return (
            <CardCategory key={index} >
                <Link link={category.link}
                    style={{
                        display: "block",
                        position: "relative"
                    }}
                >
                    <div style={{position:"absolute", width:"100%", height:"98%", background: "#0f0e0e30",  borderRadius: "10px"}}></div>
                    <img src={category.image} alt={category.title} style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "10px"
                    }} />
                    <h3 style={{
                        position: "absolute",
                        color: "#fff",
                        fontSize: "14px",
                        bottom: "0px",
                        left: "7px"
                    }}>{category.title}</h3>
                </Link>
            </CardCategory>
        )
    })
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
        }}>
            {categoryItem}
        </div>
    )
};
export default Category;

const CardCategory = styled.div`
    @media (max-width: 768px) {
	    width: 48%;
    }
  
    @media (min-width: 769px) and (max-width: 1023px){
        width: 31%;
    }
    @media (min-width: 1024px) {
        width: 15%;
    }
`;