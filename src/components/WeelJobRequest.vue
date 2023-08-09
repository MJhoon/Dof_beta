<template>
<div>
  <div class="popUp-container">
    <div class="popUp-wrapper">
      <div class="popUp-title-box">
        <h4 v-if="workStep == 0">{{ weelName }} 업무 요청</h4>
        <h4 v-if="workStep == 1">{{ weelName }} 즉시 업무</h4>
        <h4 v-if="workStep == 2">{{ weelName }} 기간 업무</h4>
      </div>
      <p class="popUp-sub-title">ADMIN 명 : {{ adminName }}</p>
      <div class="popUp-content-box">
        <div v-if="workStep === 0">
          <button class="btn-1" @click="workStep = 1">즉시 요청</button>
          <button class="btn-1" @click="workStep = 2">기간 요청</button>
        </div>
        <div v-if="workStep === 1">
          <p style="margin-bottom: 17px; font-weight: 700; font-size: 14px">
            업무 종류를 선택해주세요(복수 선택 가능)
          </p>
          <form @submit.prevent="submitForm">
            <div class="btn-box-4" style="margin-bottom: 12px">
              <input id="repair" type="checkbox" value="repair" v-model="workCheck"/>
              <label for="repair"> 수리 </label>
              <input id="inspection" type="checkbox" value="inspection" v-model="workCheck"/>
              <label for="inspection"> 점검 </label>
              <input id="oil-pickup" type="checkbox" value="oil-pickup" v-model="workCheck"/>
              <label for="oil-pickup"> oil 픽업 </label>
              <input id="water-pickup" type="checkbox" value="water-pickup" v-model="workCheck"/>
              <label for="water-pickup"> 물 픽업 </label>
            </div>
            <div class="btn-box-2">
              <button @click="resetForm">취소</button>
              <button type="submit">요청</button>
            </div>
          </form>
        </div>
        <div v-if="workStep === 2">
					<form @submit.prevent="submitFormDate">
						<!-- <date-picker v-model="value1" type="date" range placeholder="시작일 ~ 종료일"></date-picker> -->
						<!-- <date-picker v-model="value1" value-type="format" format="YYYY-MM-DD"></date-picker>
						<date-picker v-model="value2" value-type="format" format="YYYY-MM-DD"></date-picker> -->
            <div class="btn-box-4" style="margin-bottom: 12px">
              <input id="repair" type="checkbox" value="repair" v-model="workCheck"/>
              <label for="repair"> 수리 </label>
              <input id="inspection" type="checkbox" value="inspection" v-model="workCheck"/>
              <label for="inspection"> 점검 </label>
              <input id="oil-pickup" type="checkbox" value="oil-pickup" v-model="workCheck"/>
              <label for="oil-pickup"> oil 픽업 </label>
              <input id="water-pickup" type="checkbox" value="water-pickup" v-model="workCheck"/>
              <label for="water-pickup"> 물 픽업 </label>
            </div>
            <div class="btn-box-2">
              <button @click="resetForm">취소</button>
              <button type="submit">요청</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <button class="btn-close-popup" @click="$emit('weelDataSend')"></button>
  </div>
	<Modal></Modal>
</div>
</template>

<script>
import Modal from "./ModalForm.vue"

export default {
  data() {
    return {
      workStep: 0,
			workCheck: [],
			value1: [],
    };
  },
	methods: {
    submitForm() {
      console.log('선택한 작업:', this.workCheck);
      console.log('선택한 날짜:', this.value3);
			if(this.workCheck.length === 0){
				alert('업무의 종류를 선택해주세요.');
			}
    },
		submitFormDate() {
      console.log('선택한 작업:', this.workCheck);
      console.log('선택한 날짜:', this.value1);
			if(this.workCheck.length === 0){
				alert('업무의 종류를 선택해주세요.');
			}else if(this.value3.length === 0){
				alert('업무의 종류 및 기간을 선택해주세요.');
			}
    },
    resetForm() {
      this.workCheck = [];
      this.value1 = [];
			this.workStep = 0
    },
  },
	components: {
		Modal,
	},
  props: {
    weelName: String,
    adminName: String,
  },
};
</script>

<style>
.popUp-content-box {
  padding-top: 51px;
  text-align: left;
}
.btn-box-4 {
  display: flex;
  justify-content: space-between;
}
.btn-box-4 label {
  width: 23%;
  height: 44px;
  border-radius: 8px;
  border: 1px solid rgb(79, 79, 79);
  background-color: #fff;
  text-align: center;
  line-height: 44px;
  color: #000;
}
.btn-box-4 input {
  display: none;
}
input[id="repair"]:checked + label {
  border: 1px solid rgb(79, 79, 79);
  background-color: rgb(79, 79, 79);
  color: #fff;
}
input[id="inspection"]:checked + label {
  border: 1px solid rgb(79, 79, 79);
  background-color: rgb(79, 79, 79);
  color: #fff;
}
input[id="oil-pickup"]:checked + label {
  border: 1px solid rgb(79, 79, 79);
  background-color: rgb(79, 79, 79);
  color: #fff;
}
input[id="water-pickup"]:checked + label {
  border: 1px solid rgb(79, 79, 79);
  background-color: rgb(79, 79, 79);
  color: #fff;
}

/*date-picer css override*/
.mx-input-wrapper{
	margin-bottom: 31px;
}
.mx-datepicker-main{
	top: 0;
	left: 0;
	width: 100%;
}

.mx-calendar-panel-date{
	width: 100%;
}
.mx-calendar-panel-date:nth-child(1){
	display: none;
}


</style>
