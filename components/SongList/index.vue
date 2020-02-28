<template>
  <md-list class="song-list">
    <list-header />
      <div>songasd list</div>
  </md-list>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import Song from './Song.vue'
import ListHeader from './ListHeader.vue'

@Component({
  components: { Song, ListHeader }
})
export default class SongList extends Vue {}
</script>

<style lang="scss">
.song-list {
  &__col {
    flex: 1;

    &:first-child,
    &:last-child {
      flex: 0 0 88px;
    }
  }
}
</style>
