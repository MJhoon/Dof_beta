<template>
  <div class="modal">
    <div class="modal-container">
      <button
        class="btn-close"
        @click="$store.commit('modalOff', currentModalpage)"
      ></button>
      <div class="modal-text-box">
        <h4 class="modal-title">
          <slot name="title"></slot>
        </h4>
        <p class="modal-text">
          <slot name="text"></slot>
        </p>
        <slot name="btn-box"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentModalpage: String,
  },
};
</script>

<style>
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  color: #fff;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #2C313F;
}
.btn-close {
  position: absolute;
  right: 18px;
  top: 18px;
  width: 24px;
  height: 24px;
  background: url(../assets/btn-close.png);
}
.modal-text-box {
  padding: 42px 12px 23px;
  text-align: left;
}
.modal-title {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin: 20px 0 10px 0;
  text-align: center;
}
.modal-text {
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  margin-bottom: 21px;
}
.btn-box {
  display: flex;
  justify-content: space-between;
  margin: 50px 0 4px 0;
}
.btn-box button {
  width: calc(50% - 10px);
  height: 43px;
  border: 1px solid #00986E;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 17px;
}
.btn-box .left {
  background-color: #2C313F;
  color: #00CD95;
}
.btn-box .right {
  background-color: #00CD95;
  color: #ffffff;
}
</style>
