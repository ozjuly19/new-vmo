import prisma from '../../lib/prisma';
import { ClipDate } from '../../lib/types';

// Route logic function
export async function RouteLogic(): Promise<ClipDate[]> {
    // Fetch clips from the database
    const clips = await prisma.clips.findMany();

    // Initialize an empty object to store the grouped clips
    const groupedClips: { [key: string]: number } = {};

    // Iterate over the clips
    for (const clip of clips) {
        // Convert the clip date to a string once to avoid converting it multiple times
        const date = clip.dt ? clip.dt.toISOString().split('T')[0] : null;
        if (date) {
            // If the date is not already a key in the groupedClips object, add it with a value of 0
            if (!groupedClips[date]) {
                groupedClips[date] = 0;
            }
            // Increment the count for this date
            groupedClips[date]++;
        }
    }

    // Convert the grouped clips object into an array of ClipDate objects
    return Object.entries(groupedClips).map(([date, count], index) => ({
        id: index + 1,
        source: "SCSO",
        date,
        clipCount: count,
        outageStatus: "",
    }));
}