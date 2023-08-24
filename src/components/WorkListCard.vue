<template>
  <div class="worklist-card">
    <button class="btn-bookmark"></button>
    <div class="worklist-card-title">
      <h5>TOPOILLBANK {{ weel.id }}</h5>
      <span v-if="weel.workRequest === true" style="background-color: rgba(67, 176, 255, 0.15); color:rgba(67, 176, 255, 1)"
        >업무요청 중</span
      >
      <span v-if="weel.workRequest === false" style="background-color: rgba(254, 69, 113, 0.15); color:rgba(225, 69, 106, 1)"
        >요청 전</span
      >
    </div>
    <div class="worklist-card-text-box">
      <p class="worklist-card-text-title">담당 USER명</p>
      <p>MICHALE</p>
    </div>
    <div class="worklist-card-text-box">
      <p class="worklist-card-text-title">Location</p>
      <p>CA, USA 1022</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    weel: Object,
  },
};
</script>

<style>
.btn-bookmark {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 24px;
  height: 24px;
  background: url(../assets/btn-bookmark.png);
}
.worklist-card {
  position: relative;
  padding: 20px;
  text-align: left;
  background-color: #252935;
  border-radius: 8px;
  margin: 5px 20px;
}
.worklist-card-title {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.worklist-card-title h5 {
  color: #00986e;
  font-size: 24px;
  font-weight: 700;
  margin-right: 10px;
}
.worklist-card-title span {
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  padding: 2px 10px;
  border-radius: 12px;
  color: rgba(67, 176, 255, 1);
  background-color: rgba(67, 176, 255, 0.15);
}
.worklist-card-text-box:not(:last-child) {
  margin-bottom: 10px;
}
.worklist-card-text-title {
  font-size: 12px;
  color: #9c9ca5;
}
</style>
