<template>
  <div>
    <div class="popUp-container">
      <div class="popUp-wrapper">
        <div class="popUp-title-box">
          <h4 v-if="workStep == 0">{{ weelData.weelName }} 업무 요청</h4>
          <h4 v-if="workStep == 1">{{ weelData.weelName }} 즉시 업무</h4>
          <h4 v-if="workStep == 2">{{ weelData.weelName }} 기간 업무</h4>
        </div>
        <p class="popUp-sub-title">ADMIN 명 : {{ weelData.adminName }}</p>
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
                <input
                  id="repair"
                  type="checkbox"
                  value="repair"
                  v-model="workCheck"
                />
                <label for="repair"> 수리 </label>
                <input
                  id="inspection"
                  type="checkbox"
                  value="inspection"
                  v-model="workCheck"
                />
                <label for="inspection"> 점검 </label>
                <input
                  id="oil-pickup"
                  type="checkbox"
                  value="oil-pickup"
                  v-model="workCheck"
                />
                <label for="oil-pickup"> oil 픽업 </label>
                <input
                  id="water-pickup"
                  type="checkbox"
                  value="water-pickup"
                  v-model="workCheck"
                />
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
              {{ selectedDate }}
              <VueDatePicker
                v-model="selectedDate"
                range
                model-type="yyyy.MM.dd"
                :enable-time-picker="false"
              ></VueDatePicker>
              <!-- <date-picker v-model="value1" value-type="format" format="YYYY-MM-DD"></date-picker>
						<date-picker v-model="value2" value-type="format" format="YYYY-MM-DD"></date-picker> -->
              <div class="btn-box-4" style="margin-bottom: 12px">
                <input
                  id="repair"
                  type="checkbox"
                  value="repair"
                  v-model="workCheck"
                />
                <label for="repair"> 수리 </label>
                <input
                  id="inspection"
                  type="checkbox"
                  value="inspection"
                  v-model="workCheck"
                />
                <label for="inspection"> 점검 </label>
                <input
                  id="oil-pickup"
                  type="checkbox"
                  value="oil-pickup"
                  v-model="workCheck"
                />
                <label for="oil-pickup"> oil 픽업 </label>
                <input
                  id="water-pickup"
                  type="checkbox"
                  value="water-pickup"
                  v-model="workCheck"
                />
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
      <button
        class="btn-close-popup"
        @click="$store.commit('weelDescriptionOff')"
      ></button>
    </div>
    <Modal
      v-if="$store.state.modalWorkCheckOn === true"
      :currentModalpage="$store.state.currentModalpage.modalWorkCheckOn"
    >
      <template v-slot:title>업무 선택</template>
      <template v-slot:text> 업무 종류를 선택해주세요. </template>
      <template v-slot:btn-box>
        <button class="btn-1">확인</button>
      </template>
    </Modal>
    <Modal
      v-if="$store.state.modalWorkCheckConfirm === true"
      :currentModalpage="$store.state.currentModalpage.modalWorkCheckConfirm"
    >
      <template v-slot:title>아래의 내용으로 업무를 요청하시겠습니까?</template>
      <template v-slot:text>
        {{ weelData.adminName }} BANK<br />
        OWNER: {{ weelData.onnerManagerName }}<br />
        즉시 업무 요청
      </template>
      <template v-slot:btn-box>
        <div class="btn-box">
          <button class="white">취소</button>
          <button class="black" @click="$store.commit('workCheckListSend',workCheck,selectedDate)">업무요청</button>
        </div>
      </template>
    </Modal>
    <Modal
      v-if="$store.state.modalWorkCheckDateOn === true"
      :currentModalpage="$store.state.currentModalpage.modalWorkCheckDateOn"
    >
      <template v-slot:title>업무 및 기간 선택</template>
      <template v-slot:text> 업무 종류 및 기간을 선택해주세요. </template>
      <template v-slot:btn-box>
        <button class="btn-1">확인</button>
      </template>
    </Modal>
    <Modal
      v-if="$store.state.modalWorkCheckDateConfirm === true"
      :currentModalpage="$store.state.currentModalpage.modalWorkCheckDateConfirm"
    >
      <template v-slot:title>아래의 내용으로 업무를 요청하시겠습니까?</template>
      <template v-slot:text>
        {{ weelData.adminName }} BANK<br />
        OWNER: {{ weelData.onnerManagerName }}<br />
        기간: {{ selectedDate[0] }} ~ {{ selectedDate[1] }}
      </template>
      <template v-slot:btn-box>
        <div class="btn-box">
          <button class="white">취소</button>
          <button class="black" @click="$store.commit('workCheckListSend',workCheck,selectedDate)">업무요청</button>
        </div>
      </template>
    </Modal>
    <Modal
      v-if="$store.state.modalWorkRequestDone === true"
      :currentModalpage="$store.state.currentModalpage.modalWorkRequestDone"
    >
      <template v-slot:title>업무 요청이 완료 되었습니다.</template>
      <template v-slot:btn-box>
        <div class="btn-box">
          <button class="white">업무 관리로 이동</button>
          <button class="black" @click="$store.commit('weelDescriptionOff')">홈으로 이동</button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>

import Modal from "./ModalForm.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  data() {
    return {
      workStep: 0,
      workCheckList: [],
      workCheck: [],
      selectedDate: null,
    };
  },
  methods: {
    submitForm() {
      console.log("선택한 작업:", this.workCheck);
      console.log("선택한 날짜:", this.selectedDate);
      if (this.workCheck.length === 0) {
        this.$store.commit("modalOn", "modalWorkCheckOn");
      } else {
        this.$store.commit("modalOn", "modalWorkCheckConfirm");
      }
    },
    submitFormDate() {
      console.log("선택한 작업:", this.workCheck);
      console.log("선택한 날짜:", this.selectedDate);
      if (this.workCheck.length === 0 || this.selectedDate.some(date => date === null)) {
        this.$store.commit("modalOn", "modalWorkCheckDateOn");
      } else {
        this.$store.commit("modalOn", "modalWorkCheckDateConfirm");
      }
    },
    resetForm() {
      this.workCheck = [];
      this.selectedDate = [];
      this.workStep = 0;
    },
  },
  components: {
    Modal,
    VueDatePicker,
  },
  props: {
    weelData: Object,
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
  margin: 4px 0;
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
.mx-input-wrapper {
  margin-bottom: 31px;
}
.mx-datepicker-main {
  top: 0;
  left: 0;
  width: 100%;
}

.mx-calendar-panel-date {
  width: 100%;
}
.mx-calendar-panel-date:nth-child(1) {
  display: none;
}
</style>
