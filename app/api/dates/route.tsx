import { NextResponse } from 'next/server';
import { RouteLogic } from './routelogic';
import { CommonRouteCall } from '../apiutils';

// Define an async function to handle GET requests
export async function GET(request: Request) {
  // Call the CommonRouteCall function with RouteLogic as an argument and await its result
  const response = await CommonRouteCall(RouteLogic);

  // Check if the response is an instance of NextResponse
  if (response instanceof NextResponse) {
    // If the response is an instance of NextResponse, return it as is
    // This means that an error occurred in the RouteLogic function and a NextResponse error was returned
    return response;
  }

  // If the response is not an instance of NextResponse, it's a JSON object
  // Wrap it in a NextResponse.json call and return it
  return NextResponse.json({ clipDatesJson: response });
}
/*
const datesJson = [ // Simulate a database query
  {
    id: 1,
    source: "SCSO",
    date: "2022-01-01",
    clipCount: "17",
    outageStatus: "",
  },
  {
    id: 2,
    source: "SCSO",
    date: "2022-01-02",
    clipCount: "251",
    outageStatus: "",
  },
  {
    id: 3,
    source: "SCSO",
    date: "2022-01-03",
    clipCount: "123",
    outageStatus: "Planned outage",
  },
  {
    id: 4,
    source: "SCSO",
    date: "2022-01-04",
    clipCount: "0",
    outageStatus: "Unplanned outage",
  },
  {
    id: 5,
    source: "SCSO",
    date: "2022-01-05",
    clipCount: "56",
    outageStatus: "",
  },
  {
    id: 6,
    source: "SCSO",
    date: "2022-01-06",
    clipCount: "78",
    outageStatus: "",
  },
  {
    id: 7,
    source: "SCSO",
    date: "2022-01-07",
    clipCount: "0",
    outageStatus: "Unplanned outage",
  },
  {
    id: 8,
    source: "SCSO",
    date: "2022-01-08",
    clipCount: "12",
    outageStatus: "",
  },
  {
    id: 9,
    source: "SCSO",
    date: "2022-01-09",
    clipCount: "34",
    outageStatus: "",
  },
  {
    id: 10,
    source: "SCSO",
    date: "2022-01-10",
    clipCount: "0",
    outageStatus: "Planned outage",
  },
  {
    id: 11,
    source: "SCSO",
    date: "2022-01-11",
    clipCount: "56",
    outageStatus: "",
  },
  {
    id: 12,
    source: "SCSO",
    date: "2022-01-12",
    clipCount: "0",
    outageStatus: "",
  },
  {
    id: 13,
    source: "SCSO",
    date: "2022-01-13",
    clipCount: "89",
    outageStatus: "",
  },
  {
    id: 14,
    source: "SCSO",
    date: "2022-01-14",
    clipCount: "0",
    outageStatus: "",
  },
  {
    id: 15,
    source: "SCSO",
    date: "2022-01-15",
    clipCount: "123",
    outageStatus: "",
  },
  {
    id: 16,
    source: "SCSO",
    date: "2022-01-16",
    clipCount: "0",
    outageStatus: "",
  },
  {
    id: 17,
    source: "SCSO",
    date: "2022-01-17",
    clipCount: "45",
    outageStatus: "",
  },
  {
    id: 18,
    source: "SCSO",
    date: "2022-01-18",
    clipCount: "0",
    outageStatus: "",
  },
  {
    id: 19,
    source: "SCSO",
    date: "2022-01-19",
    clipCount: "67",
    outageStatus: "",
  },
  {
    id: 20,
    source: "SCSO",
    date: "2022-01-20",
    clipCount: "0",
    outageStatus: "",
  },
  {
    id: 21,
    source: "SCSO",
    date: "2022-01-21",
    clipCount: "89",
    outageStatus: "",
  },
  {
    id: 22,
    source: "SCSO",
    date: "2022-01-22",
    clipCount: "0",
    outageStatus: "",
  },
  {
    id: 23,
    source: "SCSO",
    date: "2022-01-23",
    clipCount: "12",
    outageStatus: "",
  },
  {
    id: 24,
    source: "SCSO",
    date: "2022-01-24",
    clipCount: "0",
    outageStatus: "",
  },
  {
    id: 25,
    source: "SCSO",
    date: "2022-01-25",
    clipCount: "34",
    outageStatus: "",
  },
  {
    id: 26,
    source: "SCSO",
    date: "2022-01-26",
    clipCount: "0",
    outageStatus: "",
  },
  {
    id: 27,
    source: "SCSO",
    date: "2022-01-27",
    clipCount: "56",
    outageStatus: "",
  },
  {
    id: 28,
    source: "SCSO",
    date: "2022-01-28",
    clipCount: "0",
    outageStatus: "",
  },
  {
    id: 29,
    source: "SCSO",
    date: "2022-01-29",
    clipCount: "78",
    outageStatus: "",
  },
  {
    id: 30,
    source: "SCSO",
    date: "2022-01-30",
    clipCount: "0",
    outageStatus: "",
  },
];*/