import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        clips: [
            {
                id: 1,
                source: "Sanders County Sheriff's Office",
                date: "2022-01-01",
                time: "12:00 PM"
            },
            {
                id: 2,
                source: "Sanders County Sheriff's Office",
                date: "2022-01-02",
                time: "1:00 PM"
            }
        ]
    })
}