"use client";
import Link from "next/link";
import * as socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:8000");

export default function Home() {
  return (
    <main>
      <h1>Hero Section</h1>
      <Link href="/dashboard">Get Started</Link>
    </main>
  );
}
