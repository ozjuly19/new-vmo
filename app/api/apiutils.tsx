// Import NextResponse from next/server
import { NextResponse } from "next/server";

// Define a common route call function that takes a RouteLogic function as an argument
export async function CommonRouteCall(RouteLogic: Function) {
  try {
    // Try to execute the RouteLogic function and await its result
    const responseJson = await RouteLogic();
    // Return the result of the RouteLogic function
    return responseJson;
  } catch (error) {
    // If an error occurs, log it to the console
    console.error("Fetch error: ", error);
    // Return a Next.js error response
    return NextResponse.error(); // Remove the argument from the function call
  }
}