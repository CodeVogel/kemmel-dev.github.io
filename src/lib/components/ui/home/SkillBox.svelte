<script lang="ts">
   import IconBox from '$lib/components/ui/icons/IconBox.svelte';
   import type { LinkIcon, Skill } from '$lib/model';

   export let skills: Skill[];

   function skillsToLinkIcons(skills: Skill[]): LinkIcon[] {
      return skills.map((skill) => {
         return {
            title: skill.title,
            svgPath: skill.svgPath,
            link: skill.link
         };
      });
   }
</script>

<IconBox icons={skillsToLinkIcons(skills)} />
