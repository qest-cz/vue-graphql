<template>
  <md-list-item class="song">
    <div class="song" :class="{ 'song--isOpen': isOpen }">
      <div class="song__header">
        <div class="song-list__col">
          <md-button @click="console.log">
            <md-icon
              class="fa fa-thumbs-o-up"
              :class="{ 'fa-thumbs-up': isLiked }"
            />
          </md-button>
        </div>
        <div class="song-list__col">
          {{ name }}
        </div>
        <div class="song-list__col">
          {{ artist }}
        </div>
        <div class="song-list__col">
          <md-button @click="toggleIsOpen">
            <md-icon
              class="fa fa-caret-down"
              :class="{ 'fa-caret-up': isOpen }"
            />
          </md-button>
        </div>
      </div>
      <div v-if="isOpen" class="song__content">
        cool detail
      </div>
    </div>
  </md-list-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import SongDetail from './SongDetail.vue'

@Component({ components: { SongDetail } })
export default class Song extends Vue {
  @Prop(String) id: string
  @Prop(String) name: string
  @Prop(String) artist: string
  @Prop(Boolean) isLiked: boolean

  isOpen = false

  toggleIsOpen() {
    this.isOpen = !this.isOpen
  }
}
</script>

<style lang="scss" scoped>
.song {
  display: flex;
  flex-flow: column;
  width: 100%;

  &--isOpen {
    background: #5a5858;
  }

  .md-button {
    height: auto;
    margin: 0;

    &::before {
      display: none;
    }
  }

  &__header {
    padding: 0 5px;
    display: flex;
    min-height: 48px;
    align-items: center;
  }

  &__content {
    width: 100%;
  }
}
</style>
