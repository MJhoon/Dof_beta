<template>
  <div class="report-card">
    <div class="report-card-title">
      <h5>{{report.weelName}}</h5>
      <div class="report-card-sub-title">
        <p>{{report.edited ? '수정' : '작성'}}날짜</p>
        <p>{{report.reportCreateDate}}</p>
      </div>
    </div>
    <div class="report-card-info">
      <p>OWNER Information</p>
      <p>Nurier System.Co.</p>
    </div>
  </div>
</template>

<script>
export default {
	props: {
    report: Object,
  }
};
</script>

<style>
.report-card {
  padding: 20px;
  text-align: left;
  background-color: #252935;
  border-radius: 8px;
  margin: 5px 20px;
}
.report-card-title {
  margin-bottom: 20px;
}
.report-card-title h5 {
  color: #00986e;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
}
.report-card-title p {
  color: #3278e1;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
}
.report-card-sub-title{
	display: flex;
}
.report-card-sub-title p:nth-child(2){
	margin-left: 10px;
	color: #3278E1;
}
.report-card-info p:nth-child(1) {
  color: #9c9ca5;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
}
.report-card-info p:nth-child(2) {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
}</style>
