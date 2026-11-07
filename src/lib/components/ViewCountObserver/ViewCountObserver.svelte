<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/env';
	import { page } from '$app/stores';

	export let slug: string;

	const handleView = async () => {
		const newView = {
			viewed: true,
			post: slug
		};
		fetch('/api/viewCount', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newView)
		})
			.then((response) => response.ok)
			.then(() => console.log('view count sent'))
			.catch((error) => console.log('view count failed to send', error));
	};

	let container: HTMLDivElement;
	let observer: IntersectionObserver;

	onMount(() => {
		// only update view count when user is not logged in
		if (browser && !$page.data.session) {
			const handleIntersect = (
				entries: IntersectionObserverEntry[],
				observer: IntersectionObserver
			) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						observer.unobserve(entry.target);
						handleView();
					}
				});
			};
			const options = { threshold: 1, rootMargin: '100% 0% -100%' };
			observer = new IntersectionObserver(handleIntersect, options);
			observer.observe(container);
		}
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});
</script>

<!-- @migration-task could not auto-migrate `$app/stores` to `$app/state`: legacy `export let` props; migrate manually -->
<div bind:this={container}><slot></slot></div>
