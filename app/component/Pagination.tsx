"use client"
import React from "react";
import { useState, useEffect } from "react";
import { PaginationProps } from "../lib/types";

function Pagination({ items, setCurrentItems, tableRowRef }: PaginationProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    useEffect(() => {
        const tableRow = tableRowRef.current;

        if (tableRow) {
            const containerHeight = window.innerHeight;
            const rowHeight = tableRow.clientHeight;
            let numRows = Math.floor(containerHeight / rowHeight);

            numRows -= 2; // Subtract 2 rows for a margin

            console.log(`Got numRows: ${numRows}`);

            setItemsPerPage(numRows <= items.length ? numRows : items.length);
        }

        console.log(items.slice(indexOfFirstItem, indexOfLastItem));
        setCurrentItems(items.slice(indexOfFirstItem, indexOfLastItem));
    }, [currentPage, items, setCurrentItems, tableRowRef, indexOfFirstItem, indexOfLastItem, itemsPerPage]);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setCurrentPage(Number(event.currentTarget.id));
    };

    const renderPageNumbers = pageNumbers.map((number) => {
        return (
            <li key={number} className="inline-block">
                <a
                    href="#"
                    id={number.toString()}
                    onClick={handleClick}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === number
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 hover:bg-gray-200"
                        }`}
                >
                    {number}
                </a>
            </li>
        );
    });

    const totalPages = Math.ceil(items.length / itemsPerPage);

    return (
        <div className="flex justify-between items-center mt-4 mx-4 mb-4">
            <div className="text-sm text-gray-700 dark:text-gray-400">
                Showing {indexOfFirstItem + 1} to {indexOfLastItem} of {items.length} entries
            </div>
            <ul className="flex">
                <li className="mr-2">
                    <span className="pl-4 text-sm text-gray-700 dark:text-gray-400">
                        Page {currentPage} of {totalPages}
                    </span>
                </li>
                {renderPageNumbers}
            </ul>
        </div>
    );
}

export default Pagination;