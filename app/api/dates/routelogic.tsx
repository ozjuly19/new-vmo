import prisma from '../../lib/prisma';
import { ClipDate } from '../../lib/types';

export async function RouteLogic(): Promise<ClipDate[]> {
  const clips = await prisma.clips.findMany();

  const groupedClips = clips.reduce((acc: { [key: string]: number }, clip) => {
    const date = clip.dt ? clip.dt.toISOString().split('T')[0] : null;
    if (date) {
      if (!acc[date]) {
        acc[date] = 0;
      }
      acc[date]++;
    }
    return acc;
  }, {});

  return Object.entries(groupedClips).map(([date, count], index) => ({
    id: index + 1,
    source: "SCSO",
    date,
    clipCount: count,
    outageStatus: "",
  }));
}