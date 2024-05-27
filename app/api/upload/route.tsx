import { NextResponse } from 'next/server';
import { RouteLogic } from './routelogic';

// Define an async function to handle POST requests
export async function POST(request: Request) {
    // Parse the incoming form data
    const formData = await request.formData();

    // Get the file from the form data
    const file = formData.get("file");

    // Check if a file is received
    if (!file) {
        // If no file is received, return a JSON response with an error and a 400 status code
        return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    // Check if it's actually a file yo
    if (!(file instanceof File)) {
        return NextResponse.json({ error: 'File is not an instance of File.' }, { status: 400 });
    }

    const response = await RouteLogic(file);

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