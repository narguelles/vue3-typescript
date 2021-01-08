<template>
  <main class="font-sans bg-white">
    <div>
      <section class="bg-white mt-20">
        <div class="max-w-2xl px-6 text-center mx-auto">
          <h2 class="text-3xl font-semibold text-gray-800">
            Vue 3 + Typescript + Tailwind + Element UI Plus.
          </h2>

          <div class="flex items-end justify-center mt-16">
            <h5 class="text-lg ">Count: {{ getCount }}</h5>
          </div>
          <div class="flex items-end justify-center mt-16">
            <el-button type="primary" plain @click="increment"
              >Increment</el-button
            >
          </div>
          {{ getData }}
        </div>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { useStore } from "@/store";
import { CountActionTypes } from "@/store/modules/types/action-types";

export default defineComponent({
  name: "Home",
  computed: {
    ...mapGetters(["getCount", "getData"]),
  },
  methods: {
    increment() {
      const store = useStore();
      store.dispatch(CountActionTypes.FETCH_API, null);
    },
  },
});
</script>
