<script>
    import { base } from '$app/paths';
    import Hub_EN from "/src/lib/contentrain/Hub/en.json";
</script>

<div class="text-white px-20 pb-20 pt-5 lg:pt-10">
    <a class="text-3xl link" href="/hub">Latest from the Community Hub</a>
    <div class="pt-20 flex flex-col lg:flex-row lg:flex-wrap">
        {#each Hub_EN.reverse() as post}
            <div style="w-auto">
                <hr>
                <div class="pt-10">
                    <a class="text-2xl link" href={`${base}/hub/${post.Slug}`}>{post.Heading}</a>
                    <p class="text-md pt-3">{post.Description}</p>
                </div>
            </div>
        {/each}
    </div>
</div>