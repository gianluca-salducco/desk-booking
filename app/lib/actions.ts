'use server'

import { cookies } from "next/headers";

export async function signIn(formData: any) {
  try {
    const res = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const access_token = await res.json()
    cookies().set('token', access_token.access_token)
    return access_token;
  } catch (err) {
    console.log(err);
  }
}
