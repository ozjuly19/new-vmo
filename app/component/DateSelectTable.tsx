"use client"

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import LoadingScreen from "./LoadingScreen";
import Pagination from "./Pagination";

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
    const [currentItems, setCurrentItems] = useState<any[]>([]);

    const tableRowRef = useRef<HTMLTableRowElement>(null);

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

                // Fix pagination by adding at least 
                setCurrentItems(dates.slice(0, 1));
            });
    }, []);

    if (isLoading)
    {
        return <LoadingScreen loadingText="Loading dates..." />;
    } else {
        return (
            <div>
                <table className="table-auto w-full">
                    <tbody className="bg-white dark:bg-slate-800">
                        {currentItems.map((date) => (
                            <tr ref={tableRowRef} key={date.id}>
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
                <Pagination items={dates} tableRowRef={tableRowRef} setCurrentItems={setCurrentItems} />
            </div>
        );
    }
}

export default DateSelectTable;