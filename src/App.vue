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
  <div data-theme="corporate" class="font-operator min-h-screen bg-base-200 flex items-center justify-center">
    <div class="card bg-base-100 w-96 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">
          Poomsae Operator
        </h2>

        <p>
          DaisyUI is working!
        </p>

        <div class="card-actions justify-end">
          <button class="btn btn-secondary">
            Start Match
          </button>
        </div>
      </div>
    </div>
  </div>
</template>