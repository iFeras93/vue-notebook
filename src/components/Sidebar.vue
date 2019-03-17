<template>
    <div class="sidebar">
        <div v-if="notes.length >0">
            <note v-for="n in notes" :note="n"></note>
        </div>
        <div class="sidebar__content" v-else>
            Boo, no notes. Get writing!
        </div>
        <div class="sidebar__content">
            <a href="#" @click.prevent="clearCurrentNote">Start a new note</a>
        </div>
    </div>
</template>

<script>
    import note from '../components/Note';
    import {mapGetters, mapActions} from 'vuex';

    export default {
        components: {
            note,
        },
        computed: {
            ...mapGetters([
                'notes'
            ]),
        },
        methods: {
            ...mapActions([
                'clearCurrentNote'
            ]),
        }

    }
</script>
<style lang="scss" scoped>
    .sidebar {
        background-color: #f9f9f9;
        flex: 1;
        height: 100%;
        min-width: 28%;
        border-right: 2px solid #eee;
        overflow-y: scroll;

        &__content {
            padding: 30px;

            a {
                text-decoration: none;
                color: inherit;
            }
        }
    }
</style>
