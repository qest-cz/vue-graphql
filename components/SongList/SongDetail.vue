<template>
  <div class="song-detail">
    <div class="song-detail__cover">
      img
    </div>
    <p class="song-detail__description">
      description
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({})
export default class SongDetail extends Vue {
  @Prop(String) id: string
}
</script>

<style lang="scss">
.song-detail {
  display: flex;

  &__cover {
    flex: 0 0 120px;
    position: relative;
    overflow: hidden;

    &__image {
      position: absolute;
      min-width: 100%;
      min-height: 100%;
      height: auto;
      width: auto;
    }
  }

  &__description {
    flex: 1;
    white-space: normal;
    padding: 10px 20px;
    min-height: 120px;
  }
}
</style>
