<script lang="ts">
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    import Fraction from 'fraction.js';

    const searchParams = browser ? new URLSearchParams(document.location.search) : new URLSearchParams();

    let slideDuration: string = searchParams.get("sd") ?? "[4:3]";
    let slideBpm: number = Number(searchParams.get("sb") ?? "155");
    let componentCount: number = Number(searchParams.get("c") ?? "3");

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
            const delay = new Fraction(len).div(componentDivisor).mul(i).add(0.25);
            const bpm = new Fraction(slideBpm).mul(0.25).div(delay);
            const divisor = new Fraction(componentDivisor).div(len).mul(delay).mul(4);
            
            const fraction = new Fraction(1).div(divisor);
            const [num, den] = fraction.toFraction().split("/");

            components.push(`[${+bpm.valueOf().toFixed(13)}#${den}:${num}]`);
        }

        return [components, ""]
    }

    $: [components, error] = calculateComponents(slideDuration, slideBpm, componentCount)
</script>

<svelte:head>
    <title>FESTiVAL Slide Calculator</title>
    <meta property="og:title" content="FESTiVAL Slide Calculator" />
    <meta property="og:description" content="Split a FESTiVAL CHAIN SLIDE into smaller slides of the same duration. The slide delay is also set, so that the next slide immediately starts when the previous one ends." />
    <meta property="og:url" content="https://beerpiss.github.io/festival-slide-calculation/" />
    <meta property="og:image" content="https://beerpiss.github.io/festival-slide-calculation/favicon.png" />
</svelte:head>
<div>
    All the calculations are assuming that the slides start at (nearly) the same time.<br>
    To do this without making the slide yellow, use pseudo-EACH (the backtick character <code>`</code>):
    <pre><code>1-3[12:3]`3-5[77.5#8:1]`5-7[51.6666666666667#12:1]</code></pre>
    or put an extremely small delay between them:
    <pre><code>{`|| Assuming the beat divisor before this is {8}\n{9999}1-3[12:3],3-5[77.5#8:1],{8}5-7[51.6666666666667#12:1]`}</code></pre>
</div>
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
