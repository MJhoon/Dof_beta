<template>
  <div class="worklist-card">
    <button class="btn-bookmark"></button>
    <div class="worklist-card-header">
      <div class="worklist-card-title">
        <h5>TOPOILLBANK</h5>
        <span
          style="
            background-color: rgba(253, 202, 113, 0.15);
            color: rgba(255, 185, 63, 1);
          "
          >업무요청 중</span
        >
      </div>
      <div class="worklist-card-sub-title">
        <p>업무기간</p>
        <p>오늘 즉시 요청</p>
      </div>
    </div>
    <div class="worklist-card-text-box">
      <p class="worklist-card-text-title">Operating Agency</p>
      <p>SOIL</p>
    </div>
    <div class="worklist-card-text-box">
      <p class="worklist-card-text-title">Location</p>
      <p>885 Maude Ave, Mountain View, CA 94043</p>
    </div>
    <div class="flex">
      <div class="worklist-card-text-box">
        <p class="worklist-card-text-title">업무 종류</p>
        <p>즉시 요청</p>
      </div>
      <div class="worklist-card-text-box">
        <p class="worklist-card-text-title">작업 종류</p>
        <p>Oli Pick Up</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    weel: Object,
  }
};
</script>

<style></style>
