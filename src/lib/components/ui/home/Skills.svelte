<script lang="ts">
   import SkillBox from '$lib/components/ui/home/SkillBox.svelte';
   import skills from '$lib/data/skills.json';
</script>

<h1 class="text-center">Skills</h1>

<div class="flex flex-col items-center [&_div]:m-2">
   <h3 class="text-white/50">Game Engines</h3>
   <SkillBox skills={skills.gameEngines} />
   <h3 class="text-white/50">Design Tools</h3>
   <SkillBox skills={skills.designTools} />
   <h3 class="text-white/50">Technologies</h3>
   <SkillBox skills={skills.technologies} />
   <h3 class="text-white/50">Programming Languages</h3>
   <SkillBox skills={skills.languages} />
</div>
