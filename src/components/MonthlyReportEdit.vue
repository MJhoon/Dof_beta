<template>
  <div class="report-page">
    <header>
      <button class="btn-back" @click="$router.push('/login/:userid/report')"></button>
      <h4>월간 리포트 수정 {{$route.params.id}}</h4>
    </header>
    <main style="margin: 20px; text-align: left; overflow-y: auto">
      <form>
        <div class="report-date">
          <p>기간 선택</p>
          <div class="report-date-picker-flex">
            <VueDatePicker
              v-model="startDatePicked"
              model-type="yyyy.MM.dd"
              :enable-time-picker="false"
              teleport-center
              :placeholder="$store.state.reportData[$route.params.id].startDate"
            />
            <VueDatePicker
              v-model="endDatePicked"
              model-type="yyyy.MM.dd"
              :enable-time-picker="false"
              teleport-center
              :placeholder="$store.state.reportData[$route.params.id].endDate"
            />
          </div>
        </div>
        <div class="report-select-weel">
          <p>WEEL 선택</p>
          <div class="box">
            <div class="selectBox2">
              <button
                class="label"
                @click="$store.commit('toggleDropdown', '0')"
              >
                {{ $store.state.selectedWeel }}
              </button>
              <ul class="optionList" v-show="$store.state.dropdownActive[0]">
                <li
                  class="optionItem"
                  v-for="(weel, index) in $store.state.Weels"
                  :key="index"
                  @click="$store.commit('selectWeel', weel)"
                >
                  {{ weel }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="report-select-owner">
          <p>OWNER</p>
          <div class="box">
            <div class="selectBox2">
              <button
                class="label"
                @click="$store.commit('toggleDropdown', '1')"
              >
                {{ $store.state.selectedOwner }}
              </button>
              <ul class="optionList" v-show="$store.state.dropdownActive[1]">
                <li
                  class="optionItem"
                  v-for="(owner, index) in $store.state.owners"
                  :key="index"
                  @click="$store.commit('selectOwner', owner)"
                >
                  {{ owner }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="report-quantity">
          <p>수량입력</p>
          <div class="report-gross-volume">
            <p>GROSS PRODUCTION VOLUME</p>
            <input
              type="number"
              placeholder="000"
              v-model="grossVolumePicked"
            />
          </div>
          <div class="report-total-fluids">
            <p>TOTAL FLUIDS</p>
            <input
              type="number"
              placeholder="000"
              v-model="totalFluidsPicked"
            />
          </div>
        </div>
        <div class="report-coments">
          <p>COMMENTS</p>
          <textarea type="text" v-model="commentsPicked"></textarea>
        </div>
        <div class="report-confirm">
          <button @click="$store.commit('modalOn', 'modalReportEditdelete')">
            삭제
          </button>
          <button
            type="submit"
            @click="$store.commit('modalOn', 'modalReportEdit')"
          >
            수정
          </button>
        </div>
      </form>			
    </main>
  </div>
  <Modal
    v-if="$store.state.modalReportEditdelete === true"
    :currentModalpage="$store.state.currentModalpage.modalReportEditdelete"
  >
    <template v-slot:title>월간 리포트 삭제하시겠습니까?</template>
    <template v-slot:text>월간리포트를 삭제하면 <br/>해당 데이터를 더이상 볼 수 없습니다.</template>
    <template v-slot:btn-box>
      <div class="btn-box">
        <button class="white" @click="$store.commit('modalOff','modalReportEditdelete')">아니오</button>
        <button @click="onDeleteReport">삭제</button>
      </div>
    </template>
  </Modal>
  <Modal
    v-if="$store.state.modalReportEdit === true"
    :currentModalpage="$store.state.currentModalpage.modalReportEdit"
  >
    <template v-slot:title>월간 리포트를 수정하시겠습니까?</template>
    <template v-slot:btn-box>
      <div class="btn-box">
        <button class="white" @click="$store.commit('modalOff','modalReportEdit')">아니오</button>
        <button @click="montlyReport">네</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import Modal from "./ModalForm.vue";

export default {
  components: {
    VueDatePicker,
    Modal,
  },
  data() {
    return {
      startDatePicked: "",
      endDatePicked: "",
      weelNamePicked: "",
      ownerPicked: "",
      grossVolumePicked: this.$store.state.reportData[this.$route.params.id].grossVolume,
      totalFluidsPicked: this.$store.state.reportData[this.$route.params.id].totalFluids,
      commentsPicked: this.$store.state.reportData[this.$route.params.id].comments,
      reportCreateDate: this.format(),
    };
  },
	mounted(){
		const id = this.$route.params.id;
		console.log(id);
		console.log(this.$store.state.reportData);

		if(id >= 0){
			this.$store.commit('setSelectedWeel',{ id });
			this.$store.commit('setSelectedOwner',{ id });
		}
	},
  methods: {
		onDeleteReport() {
			const id = this.$route.params.id;
			const startDate  = this.$store.state.reportData[this.$route.params.id].startDate;
			this.$store.commit('deleteReport',  {id , startDate});
			this.$router.push("/login/:userid/report");
		},
    montlyReport() {
      var report = {
        startDate: this.startDatePicked,
        endDate: this.endDatePicked,
        reportCreateDate: this.reportCreateDate,
        weelName: this.$store.state.selectedWeel,
        owner: this.$store.state.selectedOwner,
        grossVolume: this.grossVolumePicked,
        totalFluids: this.totalFluidsPicked,
        comments: this.commentsPicked,
      };
      this.$store.state.reportData.pop(report);
      this.$router.push("/login/:userid/report");
    },
    format() {
      const day = new Date().getDate();
      const month = new Date().getMonth() + 1;
      const year = new Date().getFullYear();
			const dayOfWeek = new Date().getDay();
			const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      return `${year}/${month}/${day}(${weekDay[dayOfWeek]})`;
    },
  },
};
</script>

<style>
.report-date {
  margin-bottom: 40px;
}
.report-date p {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #9c9ca5;
}
.report-date-picker-flex {
  display: flex;
  justify-content: space-between;
}
.selectBox2 * {
  box-sizing: border-box;
}
.selectBox2 {
  position: relative;
  width: 100%;
  height: 35px;
  border-radius: 4px;
  background: url("../assets/select_icon_down.png") calc(100% - 7px) center
    no-repeat;
  background-size: 20px;
  background-color: #252935;
  cursor: pointer;
}

.selectBox2:after {
  content: "";
  display: block;
  width: 2px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 35px;
}

.selectBox2 .label {
  display: flex;
  align-items: center;
  width: inherit;
  height: inherit;
  border: 0 none;
  outline: 0 none;
  padding-left: 15px;
  background: transparent;
  cursor: pointer;
  color: #5f667a;
}

.selectBox2 .optionList {
  position: absolute;
  top: 28px;
  left: 0;
  width: 100%;
  background: #252935;
  color: #fff;
  list-style-type: none;
  padding: 0;
  border-radius: 6px;
  overflow: hidden;
  transition: 0.3s ease-in;
  z-index: 11;
}

.selectBox2.active .optionList {
  max-height: 500px;
}

.selectBox2 .optionItem {
  padding: 5px 15px 5px;
  transition: 0.1s;
}

.selectBox2 .optionItem:hover {
  background: rgb(175, 93, 93);
}

.selectBox2 .optionItem:last-child {
  border-bottom: 0 none;
}

.selectBox2 .optionList::-webkit-scrollbar {
  width: 6px;
}
.selectBox2 .optionList::-webkit-scrollbar-track {
  background: transparent;
}
.selectBox2 .optionList::-webkit-scrollbar-thumb {
  background: #303030;
  border-radius: 45px;
}
.selectBox2 .optionList::-webkit-scrollbar-thumb:hover {
  background: #303030;
}
.report-select-weel {
  margin-bottom: 10px;
}
.report-select-owner {
  margin-bottom: 40px;
}
.report-select-weel p,
.report-select-owner p {
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
}
.report-quantity {
  margin-bottom: 40px;
}
.report-quantity p {
  color: #9c9ca5;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
}
.report-gross-volume,
.report-total-fluids {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.report-gross-volume input[type="number"],
.report-total-fluids input[type="number"] {
  flex-shrink: 0;
  width: calc(150px - 15px);
  height: 40px;
  border-radius: 8px;
  background-color: #252935;
  border: none;
  padding: 0 15px 0 0;
  text-align: end;
  color: #fff;
}
.report-gross-volume input[type="number"]::placeholder,
.report-total-fluids input[type="number"]::placeholder {
  font-size: 14px;
  font-weight: 400;
  font-family: "NotoKR", "Sans-serif";
  color: #5f667a;
  padding-right: 1px;
}
.report-gross-volume p,
.report-total-fluids p {
  color: #e2e2e2;
}
.report-coments {
}
.report-coments p {
  color: #9c9ca5;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 10px;
}
.report-coments textarea {
  border: none;
  width: calc(100% - 30px);
  min-height: 100px;
  background-color: #252935;
  color: #fff;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  vertical-align: top;
  resize: none;
  padding: 15px;
  border-radius: 8px;
}
.report-confirm {
  position: fixed;
  left: 50%;
  bottom: 84px;
  transform: translateX(-50%);
  width: calc(100% - 31px);
  margin: 0 auto;
}
.report-confirm button {
  width: 48%;
  background-color: #00cd95;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  padding: 9px 0;
}
.report-confirm button:first-child {
  background-color: #2c313f;
  border: 1px solid #00cd95;
  color: #00cd95;
  margin-right: 11px;
}
.dp__main {
  position: static;
  width: calc(50% - 5px);
}
.dp__input_icon {
  left: 80%;
}
.dp__clear_icon {
  display: none;
}
.dp__arrow_top {
  display: none;
}
.dp__menu {
  min-width: 100%;
}
.dp__theme_light {
  --dp-background-color: #252935;
  --dp-border-color: #252935;
  --dp-menu-border-color: #252935;
  --dp-text-color: #fff;
  --dp-primary-color: #00cd95;
  --dp-primary-disabled-color: #00986e;
}
:root {
  --dp-input-icon-padding: 6px;
}
</style>
