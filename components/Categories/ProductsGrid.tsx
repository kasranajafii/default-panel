"use client";
import Pagination from "@/components/Categories/Pagination";
import ProducGridItem from "@/components/Categories/ProducGridItem";
import ProductsGridFilters from "@/components/Categories/ProductsGridFilters";
import FindProduct from "@/components/Categories/FindProduct";
import SortGridProducts from "@/components/Categories/SortGridProducts";
import React, { useState } from "react";

type TProductsGrid = {
    products: {
        id: number;
        title: string;
        subTitle: string;
        price: number;
        image: string;
        score: number;
        route: string;
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
const filters = [
    {
        id: 1,
        label: "Apps / Software",
        slug: "app",
    },
    {
        id: 2,
        label: "Education",
        slug: "education",
    },
    {
        id: 3,
        label: "Books & Writing",
        slug: "book",
    },
    {
        id: 4,
        label: "Drawing / Painting",
        slug: "drawing",
    },
];
const ProductsGrid = ({ products }: TProductsGrid) => {
    const [selectedSort, setSelectedSort] = useState(sortTypes[0]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 12;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1);
    };

    const sortedItems = () => {
        let temp = [...products];
        if (searchQuery) {
            temp = temp.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        if (selectedSort.id === 4 || selectedSort.id === 5) {
            return temp.sort((a, b) => {
                const cmp = a.price - b.price;
                return selectedSort.id === 5 ? cmp * -1 : cmp;
            });
        } else if (selectedSort.id === 1) {
            return temp;
        } else if (selectedSort.id === 2) {
            return temp;
        } else return temp;
    };
    const sortedProducts = sortedItems();
    const indexOfLastItem = currentPage * perPage;
    const indexOfFirstItem = indexOfLastItem - perPage;
    const currentItems = sortedProducts.slice(
        indexOfFirstItem,
        indexOfLastItem
    );
    return (
        <div className="flex flex-col p-8 bg-[#f1f5f9]">
            <div>
                <FindProduct
                    searchQuery={searchQuery}
                    handleSearch={handleSearch}
                />
            </div>
            <div className="grid grid-cols-5 ">
                <div className="col-span-1">
                    <ProductsGridFilters filters={filters} />
                </div>
                <div className="col-span-4 pl-6">
                    <SortGridProducts
                        activeSort={selectedSort}
                        sortTypes={sortTypes}
                        onChange={(_sortOption) => setSelectedSort(_sortOption)}
                    />
                    <div>
                        <ProducGridItem data={currentItems} />
                    </div>
                    <Pagination
                        perPage={perPage}
                        currentPage={currentPage}
                        totalItems={products.length}
                        handlePageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductsGrid;
