<template>
  <audio :src="song.songSrc" preload="auto" autoplay ref="audioPlayer"></audio>
  <div class="text-white">
    <div class="flex flex-row justify-between items-center">
      <button class="text-base" @click="goBack">Back</button>
      <div class="text-yellow-300 font-bold text-base">Vuejs Music App</div>
    </div>
    <div class="">
      <img :src="song.ImageSrc" alt="" class="rounded mt-8 mb-4" />
      <div class="text-center">
        <p class="text-yellow-300">{{ song.name }}</p>
        <p class="text-gray-200">
          {{ song.artistName }} - {{ song.albumName }}
        </p>
        <p class="text-gray-400">{{ song.year }}</p>
      </div>
    </div>
    <div class="grid grid-cols-3 items-center mt-10">
      <div class="flex items-center justify-center">
        <button @click="previous">Previous</button>
      </div>
      <div class="flex items-center justify-center">
        <button
          class="rounded-full bg-yellow-300 h-24 w-24 text-black font-bold"
          @click="togglePlay"
        >
          {{ isPlaying ? "Pause" : "Play" }}
        </button>
      </div>
      <div class="flex items-center justify-center">
        <button @click="next">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    song: {
      id: Number,
      name: String,
      artistName: String,
      albumName: String,
      year: Number,
      ImageSrc: String,
      songSrc: String,
    },
  },
  data() {
    return {
      isPlaying: true,
    };
  },
  emits: ["goBack", "next", "previous"],
  methods: {
    goBack() {
      this.$emit("goBack");
    },
    next() {
      this.$emit("next");
    },
    togglePlay() {
      if (this.isPlaying) {
        this.$refs.audioPlayer.play();
      } else {
        this.$refs.audioPlayer.pause();
      }
      this.isPlaying = !this.isPlaying;
    },
    previous() {
      this.$emit("previous");
    },
  },
};
</script>
