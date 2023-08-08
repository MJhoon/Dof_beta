<template>
    <div class="modal" v-if="modalLocationOn == true">
      <div class="modal-container">
        <button class="btn-close" @click="modalLocationOn = false"></button>
        <div class="modal-text-box">
          <h4 class="modal-title">사용자 위치 접근 허용</h4>
          <p class="modal-text">
            위치 서비스는 앱을 이용하는데 필요하며, 업무 관리 작업을 위해서도
            필수적입니다. 앱을 사용하는 동안 사용자의 위치에 접근하도록
            허용하시겠습니까?
          </p>
          <div class="btn-box">
            <button class="white">거부</button>
            <button class="black">허용</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {};
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
.btn-close{
  position: absolute;
  right: 18px;
  top:18px;
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
}</style>
