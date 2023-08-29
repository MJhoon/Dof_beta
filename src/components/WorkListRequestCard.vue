<template>
  <div class="worklist-card">
    <button class="btn-bookmark"></button>
    <div class="worklist-card-header">
      <div class="worklist-card-title">
        <h5>TOPOILLBANK {{ weel.id }}</h5>
        <span
          v-if="weel.workRequest === true"
          style="
            background-color: rgba(67, 176, 255, 0.15);
            color: rgba(67, 176, 255, 1);
          "
          >업무요청 중</span
        >
        <span
          v-if="weel.workRequest === false"
          style="
            background-color: rgba(254, 69, 113, 0.15);
            color: rgba(225, 69, 106, 1);
          "
          >요청 전</span
        >
      </div>
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
  top: 26px;
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
.worklist-card-header {
  margin-bottom: 20px;
}
.worklist-card-title {
  display: flex;
  align-items: center;
}
.worklist-card-title h5 {
  color: #00986e;
  font-size: 24px;
  font-weight: 700;
  margin-right: 10px;
  line-height: 150%;
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
.worklist-card-sub-title {
  display: flex;
  color: #da2f58;
}
.worklist-card-sub-title p:first-child {
  color: #c01e45;
  margin-right: 10px;
}
.worklist-card-start-date {
  display: flex;
  color: #c01e45;
}
.worklist-card-start-date p:first-child {
  color: #da2f58;
  margin-right: 10px;
}
.worklist-card-end-date {
  display: flex;
  color: #3278e1;
}
.worklist-card-end-date p:first-child {
  color: #4d8be8;
  margin-right: 10px;
}
.worklist-card-text-box:not(:last-child) {
  margin-bottom: 10px;
}
.worklist-card-text-title {
  font-size: 12px;
  color: #9c9ca5;
}
</style>
