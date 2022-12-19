<script>
    import { page } from '$app/stores'
</script>

<h1>{$page.status}:{$page.error?.message}</h1>

<h2>sorry something was wrong</h2>