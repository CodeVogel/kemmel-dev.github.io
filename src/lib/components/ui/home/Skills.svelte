<script>
   import ClipSvg from '$lib/components/ui/svg/ClipSvg.svelte';

   const gameEngines = [
      { name: 'Unity', logo: 'game_engines/unity.svg', url: 'https://unity.com/' },
      {
         name: 'Unreal Engine',
         logo: 'game_engines/unreal.svg',
         url: 'https://www.unrealengine.com/'
      },
      { name: 'Godot', logo: 'game_engines/godot.svg', url: 'https://godotengine.org/' }
   ];

   const designTools = [
      { name: 'Blender', logo: 'design_tools/blender.svg', url: 'https://www.blender.org/' },
      { name: 'Figma', logo: 'design_tools/figma.svg', url: 'https://www.figma.com/' },
      {
         name: 'Adobe Photoshop',
         logo: 'design_tools/photoshop.svg',
         url: 'https://www.adobe.com/products/photoshop.html'
      },
      {
         name: 'Adobe Illustrator',
         logo: 'design_tools/illustrator.svg',
         url: 'https://www.adobe.com/products/illustrator.html'
      },
      {
         name: 'Adobe Lightroom',
         logo: 'design_tools/lightroom.svg',
         url: 'https://www.adobe.com/products/photoshop-lightroom.html'
      }
   ];

   const technologies = [
      { name: 'Svelte', logo: 'technologies/svelte.svg', url: 'https://svelte.dev/' },
      { name: 'Vue', logo: 'technologies/vue.svg', url: 'https://vuejs.org/' },
      { name: 'React', logo: 'technologies/react.svg', url: 'https://reactjs.org/' },
      { name: 'Tailwind', logo: 'technologies/tailwind.svg', url: 'https://tailwindcss.com/' },
      {
         name: 'Bootstrap',
         logo: 'technologies/bootstrap.svg',
         url: 'https://getbootstrap.com/'
      },
      {
         name: 'Xamarin Forms',
         logo: 'technologies/xamarin.svg',
         url: 'https://dotnet.microsoft.com/apps/xamarin/xamarin-forms'
      },
      { name: 'Umbraco', logo: 'technologies/umbraco.svg', url: 'https://umbraco.com/' }
   ];

   const languages = [
      {
         name: 'C',
         logo: 'langs/c.svg',
         url: 'https://en.wikipedia.org/wiki/C_(programming_language)'
      },
      { name: 'C++', logo: 'langs/cplusplus.svg', url: 'https://isocpp.org/' },
      {
         name: 'C#',
         logo: 'langs/csharp.svg',
         url: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
      },
      {
         name: 'Javascript',
         logo: 'langs/javascript.svg',
         url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      },
      {
         name: 'Typescript',
         logo: 'langs/typescript.svg',
         url: 'https://www.typescriptlang.org/'
      },
      { name: 'Python', logo: 'langs/python.svg', url: 'https://www.python.org/' },
      { name: 'Java', logo: 'langs/java.svg', url: 'https://www.java.com/' },
      { name: 'SQL', logo: 'langs/sql.svg', url: 'https://en.wikipedia.org/wiki/SQL' },
      { name: 'Kotlin', logo: 'langs/kotlin.svg', url: 'https://kotlinlang.org/' },
      { name: 'Lua', logo: 'langs/lua.svg', url: 'https://www.lua.org/' }
   ];
</script>

<h1 class="text-center">Skills</h1>

<div class="flex flex-col items-center [&_div]:m-2">
   <h3 class="text-white/50">Game Engines</h3>
   <div class="flex flex-wrap justify-center">
      {#each gameEngines as engine}
         <a class="w-16 [&_div]:hover:bg-primary" href={engine.url}>
            <ClipSvg path="logos/{engine.logo}" class="aspect-square bg-white" />
         </a>
      {/each}
   </div>

   <h3 class="text-white/50">Design Tools</h3>
   <div class="flex flex-wrap justify-center">
      {#each designTools as tool}
         <a class="w-16 [&_div]:hover:bg-primary" href={tool.url}>
            <ClipSvg path="logos/{tool.logo}" class="aspect-square bg-white" />
         </a>
      {/each}
   </div>

   <h3 class="text-white/50">Technologies</h3>
   <div class="flex flex-wrap justify-center">
      {#each technologies as tech}
         <a class="w-16 [&_div]:hover:bg-primary" href={tech.url}>
            <ClipSvg path="logos/{tech.logo}" class="aspect-square bg-white" />
         </a>
      {/each}
   </div>
</div>
