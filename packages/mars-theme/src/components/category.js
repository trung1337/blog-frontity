import React from 'react';
import football from '../asset/img/football.png';
import animals from '../asset/img/animals.png';
import tree from '../asset/img/tree.png';
const Category = () => {
    // Fetch categories data from API or define them manually
    const categories = ['Football', 'Animal', 'Tree', 'Travel'];

    const categoriess = [
        {
            title: "Football",
            src: football
        },
        {
            title: "Animal",
            src:animals
        },
        {
            title: "Tree",
            src: tree
        },
        {
            title: "Travel",
            src: football
        },
    ]

    return (
        <div style={{
            width: "100%",
            height: "500px",
        }} >

            <div style={{
                padding: "68px 94px 68px 94px",
            }}>
            <h2 style={{
                display:"float",
                paddingBottom: "15px"
            }}>Browse The Category</h2>
            <ul style={{
                display:"flex",
                gap: "37px",
                
            }}>
                {categoriess.map((category, index) => (
                    <li key={index} style={{
                        width: "220px",
                        height: "280px",
                        background: "#ffffff",
                        listStyle: "none",
                        borderRadius: "8px",
                        alignContent: "center"                    }} >

                          <img style={{
                                width: "90%",
                                height: "90%"
                          }} src ={category.src}></img>
                           
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default Category;