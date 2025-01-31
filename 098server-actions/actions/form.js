"use server"
import fs from "fs/promises"

export const submitAction = async (e) => {
    "use server"
    console.log(e.get("name"),e.get("email"));
    fs.writeFile("harry.txt", `Name: ${e.get("name")}\nEmail: ${e.get("email")}`)
}