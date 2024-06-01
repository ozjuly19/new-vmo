import prisma from '../../lib/prisma';

// Route logic function
export async function RouteLogic() {
    // Fetch the newest clip from the database
    const newestClip = await prisma.clips.findFirst({
        orderBy: {
            dt: 'desc'
        }
    });

    // Check if a clip was found
    if (!newestClip || !newestClip.dt) {
        // throw new Error('No clips found');
        return {
            date: null,
            error: "No clips found"
        };
    }

    // Create a date object for the clip
    const clipDate = new Date(newestClip.dt);

    // Format the date and time
    const date = clipDate.toISOString();

    // Return the date and time as JSON
    return {
        date,
    };
}

/*
{
    "date": "2022-12-31T23:59:59.999Z"
}
*/