<script>
    import { marked } from "marked";

    export let data;
</script>

<div id="news-container" class="flex flex-col items-center">
    <div class="card bg-base-100 shadow-xl w-2/3 mt-20">
    <div class="card-body">
        {@html marked(data.heading)}
    </div>
    </div>
</div>  