// pages/api/yourApiRoute.js

import { User } from "@/lib/user";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb();

    const posts = await User.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const POST = async (request) => {
  try {
    connectToDb();

    // Parse the JSON body using request.json()
    const { username } = await request.json();

    console.log("Received username from the frontend:", username);

    // Do whatever you need to do with the username (e.g., save it to the database)
    const user = await User.create({ username });

    return NextResponse.json(user);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to process the username on the server!");
  }
};
