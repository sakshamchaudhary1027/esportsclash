import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const tournament = await prisma.tournament.create({
      data: {
        title: body.title,
        game: body.game,
        prize: body.prize,
        poster: body.poster,
        description: body.description,
        date: new Date(body.date),
        status: "LIVE",
        organizerId: "admin-temp-id",
      },
    });

    return NextResponse.json(tournament);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create tournament" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const tournaments = await prisma.tournament.findMany({
    where: { status: "LIVE" },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(tournaments);
}
