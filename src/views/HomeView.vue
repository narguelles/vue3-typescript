<template>
  <div class="home">
    <div class="flex justify-center">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>

    <HelloWorld
      msg="Welcome to Your Vue.js + TypeScript App + Element Plus + Tailwind"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
});
</script>
