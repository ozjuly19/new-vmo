import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const datesJson = [
    {
      id: 1,
      source: "SCSO",
      date: "2022-01-01",
      clipCount: "17",
      outageStatus: "SCSO 670",
    },
    {
      id: 2,
      source: "SCSO",
      date: "2022-01-02",
      clipCount: "251",
      outageStatus: "",
    },
  ];
  return NextResponse.json({ datesJson });
}
