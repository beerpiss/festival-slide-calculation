<script lang="ts">
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';

    const searchParams = browser ? new URLSearchParams(document.location.search) : new URLSearchParams();

    let slideDuration: string = searchParams.get("sd") ?? "[3:1]";
    let slideBpm: number = Number(searchParams.get("sb") ?? "1");
    let componentCount: number = Number(searchParams.get("c") ?? "1");

    function copyLink() {
        goto(
            "?" +
            new URLSearchParams({
                "sd": slideDuration,
                "sb": slideBpm.toString(),
                "c": componentCount.toString(),
            }),
            { replaceState: true }
        )
    }

    function parseSlideDuration(slideDuration: string): number[] | null {
        if (slideDuration.includes("#")) {
            // fuck it not parsing custom bpm or decimal length
            return null;
        }

        const [divisor, len] = slideDuration.replaceAll("[", "").replaceAll("]", "").split(":")
        if (Number.isNaN(parseFloat(divisor)) || Number.isNaN(parseFloat(len))) {
            return null;
        }
        return [parseFloat(len), parseFloat(divisor)];
    }

    function calculateComponents(slideDuration: string, slideBpm: number, componentCount: number): [string[], string] {
        if (slideBpm <= 0 || componentCount <= 0) {
            return [[], "Slide BPM or component count cannot be smaller than 0"];
        }

        let parsedSlideDuration = parseSlideDuration(slideDuration);
        if (!parsedSlideDuration) {
            return [[], "Slide duration is not valid"];
        }

        let [len, divisor] = parsedSlideDuration;
        const componentDivisor = divisor * componentCount;
        const components: string[] = [`[${componentDivisor}:${len}]`];
        for (let i = 1; i < componentCount; i++) {
            const delay = 0.25 + (len / componentDivisor) * i;
            const bpm = slideBpm * 0.25 * (1 / delay);
            const divisor = componentDivisor * delay * 4;
            components.push(`[${bpm}#${divisor}:1]`);
        }

        return [components, ""]
    }

    $: [components, error] = calculateComponents(slideDuration, slideBpm, componentCount)
</script>

<div>
    <strong>Original slide duration:</strong>
    <br />
    <input bind:value={slideDuration} />
</div>
<div>
    <strong>Slide BPM:</strong>
    <br />
    <input type="number" bind:value={slideBpm} />
</div>
<div>
    <strong>Number of components:</strong>
    <br />
    <input type="number" bind:value={componentCount} />
</div>
{#if components.length > 0}
<button on:click={copyLink}>Link to this result</button>
<div>
    Component list:
    <ul>
        {#each components as component}
            <li>{component}</li>
        {/each}
    </ul>
</div>
{:else if error.length > 0}
<div>
    ERROR: {error}
</div>
{/if}
