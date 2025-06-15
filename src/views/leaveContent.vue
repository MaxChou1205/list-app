<template>
  <div class="flex flex-col items-center p-6 max-w-2xl mx-auto">
    <div
      class="w-full p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md cursor-pointer hover:bg-gray-50"
      @click="copyToClipboard"
    >
      <div v-if="leaveContent" class="whitespace-pre-line">
        {{ leaveContent }}
      </div>
      <div v-else class="text-center text-gray-500">正在產生離職信...</div>
      <div v-if="copied" class="mt-2 text-green-500 text-sm">
        已複製到剪貼簿！
      </div>
    </div>
    <button
      class="button flex items-center justify-center"
      @click="regenerateContent"
    >
      <span>重新產生</span>
    </button>
  </div>
</template>

<script setup>
import { workflow } from "../api/workflow";
import { ref } from "vue";

const leaveContent = ref("");
const copied = ref(false);

const fetchLeaveContent = async () => {
  try {
    leaveContent.value = "";
    const res = await workflow.getLeaveContent();
    leaveContent.value = res.data.response;
  } catch (error) {
    console.error("獲取離職信內容失敗", error);
    leaveContent.value = "無法產生離職信，請稍後再試。";
  }
};

const copyToClipboard = () => {
  if (!leaveContent.value) return;

  navigator.clipboard
    .writeText(leaveContent.value)
    .then(() => {
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2000);
    })
    .catch((err) => {
      console.error("複製失敗:", err);
    });
};

const regenerateContent = () => {
  fetchLeaveContent();
};

fetchLeaveContent();
</script>

<style scoped>
</style>
