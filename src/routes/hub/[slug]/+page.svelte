<script>
    import { marked } from "marked";

    export let data;
</script>

<div class="w-full py-10 lg:py-20 flex flex-row justify-center">
    <div class="card py-5 lg:py-10 px-20">
        <div class="card-body">
            <p>{data.date} | Written by {data.author}</p>
            <h1 class="py-10 font-yuri text-3xl lg:text-5xl">{data.heading}</h1>
            <p>{data.description}</p>
            <p class="p-10 border">
                {@html marked(data.content)}
            </p>
        </div>
    </div>
</div>  