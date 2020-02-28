<template>
  <song-list />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SongList from '~/components/SongList/index.vue'

@Component({ components: { SongList } })
export default class IndexPage extends Vue {}
</script>
