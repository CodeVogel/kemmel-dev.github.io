import type { WorkExperience } from '$lib/model';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    const response = await fetch('/api/work');
    const data = await response.json();
    return { "currentWork": data.currentWork, "pastWork": data.pastWork };
}
