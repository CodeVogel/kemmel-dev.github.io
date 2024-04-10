import type { WorkExperience } from "$lib/model";

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const response = await fetch('/api/work');
	const workExperiences: WorkExperience[] = await response.json();
	return { workExperiences };
}