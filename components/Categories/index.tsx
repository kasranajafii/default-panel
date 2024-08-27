import ProductsGrid from "@/components/Categories/ProductsGrid";
import React from "react";
import Headphones from "@/public/assets/images/Headphones.png";

const CategoryComponent = () => {
    const products = [
        {
            id: 1,
            title: "Form Builder CP",
            subTitle:
                "Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod.",
            price: 39.0,
            image: Headphones.src,
            route: "/",
        },
        {
            id: 2,
            title: "Form Builder CP",
            subTitle:
                "Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod.",
            price: 69.0,
            image: Headphones.src,
            route: "/",
        },

        {
            id: 3,
            title: "Form Builder CP",
            subTitle:
                "Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod.",
            price: 39.0,
            image: Headphones.src,
            route: "/",
        },

        {
            id: 4,
            title: "Form Builder CP",
            subTitle:
                "Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod.",
            price: 69.0,
            image: Headphones.src,
            route: "/",
        },
        {
            id: 5,
            title: "Form Builder CP",
            subTitle:
                "Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod.",
            price: 39.0,
            image: Headphones.src,
            route: "/",
        },
        {
            id: 6,
            title: "Form Builder CP",
            subTitle:
                "Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod.",
            price: 39.0,
            image: Headphones.src,
            route: "/",
        },
        {
            id: 7,
            title: "Form Builder CP",
            subTitle:
                "Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod.",
            price: 69.0,
            image: Headphones.src,
            route: "/",
        },
        {
            id: 8,
            title: "Form Builder CP",
            subTitle:
                "Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod.",
            price: 69.0,
            image: Headphones.src,
            route: "/",
        },
        {
            id: 9,
            title: "Form Builder CP",
            subTitle:
                "Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod.",
            price: 39.0,
            image: Headphones.src,
            route: "/",
        },
        {
            id: 10,
            title: "Form Builder CP",
            subTitle:
                "Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod.",
            price: 39.0,
            image: Headphones.src,
            route: "/",
        },
        {
            id: 11,
            title: "Form Builder CP",
            subTitle:
                "Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod.",
            price: 39.0,
            image: Headphones.src,
            route: "/",
        },

        {
            id: 12,
            title: "Form Builder CP",
            subTitle:
                "Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod.",
            price: 39.0,
            image: Headphones.src,
            route: "/",
        },

        {
            id: 13,
            title: "Form Builder CP",
            subTitle:
                "Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod.",
            price: 39.0,
            image: Headphones.src,
            route: "/",
        },
        {
            id: 14,
            title: "Form Builder CP",
            subTitle:
                "Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod.",
            price: 39.0,
            image: Headphones.src,
            route: "/",
        },
        {
            id: 15,
            title: "Form Builder CP",
            subTitle:
                "Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod.",
            price: 39.0,
            image: Headphones.src,
            route: "/",
        },
    ];

    return (
        <div>
            <ProductsGrid products={products} />
        </div>
    );
};

export default CategoryComponent;
