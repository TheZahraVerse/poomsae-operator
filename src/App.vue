<script setup>
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";

const greetMsg = ref("");
const name = ref("");

async function greet() {
  greetMsg.value = await invoke("greet", { name: name.value });
}
</script>

<template>
  <main class="container mx-auto p-8 text-center">
    <h1 class="text-3xl font-bold mb-6">Welcome to Tauri + Vue</h1>

    <div class="flex justify-center gap-6 mb-6">
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="h-16" alt="Vite logo" />
      </a>
      <a href="https://tauri.app" target="_blank">
        <img src="/tauri.svg" class="h-16" alt="Tauri logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="h-16" alt="Vue logo" />
      </a>
    </div>

    <form class="flex justify-center gap-3" @submit.prevent="greet">
      <input
        v-model="name"
        placeholder="Enter a name..."
        class="border px-4 py-2 rounded"
      />
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
        Greet
      </button>
    </form>

    <p class="mt-4 text-lg">{{ greetMsg }}</p>
  </main>
</template>