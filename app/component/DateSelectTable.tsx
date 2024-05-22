"use client"

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import LoadingScreen from "./LoadingScreen";
import Pagination from "./Pagination";
import { ClipDate } from "../lib/types";

async function fetchClipDates() {
    const response = await fetch("/api/dates");
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (!data || !data["clipDatesJson"]) {
        throw new Error("Unexpected data structure");
    }
    return data["clipDatesJson"];
}

function DateSelectTable() {
    const [dates, setDates] = useState<ClipDate[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentItems, setCurrentItems] = useState<ClipDate[]>([]);
    const tableRowRef = useRef<HTMLTableRowElement>(null);

    useEffect(() => {
        fetchClipDates()
            .then((clipDatesJson) => {
                const dates: ClipDate[] = clipDatesJson.map((clipDate: any) => ({
                    id: clipDate.id,
                    source: clipDate.source,
                    date: new Date(clipDate.date).toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "2-digit",
                    }),
                    clipCount: clipDate.clipCount + " Clips",
                    outageStatus: clipDate.outageStatus,
                }));
                setDates(dates);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Fetch error: ", error);
            });
    }, []);

    if (isLoading) {
        return <LoadingScreen loadingText="Loading dates..." />;
    } else {
        return (
            <div>
                <table className="table-auto w-full">
                    <tbody className="bg-white dark:bg-slate-800">
                        {currentItems.map(({ id, source, date, clipCount, outageStatus }) => (
                            <tr ref={tableRowRef} key={id}>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                                    {source}
                                </td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                                    {date}
                                </td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                                    {clipCount}
                                </td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                                    {outageStatus === '' ? (
                                        <FontAwesomeIcon icon={faCheckCircle} title="No outages" />
                                    ) : (
                                        <FontAwesomeIcon icon={faExclamationTriangle} title={outageStatus} />
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