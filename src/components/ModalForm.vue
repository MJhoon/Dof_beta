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
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f6f6f6;
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
  margin-bottom: 10px;
}
.modal-text {
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  margin-bottom: 21px;

  color: rgba(136, 136, 136, 0.5);
}
.btn-box {
  display: flex;
  justify-content: space-between;
  margin: 4px 0;
}
.btn-box button {
  width: calc(50% - 10px);
  height: 43px;
  border: 1px solid #797979;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
}
.btn-box .white {
  background-color: #ffffff;
}
.btn-box .black {
  background-color: #4f4f4f;
  color: #ffffff;
}
</style>
