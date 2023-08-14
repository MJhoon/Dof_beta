<template>
  <div class="report-page">
    <header>
      <button class="btn-back"></button>
      <h4>월간 리포트 작성</h4>
    </header>
    <main>
      <div class="content-report-header">
        <div class="content-report-tap-menu">
          <button></button>
          <p>23년 7월</p>
          <button></button>
        </div>
      </div>
      <div class="content-report-filter">
        <div class="left">
          <p>최신순</p>
          <p>오래된순</p>
        </div>
        <div class="right">
          <p>3개의 월간리포트가 있습니다.</p>
        </div>
      </div>
      <div class="content-report-card-container">
				<ReportCard />      
        <button>월간 리포트 작성</button>
      </div>
    </main>
  </div>
</template>

<script>
import ReportCard from '../components/ReportCard.vue'

export default {
	components :{ 
		ReportCard,
	}
};
</script>

<style>
.report-page {
  width: 100%;
  height: 100vh;
  background-color: #2c313f;
  color: #fff;
}
.report-page header {
  position: relative;
  padding: 9px 0px;
}
.report-page header h4 {
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  text-align: center;
}
.report-page header button {
  position: absolute;
  width: 26px;
  height: 21px;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: url("../assets/btn-back.png") no-repeat;
}
.content-report-header {
}
.content-report-tap-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  border-bottom: 1px solid #41485c;
}

.content-report-tap-menu p {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin: 0 10px;
}
.content-report-tap-menu button {
  width: 11px;
  height: 16px;
}
.content-report-tap-menu button:nth-child(1) {
  background: url(../assets/btn-prev-report.png) no-repeat;
}
.content-report-tap-menu button:nth-child(3) {
  background: url(../assets/btn-next-report.png) no-repeat;
}
.content-report-filter {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #9c9ca5;
  margin: 20px 20px 10px 20px;
}
.content-report-filter .left {
  display: flex;
}
.content-report-filter .left p {
  position: relative;
  padding-right: 21px;
}
.content-report-filter .left p:first-child:before {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 12px;
  background-color: #41485c;
  content: "";
}
.content-report-filter .right {
}
.content-report-card-container {
  position: relative;
  margin-bottom: 64px;
}
.content-report-card-container button {
  position: fixed;
  left: 50%;
  bottom: 84px;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  background-color: #00cd95;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  padding: 9px 0;
}

</style>
