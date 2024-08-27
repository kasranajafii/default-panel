import Button from "@/components/cuipe/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

type TPagination = {
    perPage: number;
    currentPage: number;
    totalItems: number;
    handlePageChange: (page: number) => void;
};

const Pagination = ({
    perPage,
    currentPage,
    totalItems,
    handlePageChange,
}: TPagination) => {
    const totalPages = Math.ceil(totalItems / perPage);
    const handleClick = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            handlePageChange(page);
        }
    };

    return (
        <div className="flex justify-end items-center gap-3 pt-6 ">
            <Button
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}
                variant="secondary"
                icon={<ArrowLeft size={16} />}
            >
                Previous
            </Button>
            <Button
                customClass="flex-row-reverse"
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
                variant="secondary"
                icon={<ArrowRight size={16} />}
            >
                Next
            </Button>
        </div>
    );
};

export default Pagination;
