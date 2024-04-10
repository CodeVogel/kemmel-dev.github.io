import { json } from "@sveltejs/kit";

// GET /api/work
export async function GET({fetch}) {
	const response = await fetch("/experience.json");
	const workExperiences = await response.json();
	return json(workExperiences);
}

export const prerender = true;