<script lang="ts">
	import { onMount } from 'svelte';
	import Instagram from '@lucide/svelte/icons/instagram';
	import Mail from '@lucide/svelte/icons/mail';
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import {
		bgOne,
		bgTwo,
		bgThree,
		navLinks,
		professional,
		extracurriculars,
		projects,
		typewriterText,
		PAUSE_MS
	} from '$lib/portfolio-data';

	let visibleLength = $state(0);
	let direction = $state(1);
	let paused = $state(false);

	onMount(() => {
		let pauseTimeout: number;
		const interval = setInterval(() => {
			if (paused) return;
			visibleLength += direction;
			if (visibleLength >= typewriterText.length) {
				visibleLength = typewriterText.length;
				direction = -1;
				paused = true;
				pauseTimeout = setTimeout(() => {
					paused = false;
				}, PAUSE_MS);
			} else if (visibleLength <= 0) {
				visibleLength = 0;
				direction = 1;
			}
		}, 280);
		return () => {
			clearInterval(interval);
			clearTimeout(pauseTimeout);
		};
	});
</script>

<div class="min-h-screen flex flex-col">
<nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-6 md:gap-10 py-4 bg-white/25 backdrop-blur-2xl border-b border-white/35">
	{#each navLinks as link}
		<a
			href={link.href}
			class="text-white font-medium text-sm md:text-base hover:text-white/90 transition-colors"
			target={link.external ? '_blank' : undefined}
			rel={link.external ? 'noopener noreferrer' : undefined}
		>
			{link.label}
		</a>
	{/each}
</nav>

<main class="flex-1">
	<section
		id="home"
		class="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 bg-cover bg-center bg-no-repeat"
		style="background-image: url({bgOne});"
	>
		<div
			class="w-full max-w-2xl mx-auto p-6 md:p-8 bg-white/30 backdrop-blur-2xl border border-white/35 rounded-xl text-white shadow-xl"
		>
			<p class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
				<span class="inline-block">{typewriterText.slice(0, visibleLength)}</span
				>{#if visibleLength < typewriterText.length}
					<span
						class="inline-block w-0.5 h-[1em] bg-white align-baseline animate-pulse"
						aria-hidden="true"
					></span
					>{/if}
				<br />
				I'm David and graduating high school this year!
			</p>
			<p class="mt-4 text-base md:text-lg text-white/95 leading-relaxed">
				I'm interested in finance + SWE. Currently learning primarily web dev but want to
				expand into game dev and AI/ML at some point soon. By the way, I took all these bg photos!
			</p>
		</div>
		<div
			class="absolute bottom-0 left-0 right-0 h-px bg-white/30"
			aria-hidden="true"
		></div>
	</section>

	<section
		id="experience"
		class="relative py-16 md:py-24 px-4 bg-cover bg-center bg-no-repeat flex flex-col items-center"
		style="background-image: url({bgTwo});"
	>
		<div
			class="w-full max-w-3xl mx-auto p-6 md:p-10 bg-white/30 backdrop-blur-2xl border border-white/35 rounded-xl text-white shadow-xl"
		>
			<h2 class="text-2xl md:text-3xl font-bold tracking-tight mb-8">Experience</h2>

			<h3 class="text-lg font-semibold text-white/95 mb-4">Professional</h3>
			<ul class="space-y-5 mb-10">
				{#each professional as item}
					<li class="flex gap-4 items-start">
						<div class="shrink-0 w-12 h-12 rounded-lg overflow-hidden" aria-hidden="true">
							<img src={item.logo} alt="" class="w-12 h-12 object-contain" />
						</div>
						<div>
							<p class="font-semibold">
								{item.title}{#if item.org}<span class="font-semibold text-white/90">{' '}@ {item.org}</span>{/if}
							</p>
							<p class="text-sm text-white/80 mt-0.5">{item.when}</p>
						</div>
					</li>
				{/each}
			</ul>

			<h3 class="text-lg font-semibold text-white/95 mb-4">Extracurriculars</h3>
			<ul class="space-y-5">
				{#each extracurriculars as item}
					<li class="flex gap-4 items-center">
						<div class="shrink-0 w-12 h-12 rounded-lg overflow-hidden" aria-hidden="true">
							<img src={item.logo} alt="" class="w-12 h-12 object-contain" />
						</div>
						<div>
							<p class="font-semibold">{item.title}</p>
							{#if item.desc}
								<p class="text-sm text-white/80 mt-0.5">{item.desc}</p>
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		</div>
		<div
			class="absolute bottom-0 left-0 right-0 h-px bg-white/30"
			aria-hidden="true"
		></div>
	</section>
	<section
		id="projects"
		class="relative py-16 md:py-24 px-4 bg-cover bg-center bg-no-repeat"
		style="background-image: url({bgThree});"
	>
		<div class="w-full max-w-6xl mx-auto">
			<h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white mb-8 text-center">
				Projects
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each projects as project}
					{@const cardHref = 'url' in project && project.url ? project.url : project.repo}
					<div
						class="rounded-xl bg-black/50 backdrop-blur-[40px] border border-white/25 text-white shadow-xl transition-transform hover:scale-[1.02] hover:border-white/40 overflow-hidden"
					>
						<a
							href={cardHref}
							target="_blank"
							rel="noopener noreferrer"
							class="block"
						>
							<div
								class="relative h-36 bg-white/20 flex items-center justify-center text-white/60 text-sm overflow-hidden"
								aria-hidden="true"
							>
								{#if project.image}
									<img
										src={project.image}
										alt=""
										class="absolute inset-0 w-full h-full object-cover"
										style="object-position: center {project.imagePosition === 'center' ? '50%' : '70%'};"
									/>
								{:else}
									Project
								{/if}
							</div>
							<div class="p-5">
								<h3 class="text-lg font-bold mb-2">{project.name}</h3>
								<p class="text-sm text-white/90 leading-relaxed mb-4">
									{project.description}
								</p>
								<div class="flex flex-wrap gap-2 mb-4">
									{#each project.tech as tag}
										<span class="px-2 py-1 bg-white/20 rounded-full text-xs">
											{tag}
										</span>
									{/each}
								</div>
							</div>
						</a>
						<div class="px-5 pb-5">
							<a
								href={project.repo}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1.5 text-sm text-white/90 hover:text-white"
							>
								<svg
									class="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.567 1.032 1.567 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
										clip-rule="evenodd"
									/>
								</svg>
								GitHub
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>

<footer class="shrink-0 py-10 px-4 bg-neutral-900/75 backdrop-blur-2xl border-t border-white/20 text-white text-center">
	<p class="text-lg font-medium mb-6">Always looking to connect with others</p>
	<nav class="flex flex-wrap items-center justify-center gap-3">
		<a
			href="https://instagram.com/zkc.david"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/20 text-white/90 hover:bg-black/50 hover:text-white transition-colors"
		>
			<Instagram size={22} />
			<span class="hidden md:inline">@zkc.david</span>
		</a>
		<a
			href="mailto:dzkchen@gmail.com"
			class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/20 text-white/90 hover:bg-black/50 hover:text-white transition-colors"
		>
			<Mail size={22} />
			<span class="hidden md:inline">dzkchen@gmail.com</span>
		</a>
		<a
			href="https://github.com/dzkchen"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/20 text-white/90 hover:bg-black/50 hover:text-white transition-colors"
		>
			<Github size={22} />
			<span class="hidden md:inline">GitHub</span>
		</a>
		<a
			href="https://www.linkedin.com/in/davidzekaichen/"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/20 text-white/90 hover:bg-black/50 hover:text-white transition-colors"
		>
			<Linkedin size={22} />
			<span class="hidden md:inline">LinkedIn</span>
		</a>
	</nav>
</footer>
</div>
