import { NextResponse } from "next/server"
import path from "path";
import { writeFile } from "fs/promises";

export async function RouteLogic(file: File) {
    // Convert the file data to a Buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Replace spaces in the file name with underscores
    const filename = file.name.replaceAll(" ", "_");
    console.log(filename);

    try {
        // Write the file to the specified directory (public/assets) with the modified filename
        await writeFile(
            path.join(process.cwd(), "app/clips-container", filename),
            buffer
        );

        // Return a JSON response with a success message and a 201 status code
        return NextResponse.json({ Message: "Success", status: 201 });
    } catch (error) {
        // If an error occurs during file writing, log the error and return a JSON response with a failure message and a 500 status code
        console.log("Error occurred ", error);
        return NextResponse.json({ Message: "Failed", status: 500 });
    }
}