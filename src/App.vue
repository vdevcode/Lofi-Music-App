<template>
  <div class="container p-5 bg-black mx-auto top-0 w-screen h-screen">
    <song-list />
  </div>
</template>

<script>
import SongList from "./components/SongList.vue";

export default {
  name: "App",
  components: {
    SongList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
  border: 0;
  width: 100%;
}
</style>
