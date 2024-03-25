import React from "react";
import { connect, styled } from "frontity";
import Header from '../asset/img/header.png';
const Banner = ({ state }) => {

    return (
        <Container>
       <BannerLeft>
          <div style={{
            fontSize: "64px",
            fontWeight: "bold",
            width: '670px',
            color: "#001858"
        }}>Welcome to the General Information Website</div>
        <div style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "Dark Grey"
        }}>We provide diverse information on various topics, including news, football, entertainment, animal, and more.</div>
        </BannerLeft>

        <BannerRight>
            <img style={{
                width: "470px",
                height: "387px"
            
            }} src={Header} />
        </BannerRight>
        


        
        </Container>
    );
};

export default connect(Banner);

const Container = styled.div`
    width: 100%;
    height: calc(900px - 86px);
    background-color: #fff;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    font-size: 20px;
    `;

const BannerLeft = styled.div`
    flex-basis: 70%;
    padding-left: 100px;
    `;
const BannerRight = styled.div`
    flex-basis: 30%;
    padding: 20px;
    `;