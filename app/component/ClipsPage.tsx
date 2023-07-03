"use client"

import { useState, useEffect, useRef } from 'react';
import LoadingScreen from "./LoadingScreen";
import Pagination from "./Pagination";

interface Clip {
    id: number;     // The DB side id for that row
    source: string; // The source of the clip i.e. "Sanders County Sheriff's Office"
    date: string;   // Returns ISO format date YYYY-MM-DD
    time: string;   // Time the clip was uploaded
}

function ClipsPage() {
    const [clips, setClips] = useState<Clip[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentItems, setCurrentItems] = useState<any[]>([]);

    const tableRowRef = useRef<HTMLTableRowElement>(null);

    useEffect(() => {
        // Fetch clips from the database and update the state
        fetch('/api/clips')
            .then(response => response.json())
            .then(data => {
                const clips: Clip[] = data["clipsJson"].map((clip: any) => ({
                    id: clip.id,
                    source: clip.source,
                    date: new Date(clip.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' }),
                    time: clip.time
                }));
                setClips(clips);
                setIsLoading(false);

                // Fix pagination by adding at least 1 item to allow pagination calculations
                setCurrentItems(clips.slice(0, 1));
            });
    }, []);

    if (isLoading) {
        return <LoadingScreen loadingText="Loading clips..." />;
    } else {
        return (
            <div>
                <table className="table-auto w-full">
                    <tbody className="bg-white dark:bg-slate-800">
                        {currentItems.map((clip) => (
                            <tr ref={tableRowRef} key={clip.id}>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{clip.source}</td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{clip.date}</td>
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{clip.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination items={clips} tableRowRef={tableRowRef} setCurrentItems={setCurrentItems} />
            </div>
        );
    }
}

export default ClipsPage;