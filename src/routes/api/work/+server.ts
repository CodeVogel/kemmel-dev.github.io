import type { WorkExperience } from '$lib/model';
import type { RequestEvent } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';


// GET /api/work
export async function GET({ fetch }: RequestEvent) {
    const response = await fetch('/experience.json');
    const workExperiences = await response.json();

    const pastWork: WorkExperience[] = [];
    const currentWork: WorkExperience[] = [];

    function ddmmyyyyToDate(dateString: string): Date {
        const [day, month, year] = dateString.split('-');
        return new Date(`${month}-${day}-${year}`);
    }

    // convert date strings to Date objects
    workExperiences.forEach((workExperience: any) => {
        const timespan = workExperience.timespan;
        timespan.startDate = ddmmyyyyToDate(timespan.startDate);
        if (timespan.endDate) {
            timespan.endDate = ddmmyyyyToDate(timespan.endDate);
            pastWork.push(workExperience);
        } else {
            currentWork.push(workExperience);
        }
    });

    // sort by start date
    currentWork.sort((a: WorkExperience, b: WorkExperience) => {
        return b.timespan.startDate.getTime() - a.timespan.startDate.getTime();
    });
    pastWork.sort((a: WorkExperience, b: WorkExperience) => {
        return b.timespan.startDate.getTime() - a.timespan.startDate.getTime();
    });

    return json({ currentWork, pastWork });
}

export const prerender = true;
