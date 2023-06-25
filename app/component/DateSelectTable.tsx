"use client"

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import LoadingScreen from "./LoadingScreen";

interface Date {
    id: number; // The DB side id for that row
    source: string; // The source of the clip group i.e. "Sanders County Sheriff's Office"
    date: string; // Returns ISO format date YYYY-MM-DD
    clipCount: number; // Number of clips in the group
    outageStatus: string; // If set this means there was an outage detected on the date
}

function DateSelectTable() {
    const [dates, setDates] = useState<Date[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        // Fetch dates from the database and update the state
        fetch("/api/dates")
            .then((response) => response.json())
            .then((data) => {
                const dates: Date[] = data["datesJson"].map((date: any) => ({
                    id: date.id,
                    source: date.source,
                    date: new Date(date.date).toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "2-digit",
                    }),
                    clipCount: date.clipCount + " Clips",
                    outageStatus: date.outageStatus,
                }));
                setDates(dates);
                setIsLoading(false);
            });
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dates.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(dates.length / itemsPerPage); i++) {
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

    const totalPages = Math.ceil(dates.length / itemsPerPage);

    return (
        <div>
            <table className="table-auto w-full">
                <tbody className="bg-white dark:bg-slate-800">
                    {currentItems.map((date) => (
                        <tr key={date.id}>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                                {date.source}
                            </td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                                {date.date}
                            </td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                                {date.clipCount}
                            </td>
                            <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                                {date.outageStatus === '' ? (
                                    <FontAwesomeIcon icon={faCheckCircle} title="No outages" />
                                ) : (
                                    <FontAwesomeIcon icon={faExclamationTriangle} title={date.outageStatus} />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-gray-700 dark:text-gray-400">
                    Showing {indexOfFirstItem + 1} to {indexOfLastItem} of {dates.length} entries
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
        </div>
    );
}

export default DateSelectTable;