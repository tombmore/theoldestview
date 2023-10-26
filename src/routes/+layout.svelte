<script>
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<Navbar />
<slot />
<Footer />

<style global lang="postcss">
    :global(:root) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :global(html, body) {
        overflow-x: hidden;
        font-family: 'Poppins', sans-serif;
    }
</style>