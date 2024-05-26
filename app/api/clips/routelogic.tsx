import prisma from '../../lib/prisma';
import { Clip } from '../../lib/types';

// Route logic function
export async function RouteLogic(): Promise<Clip[]> {
    // Fetch clips from the database where the date is between 2023-01-04 and 2023-01-05
    const clips = await prisma.clips.findMany({
        where: {
            dt: {
                gte: new Date('2023-01-04T00:00:00.000Z'),
                lt: new Date('2023-01-05T00:00:00.000Z')
            }
        }
    });

    // Map over the clips and format each one
    const formattedClips = clips.map((clip) => {
        // Create a date object once for each clip to avoid creating multiple date objects
        const clipDate = new Date(clip['dt'] ?? "ERR");

        return {
            id: clip['id'],
            source: "Sanders County Sheriff's Office",
            name: clip['name'],
            url: clip['url'],
            // Format the date and time using the single date object
            date: clipDate.toLocaleDateString(),
            time: clipDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
        };
    });

    // Return the formatted clips
    return formattedClips;
}