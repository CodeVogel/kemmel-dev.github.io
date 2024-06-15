import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
   const workResponse = await fetch('/api/work');
   const workData = await workResponse.json();
   return { "currentWork": workData.currentWork, "pastWork": workData.pastWork };
}
