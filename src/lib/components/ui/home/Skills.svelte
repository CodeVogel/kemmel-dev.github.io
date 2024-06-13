<script lang="ts">
   import IconBox from '$lib/components/ui/icons/IconBox.svelte';
   import type { LinkIcon } from '$lib/model';

   let gameEngines: LinkIcon[] = [
      { name: 'Unity', icon: 'game_engines/unity.svg', url: 'https://unity.com/' },
      {
         name: 'Unreal Engine',
         icon: 'game_engines/unreal.svg',
         url: 'https://www.unrealengine.com/'
      },
      { name: 'Godot', icon: 'game_engines/godot.svg', url: 'https://godotengine.org/' }
   ];

   const designTools: LinkIcon[] = [
      { name: 'Blender', icon: 'design_tools/blender.svg', url: 'https://www.blender.org/' },
      { name: 'Figma', icon: 'design_tools/figma.svg', url: 'https://www.figma.com/' },
      {
         name: 'Adobe Photoshop',
         icon: 'design_tools/photoshop.svg',
         url: 'https://www.adobe.com/products/photoshop.html'
      },
      {
         name: 'Adobe Illustrator',
         icon: 'design_tools/illustrator.svg',
         url: 'https://www.adobe.com/products/illustrator.html'
      },
      {
         name: 'Adobe Lightroom',
         icon: 'design_tools/lightroom.svg',
         url: 'https://www.adobe.com/products/photoshop-lightroom.html'
      }
   ];

   const technologies: LinkIcon[] = [
      { name: 'Svelte', icon: 'technologies/svelte.svg', url: 'https://svelte.dev/' },
      { name: 'Vue', icon: 'technologies/vue.svg', url: 'https://vuejs.org/' },
      { name: 'React', icon: 'technologies/react.svg', url: 'https://reactjs.org/' },
      { name: 'Tailwind', icon: 'technologies/tailwind.svg', url: 'https://tailwindcss.com/' },
      {
         name: 'Bootstrap',
         icon: 'technologies/bootstrap.svg',
         url: 'https://getbootstrap.com/'
      },
      {
         name: 'Xamarin Forms',
         icon: 'technologies/xamarin.svg',
         url: 'https://dotnet.microsoft.com/apps/xamarin/xamarin-forms'
      },
      { name: 'Umbraco', icon: 'technologies/umbraco.svg', url: 'https://umbraco.com/' }
   ];

   const languages: LinkIcon[] = [
      {
         name: 'C',
         icon: 'langs/c.svg',
         url: 'https://en.wikipedia.org/wiki/C_(programming_language)'
      },
      { name: 'C++', icon: 'langs/cplusplus.svg', url: 'https://isocpp.org/' },
      {
         name: 'C#',
         icon: 'langs/csharp.svg',
         url: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
      },
      {
         name: 'Javascript',
         icon: 'langs/javascript.svg',
         url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      },
      {
         name: 'Typescript',
         icon: 'langs/typescript.svg',
         url: 'https://www.typescriptlang.org/'
      },
      { name: 'Python', icon: 'langs/python.svg', url: 'https://www.python.org/' },
      { name: 'Java', icon: 'langs/java.svg', url: 'https://www.java.com/' },
      { name: 'SQL', icon: 'langs/sql.svg', url: 'https://en.wikipedia.org/wiki/SQL' },
      { name: 'Kotlin', icon: 'langs/kotlin.svg', url: 'https://kotlinlang.org/' },
      { name: 'Lua', icon: 'langs/lua.svg', url: 'https://www.lua.org/' }
   ];
</script>

<h1 class="text-center">Skills</h1>

<div class="flex flex-col items-center [&_div]:m-2">
   <h3 class="text-white/50">Game Engines</h3>
   <IconBox icons={gameEngines} />
   <h3 class="text-white/50">Design Tools</h3>
   <IconBox icons={designTools} />
   <h3 class="text-white/50">Technologies</h3>
   <IconBox icons={technologies} />
   <h3 class="text-white/50">Programming Languages</h3>
   <IconBox icons={languages} />
</div>
