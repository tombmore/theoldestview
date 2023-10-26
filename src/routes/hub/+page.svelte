<script>
    export let data;
</script>

<div class="hub-container">
    {#each data.posts.reverse() as post}
        <div class="hub-post py-20 flex flex-col items-center lg:flex-row lg:flex-wrap">
            <img src={post.Image} alt="" class="px-5">
            <div class="text-white p-5">
                <p class="pb-10">{post.Date}</p>
                <h1 class="text-4xl">{post.Heading}</h1>
                <p class="text-xl pt-5 pb-10">{post.Description}</p>
                <a class="link" href={`/hub/${post.Slug}`} target="_blank">READ MORE</a>
            </div>
        </div>
    {/each}
</div>