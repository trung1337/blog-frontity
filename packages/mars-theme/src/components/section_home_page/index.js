import Link from "../link";
import NewPosts from "../new_posts";
import Category from "./categories";
import Slider from "./slider";

const SectionHomePage = ({ state }) => {
    return (
        <>
            <Slider/>
        <div 
            style={{
                marginTop: "24px"
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h2
                    style={{
                        fontSize: "24px",
                    }}
                >Choose A Category</h2>
                <Link hfref="/category">View all</Link>
            </div>
            <Category/>
        </div>
        <NewPosts/>
        </>
    );
}

export default SectionHomePage;