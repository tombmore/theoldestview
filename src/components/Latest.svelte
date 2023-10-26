<script>
    import Hub_EN from "/src/lib/contentrain/Hub/en.json";
</script>

<div class="text-white px-20 pb-20 pt-5 lg:pt-10">
    <h1 class="text-3xl underline pb-20">Latest from the community Hub</h1>
    <div class="flex flex-col lg:flex-row lg:flex-wrap">
        {#each Hub_EN.reverse() as post}
            <div style="w-auto">
                <hr>
                <div class="pt-10">
                    <a class="text-2xl link" href={post.Link}>{post.Heading}</a>
                    <p class="text-lg pt-10">{post.Description}</p>
                </div>
            </div>
        {/each}
    </div>
</div>