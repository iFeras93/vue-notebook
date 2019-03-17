<template>
    <div id="app">
        <Sidebar></Sidebar>
        <Pad></Pad>
    </div>
</template>
<script>
    import Sidebar from '../components/Sidebar';
    import Pad from '../components/Pad';

    export default {
        components: {
            Sidebar, Pad
        }
    }
</script>