import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

export async function GET(request: Request) {

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

    return NextResponse.json({ clipsJson: formattedClips });
}
//     {
//         id: 1,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-01",
//         time: "12:00 PM"
//     },
//     {
//         id: 2,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-02",
//         time: "1:00 PM"
//     },
//     {
//         id: 3,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-03",
//         time: "2:00 PM"
//     },
//     {
//         id: 4,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-04",
//         time: "3:00 PM"
//     },
//     {
//         id: 5,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-05",
//         time: "4:00 PM"
//     },
//     {
//         id: 6,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-06",
//         time: "5:00 PM"
//     },
//     {
//         id: 7,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-07",
//         time: "6:00 PM"
//     },
//     {
//         id: 8,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-08",
//         time: "7:00 PM"
//     },
//     {
//         id: 9,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-09",
//         time: "8:00 PM"
//     },
//     {
//         id: 10,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-10",
//         time: "9:00 PM"
//     },
//     {
//         id: 11,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-11",
//         time: "10:00 PM"
//     },
//     {
//         id: 12,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-12",
//         time: "11:00 PM"
//     },
//     {
//         id: 13,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-13",
//         time: "12:00 AM"
//     },
//     {
//         id: 14,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-14",
//         time: "1:00 AM"
//     },
//     {
//         id: 15,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-15",
//         time: "2:00 AM"
//     },
//     {
//         id: 16,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-16",
//         time: "3:00 AM"
//     },
//     {
//         id: 17,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-17",
//         time: "4:00 AM"
//     },
//     {
//         id: 18,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-18",
//         time: "5:00 AM"
//     },
//     {
//         id: 19,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-19",
//         time: "6:00 AM"
//     },
//     {
//         id: 20,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-20",
//         time: "7:00 AM"
//     },
//     {
//         id: 21,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-21",
//         time: "8:00 AM"
//     },
//     {
//         id: 22,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-22",
//         time: "9:00 AM"
//     },
//     {
//         id: 23,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-23",
//         time: "10:00 AM"
//     },
//     {
//         id: 24,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-24",
//         time: "11:00 AM"
//     },
//     {
//         id: 25,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-25",
//         time: "12:00 PM"
//     },
//     {
//         id: 26,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-26",
//         time: "1:00 PM"
//     },
//     {
//         id: 27,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-27",
//         time: "2:00 PM"
//     },
//     {
//         id: 28,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-28",
//         time: "3:00 PM"
//     },
//     {
//         id: 29,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-29",
//         time: "4:00 PM"
//     },
//     {
//         id: 30,
//         source: "Sanders County Sheriff's Office",
//         date: "2022-01-30",
//         time: "5:00 PM"
//     }
// ];