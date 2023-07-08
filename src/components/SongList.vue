<template>
  <div class="" v-if="!isPlayerVisible">
    <div class="text-yellow-300 font-bold text-3xl mb-7 text-center mt-3">
      Vuejs Music App
    </div>
    <div
      v-for="(song, songIndex) in list"
      :key="song.id"
      class="flex flex-row justify-between mb-4 cursor-pointer items-center"
      @click="playSong(songIndex)"
    >
      <div class="">
        <span class="text-yellow-300">{{ song.name }}</span>
        <br />
        <span class="text-gray-200 text-xs"
          >{{ song.artistName }} -
          <span class="text-g">{{ song.albumName }} ( {{ song.year }})</span>
        </span>
      </div>
      <div class="">
        <img class="max-h-12 rounded" :src="song.ImageSrc" />
      </div>
    </div>
  </div>
  <div class="" v-if="isPlayerVisible">
    <song-player
      :song="list[currentSongIndex]"
      @goBack="isPlayerVisible = !isPlayerVisible"
      @next="playNext"
      @previous="playPrevious"
    />
  </div>
</template>

<script>
import SongPlayer from "./SongPlayer.vue";

export default {
  components: {
    SongPlayer,
  },
  data() {
    return {
      isPlayerVisible: true,
      currentSongIndex: 0,
      list: [
        {
          id: 1,
          name: "Cheap Thrills",
          artistName: "Adam Lambert",
          albumName: "Everything",
          year: 2021,
          ImageSrc: `https://source.unsplash.com/random/400x400?date=1`,
          songSrc: `https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3`,
        },
        {
          id: 2,
          name: "Lean on",
          artistName: "Adam Levine",
          albumName: "Goind Down",
          year: 2001,
          ImageSrc: `https://source.unsplash.com/random/400x400?date=2`,
          songSrc: `https://filesamples.com/samples/audio/mp3/sample3.mp3`,
        },
        {
          id: 3,
          name: "Counting Stars",
          artistName: "Adam Hart",
          albumName: "Spice It Up",
          year: 2013,
          ImageSrc: `https://source.unsplash.com/random/400x400?date=3`,
          songSrc: `https://filesamples.com/samples/audio/mp3/sample1.mp3`,
        },
      ],
    };
  },
  methods: {
    playSong(index) {
      this.currentSongIndex = index;
      this.isPlayerVisible = true;
    },
    playNext() {
      if (this.currentSongIndex < this.list.length - 1) {
        this.currentSongIndex += 1;
      } else {
        this.currentSongIndex = 0;
      }
    },
    playPrevious() {
      if (this.currentSongIndex != 0) {
        this.currentSongIndex -= 1;
      } else {
        this.currentSongIndex = this.list.length - 1;
      }
    },
  },
};
</script>
