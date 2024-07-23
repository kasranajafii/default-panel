"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import {
    ArrowDown,
    Calendar,
    Filter,
    Pencil,
    Plus,
    Trash2,
} from "lucide-react";
import Checkbox from "./Checkbox";
import Pagination from "./Pagination";

type TTable = {
    action: {
        delete?: (_id: number) => void;
        edit?: (_id: number) => void;
        selectAble?: boolean;
    };
    data: {
        [key: string]: string | number | boolean;
    }[];
    headers: {
        title: string;
        slug: string;
        sortAble: boolean;
        cols: string;
    }[];
};

function Table({ headers, data, action }: TTable) {
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    const [postPerPage, setPostPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [slicedData, setSlicedData] = useState<
        {
            [key: string]: string | number | boolean;
        }[]
    >([]);
    useEffect(() => {
        setSlicedData(
            data.slice(
                (currentPage - 1) * postPerPage,
                currentPage * postPerPage
            )
        );
    }, [currentPage, data]);
    const checkItemHandler = (_id: number): void => {
        const temp = [...selectedItems];
        if (selectedItems.includes(_id)) {
            temp.splice(
                temp.findIndex((selectedId) => selectedId === _id),
                1
            );
        } else {
            temp.push(_id);
        }
        setSelectedItems(temp);
    };

    const checkAllItemsHandler = () => {
        if (data.every((item) => selectedItems.includes(item.id as number)))
            setSelectedItems([]);
        else setSelectedItems(data.map((item) => item.id as number));
    };

    const getGridTemplateColumnsStyle = () => {
        let defaultCols = headers.reduce(
            (acc, b): number => acc + parseInt(b.cols),
            0
        );

        if (action.delete || action.edit) {
            defaultCols += 2;
        }
        if (action.selectAble) {
            defaultCols += 1;
        }

        return `repeat(${defaultCols}, 1fr)`;
    };

    return (
        <>
            <div className="flex justify-between pb-8">
                <p className="font-bold text-3xl text-slate-800 ">
                    Customers ✨
                </p>
                <div className="flex gap-2">
                    <Button onClick={() => {}} size="md" variant="tertiary">
                        <Calendar />
                        <p className="pe-[41px]">Last Months</p>
                        <ArrowDown />
                    </Button>
                    <Button
                        onClick={() => {}}
                        size="sm"
                        variant="tertiary"
                        icon={<Filter />}
                    >
                        <span></span>
                    </Button>
                    <Button
                        onClick={() => {}}
                        size="md"
                        variant="primary"
                        icon={<Plus />}
                    >
                        <p>Add Customer </p>
                    </Button>
                </div>
            </div>
            <div className="flex gap-0.5 ps-2">
                <p className="font-semibold">All Customers </p>{" "}
                <p className="text-base text-slate-400">248</p>
            </div>
            <div className="overflow-hidden">
                <div
                    className="grid w-full border-b gap-2"
                    style={{
                        gridTemplateColumns: getGridTemplateColumnsStyle(),
                    }}
                >
                    <div className="text-slate-800 font-medium mt-2">
                        <Checkbox
                            onClick={() => checkAllItemsHandler()}
                            checked={data.every((item) =>
                                selectedItems.includes(item.id as number)
                            )}
                        />
                    </div>
                    {headers.map((item, index) => (
                        <div
                            key={index}
                            className={`w-full uppercase py-2 text-xs font-semibold text-slate-500 text-start`}
                            style={{
                                gridColumn: `span ${item.cols} / span ${item.cols}`,
                            }}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
                <div>
                    {slicedData.map((rowItem, index) => (
                        <div
                            key={index}
                            className={`grid w-full gap-2 py-2 items-center border-b text-slate-500 text-start text-sm`}
                            style={{
                                gridTemplateColumns:
                                    getGridTemplateColumnsStyle(),
                            }}
                        >
                            {action.selectAble && (
                                <div className="text-slate-800 font-medium col-span-1">
                                    <Checkbox
                                        onClick={() =>
                                            checkItemHandler(
                                                rowItem.id as number
                                            )
                                        }
                                        checked={selectedItems.includes(
                                            rowItem.id as number
                                        )}
                                    />
                                </div>
                            )}
                            {Object.keys(rowItem).map(
                                (itemProperty, _index) =>
                                    itemProperty !== "id" && (
                                        <div
                                            key={_index}
                                            className="text-slate-800 font-medium"
                                            style={{
                                                gridColumn: `span ${
                                                    headers.find(
                                                        (headerItem) =>
                                                            headerItem.slug ===
                                                            itemProperty
                                                    )?.cols
                                                } / span ${
                                                    headers.find(
                                                        (headerItem) =>
                                                            headerItem.slug ===
                                                            itemProperty
                                                    )?.cols
                                                }`,
                                            }}
                                        >
                                            {rowItem[itemProperty]}
                                        </div>
                                    )
                            )}
                            {action.delete || action.edit ? (
                                <div className="flex gap-2 justify-end col-span-2">
                                    {action.delete && (
                                        <Button
                                            variant="danger-text"
                                            icon={<Trash2 />}
                                            onClick={() =>
                                                action.delete &&
                                                action.delete(
                                                    rowItem.id as number
                                                )
                                            }
                                        ></Button>
                                    )}
                                    {action.edit && (
                                        <Button
                                            variant="tertiary-text"
                                            icon={<Pencil />}
                                            onClick={() =>
                                                action.edit &&
                                                action.edit(
                                                    rowItem.id as number
                                                )
                                            }
                                        ></Button>
                                    )}
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
            <Pagination
                postsPerPage={postPerPage}
                totalPosts={data.length}
                currentPage={currentPage}
                pageHandler={(page) => setCurrentPage(page)}
            />
        </>
    );
}

export default Table;
