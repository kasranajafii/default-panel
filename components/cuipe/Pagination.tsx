"useclient";

import React, { useEffect, useState } from "react";
import Button from "./Button";
import ArrowRight from "../icons/ArrowRight";
import ArrowLeft from "../icons/ArrowLeft";

type TPagination = {
    postsPerPage: number;
    totalPosts: number;
    currentPage: number;
    pageHandler: (page: number) => void;
};

function Pagination({
    postsPerPage,
    totalPosts,
    currentPage,
    pageHandler,
}: TPagination) {
    const [pageNumber, setPageNumber] = useState<number[]>([]);
    const [paginationList, setPaginationList] = useState<
        Array<number | string>
    >([]);

    useEffect(() => {
        let temp = [];
        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            temp.push(i);
        }
        setPageNumber(temp);
    }, [totalPosts, postsPerPage]);

    const previousHandler = () => {
        pageHandler(currentPage - 1);
    };
    const nextHandler = () => {
        pageHandler(currentPage + 1);
    };

    const getPaginationItems = () => {
        if (pageNumber.length <= 6) return pageNumber;
        else {
            let temp: Array<number | string> = [];
            if (currentPage <= 2) {
                temp = pageNumber.slice(0, 3);
                temp.push("...");
                temp.push(pageNumber.length);
            } else if (currentPage > pageNumber.length - 2) {
                temp.push(1);
                temp.push("...");
                temp.push(
                    ...pageNumber.slice(
                        pageNumber.length - 3,
                        pageNumber.length
                    )
                );
            } else {
                let endOffset = 1;
                let startOffset = 1;
                if (currentPage === 3) startOffset = 0;
                if (currentPage === pageNumber.length - 2) {
                    startOffset = 2;
                }
                temp.push(1);
                temp.push("...");
                temp.push(
                    ...[...pageNumber].splice(
                        pageNumber.indexOf(currentPage) - startOffset,
                        3
                    )
                );
                temp.push("...");
                temp.push(pageNumber.length);
            }
            console.log(temp);
            return temp;
        }
    };

    useEffect(() => {
        setPaginationList(getPaginationItems());
    }, [currentPage, pageNumber]);

    return (
        paginationList && (
            <div className="flex fixed  bottom-0 justify-center bg-slate-50 w-full py-8">
                <nav className="flex" role="navigation" aria-label="Navigation">
                    <Button
                        onClick={previousHandler}
                        disabled={currentPage === 1}
                        size="sm"
                        variant="tertiary"
                        icon={<ArrowLeft />}
                    ></Button>
                    <ul className="flex text-sm font-medium shadow-sm rounded overflow-hidden [&>li]:border-slate-200 [&>li]:border-e border border-slate-200 mx-4">
                        {paginationList.map((item, index) => (
                            <li key={index} className="last:border-none">
                                <Button
                                    customClass="!rounded-none !border-none bg-white"
                                    variant={
                                        typeof item === "number" &&
                                        currentPage === item
                                            ? "secondary"
                                            : "tertiary"
                                    }
                                    icon={item}
                                    disabled={typeof item !== "number"}
                                    onClick={() =>
                                        typeof item === "number" &&
                                        pageHandler(item)
                                    }
                                ></Button>
                            </li>
                        ))}
                    </ul>
                    <Button
                        icon={<ArrowRight />}
                        variant="secondary"
                        disabled={currentPage === pageNumber.length}
                        onClick={nextHandler}
                        size="sm"
                    ></Button>
                </nav>
            </div>
        )
    );
}

export default Pagination;
