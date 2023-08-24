<template>
  <div class="tap-menu">
    <div class="tap-menu-header">
      <p>Menu</p>
      <img src="../assets/btn_logout.png" alt="로그아웃 버튼" />
    </div>
    <div class="user-log-info-box">
      <p>James</p>
      <p>James@gmail.com</p>
    </div>
    <div class="tap-menu-list">
      <a @click="$router.push(`/login/${$store.state.userId}/worklist`)" class="worklist">업무리스트</a>
      <a @click="$router.push(`/login/${$store.state.userId}/report`)" class="report">월간리포트</a>
      <a href="#" class="invite">친구초대</a>
      <a href="#" class="oil-info">글로벌 유가정보</a>
      <a href="#" class="notice">공지사항</a>
      <a href="#" class="service_guide">서비스안내</a>
      <a href="#" class="service_center">고객센터</a>
    </div>
    <div class="tap-menu-footer">
      <p>ver 1.0</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tap-menu {
  width: 100vw;
  height: 100%;
  position: fixed;
  left: -100%;
  top: 0;
  color: #fff;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
  padding: 20px;
  background-color: #2c313f;
  transition: left 0.5s ease-out;
}
.tap-menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.tap-menu-header p {
  font-size: 40px;
  color: #00cd95;
  font-weight: 700;
  line-height: 120%;
}
.tap-menu-header img {
  width: 80px;
  height: 24px;
}
.user-log-info-box {
	position: relative;
  width: 100%;
  height: 91px;
  border-radius: 8px;
  background-color: #252935;
  padding: 20px 30px;
}
.user-log-info-box::before{
	position: absolute;
	content: "";
	right: 20px;
	top: 50%;
	width: 16px;
	height: 16px;
	transform: translateY(-50%);
	background: url(../assets/right-arrow.png) no-repeat;
}
.user-log-info-box p:first-child {
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
}
.user-log-info-box p:last-child {
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: #9c9ca5;
}
.tap-menu-list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: calc(100% - 200px);
}
.tap-menu-list a {
  position: relative;
  display: block;
  padding-left: 44px;
  color: #fff;
}
.tap-menu-list .worklist:before {
  position: absolute;
  left: 0%;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  width: 24px;
  height: 24px;
  background: url(../assets/tapmenu_worklist_icon.png) no-repeat;
}
.tap-menu-list .report:before {
  position: absolute;
  left: 0%;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  width: 24px;
  height: 24px;
  background: url(../assets/tapmenu_monthly_report_icon.png) no-repeat;
}
.tap-menu-list .invite:before {
  position: absolute;
  left: 0%;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  width: 24px;
  height: 24px;
  background: url(../assets/tapmenu_invite_icon.png) no-repeat;
}
.tap-menu-list .oil-info:before {
  position: absolute;
  left: 0%;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  width: 24px;
  height: 24px;
  background: url(../assets/tapmenu_oil_price_info_icon.png) no-repeat;
}
.tap-menu-list .notice:before {
  position: absolute;
  left: 0%;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  width: 24px;
  height: 24px;
  background: url(../assets/tapmenu_notice_icon.png) no-repeat;
}
.tap-menu-list .service_guide:before {
  position: absolute;
  left: 0%;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  width: 24px;
  height: 24px;
  background: url(../assets/tapmenu_service_guide_icon.png) no-repeat;
}
.tap-menu-list .service_center:before {
  position: absolute;
  left: 0%;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  width: 24px;
  height: 24px;
  background: url(../assets/tapmenu_service_center_icon.png) no-repeat;
}
.tap-menu-footer {
  position: absolute;
  right: 20px;
  bottom: 70px;
  text-align: right;
  font-size: 12px;
  color: #777784;
}
</style>
