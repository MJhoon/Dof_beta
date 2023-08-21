<template>
  <div class="popUp">
    <div class="popUp-container" v-if="weelJobRequestVisible === false">
      <div class="popUp-wrapper">
        <div class="popUp-title-box">          
          <h4>{{ weelData.weelName }}</h4>
          <span v-if="$store.state.weelData[$store.state.weelDescriptionId].state === 'need_request'" style="background-color: #F19998;">요청 필요</span>
          <span v-if="$store.state.weelData[$store.state.weelDescriptionId].state === 'business_progress'" style="background-color: #ffc70b;">업무진행</span>
          <span v-if="$store.state.weelData[$store.state.weelDescriptionId].state === 'work_done'" style="background-color: #1CB44A;">업무완료</span>
          <button></button>
        </div>
        <p class="popUp-sub-title">ADMIN 명 : {{ weelData.adminName }}</p>
        <div class="popUp-text-box" :class="{ on: weelDetailVisible }">
          <p>OWNER명 : {{ weelData.onnerName }}</p>
          <p>OWNER 담당자명 : {{ weelData.onnerManagerName }}</p>
          <p>WELL 계약 기간 : {{ weelData.weelTerm }}</p>
					<div v-if="weelData.workRequest == true" style="color: #0473B5">
						<p>담당 USER명 : {{ weelData.userManagerName }}</p>
						<p>TYPE : {{ weelData.type }}</p>
						<p>USER 계약 기간 : {{ weelData.userTerm }}</p>
					</div>
        </div>
        <p class="btn-detail" @click="toggleDetail()"
				>{{ weelDetailVisible ? "간략히 보기 >" : "WEEL 상세정보 >" }}</p>
        <div class="btn-box-2">
					<button @click="handleButtonClick" :style="{ backgroundColor: $store.state.weelData[$store.state.weelDescriptionId].workRequest ? '#fff' : 'rgb(79, 79, 79)', color: $store.state.weelData[$store.state.weelDescriptionId].workRequest ? '#000' : '#fff' }"> {{weelData.workRequest ? '요청 완료' : '업무 요청'}}</button>
          <button style="background-color: #fff; color: #000">업무 확인</button>
        </div>
        <button class="btn-1" @click="handleReport">월간 리포트 {{weelData.report ? "수정" : "작성"}}</button>
      </div>
		<button class="btn-close-popup" @click="$store.commit('weelDescriptionOff')"></button>
    </div>
		<WeelJobRequestVue v-if="weelJobRequestVisible === true" :weelData="weelData"/>
  </div>
</template>

<script>
import WeelJobRequestVue from './WeelJobRequest.vue';

export default {
  data() {
    return {
      weelDescriptionOn: false,
			weelDetailVisible: false,
			weelJobRequestVisible: false,
		};
  },
	components: {
		WeelJobRequestVue,
	},
  props: {
    weelData: Object,
  },
	methods: {
    handleReport(){
      // if(this.$store.state.weelData.report === false){
        this.$store.commit('modalOff','weelDescriptionOn');
        this.$router.push('/login/:userid/report');
      // }
    },
		toggleDetail() {
			this.weelDetailVisible = !this.weelDetailVisible;
		},
		handleButtonClick() {
			if(!this.$store.state.weelData[this.$store.state.weelDescriptionId].report){
				console.log('업무 요청 드가자');
				this.weelJobRequestVisible = true;
      }
		},
	}
};
</script>

<style>
.popUp {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(217, 217, 217, 0.4);
}
.popUp-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 19px;
  background-color: #fff;
}
.popUp-wrapper {
  position: relative;
  padding: 28px 19px 19px;
}
.popUp-title-box {
  display: flex;
  align-items: center;
	margin-bottom: 12px;
}
.popUp-title-box h4 {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
}
.popUp-title-box span {
  width: 75px;
  height: 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
	margin: 0 9px 0 17px;
  border-radius: 30px;
  background-color: #ffc70b;
}
.popUp-title-box button {
}
.btn-close-popup {
  position: absolute;
  right: 19px;
  top: 15px;
  width: 25px;
  height: 24px;
  background: url(../assets/btn-close-popup.png) no-repeat;
}
.popUp-sub-title {
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(84, 89, 94, 0.6);
}
.popUp-text-box {
  height: 0;
  overflow: hidden;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}
.popUp-text-box.on {
	font-weight: "Bold";
  height: auto;
}
.btn-detail {
  text-align: left;
  font-weight: 400;
  font-size: 12px;
  font-weight: 14.5px;
  cursor: pointer;
  margin: 8px 0 30px;
  color: #000;
}
.btn-box-2 {
  display: flex;
  justify-content: space-between;
  margin: 4px 0;
}
.btn-box-2 button {
  width: calc(50% - 5px);
  height: 44px;
  border-radius: 8px;
  border: 1px solid rgb(79, 79, 79);
  background-color: rgb(79, 79, 79);
  color: #fff;
}
.btn-1 {
  width: 100%;
  height: 44px;
  border-radius: 8px;
  border: 1px solid rgb(79, 79, 79);
  background-color: rgb(79, 79, 79);
  color: #fff;
  margin: 4px 0;
}
</style>
