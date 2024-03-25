import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import SearchBox from "./search-box";

const Header = ({ state }) => {
  return (
    <>
      {/* <Container>
        <MobileMenu />
      </Container> */}
      <div style={{display: "flex", 
     alignItems: "center",
     gap: "5",
     padding: "20px 0 20px",
width:"100%" ,
   }}>
      <div class="logo" style={{
        flexBasis:"40%"
      }}>
        <span style={{
          color: "#001858",
          fontSize: "36px",
          fontWeight: "bold",
          marginLeft: "95px"
        }}>World</span>
        <span style={{
          color: "Blue",
          fontSize: "18px",
          fontWeight: "bold"
        }}>.Blog</span>
      </div>
      <div class="nav" style={{
        flexBasis: "60%",
        display:"flex"
      }}>
       <div style={{
        flexBasis: "30%",
       }} >
      <Nav />
      </div>
      <div style={{
        flexBasis: "70%",
        alignItems: "center",
        padding: "6px 0 6px",
      }} >
      <SearchBox />
      </div>
      </div>
      </div>
      {/* <img src="/packages/mars-theme/src/asset/img/header.png"></img> */}
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #007bff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
