import type { RequestEvent } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';


// GET /api/work
export async function GET({ fetch }: RequestEvent) {
    const response = await fetch('/experience.json');
    const workExperiences = await response.json();
    return json(workExperiences);
}

export const prerender = true;
