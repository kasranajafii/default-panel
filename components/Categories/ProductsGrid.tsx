"use client";
import Pagination from "@/components/Categories/Pagination";
import ProducGridItem from "@/components/Categories/ProducGridItem";
import ProductsGridFilters from "@/components/Categories/ProductsGridFilters";
import RightProduct from "@/components/Categories/RightProduct";
import SortGridProducts from "@/components/Categories/SortGridProducts";
import React, { useState } from "react";

type TProductsGrid = {
    products: {
        [key: string]: string | number | string[];
    }[];
};
const sortTypes = [
    {
        id: 1,
        title: "View All",
    },
    {
        id: 2,
        title: "Featured",
    },
    { id: 3, title: "Newest" },
    { id: 4, title: "Price - Low To High" },
    { id: 5, title: "Price - High To Low" },
];
const ProductsGrid = ({ products }: TProductsGrid) => {
    const [selectedSort, setSelectedSort] = useState(sortTypes[0]);
    return (
        <div className="flex flex-col p-8 bg-[#f1f5f9]">
            <div>
                <RightProduct />
            </div>
            <div className="grid grid-cols-5 ">
                <div className="col-span-1">
                    <ProductsGridFilters />
                </div>
                <div className="col-span-4">
                    <SortGridProducts
                        data={products}
                        activeSort={selectedSort}
                        sortTypes={sortTypes}
                        onChange={() => {}}
                    />
                    <div className="grid grid-cols-[repeat(auto-fill,_minmax(302px,_1fr))] gap-x-6 ">
                        <ProducGridItem data={products} />
                    </div>
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default ProductsGrid;
