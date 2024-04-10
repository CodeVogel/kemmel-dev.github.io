
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  
    const response = await fetch('/src/content/experience.json');
    const workExperience = await response.json();
    return {
      workExperience
    }; 
}