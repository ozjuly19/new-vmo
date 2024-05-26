import prisma from '../../lib/prisma';
import { Clip } from '../../lib/types';

export async function RouteLogic(): Promise<Clip[]> {
    const clips = await prisma.clips.findMany({
        where: {
            dt: {
                gte: new Date('2023-01-04T00:00:00.000Z'),
                lt: new Date('2023-01-05T00:00:00.000Z')
            }
        }
    });

    const formattedClips = clips.map((clip) => ({
        id: clip['id'],
        source: "Sanders County Sheriff's Office",
        name: clip['name'],
        url: clip['url'],
        date: (new Date(clip['dt'] ?? "ERR")).toLocaleDateString(),
        time: (new Date(clip['dt'] ?? "ERR")).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
    }));

    return formattedClips;
}
