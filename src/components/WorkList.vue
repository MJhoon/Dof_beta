<template>
  <div class="worklist-page">
    <HeaderForm>
      <button class="btn-back"
        @click="$router.push(`/login/${$store.state.userId}`)"></button>
      <h4>업무리스트</h4>
    </HeaderForm>
    <div class="worklist-tabbar">
      <button :class="{active : tabbar[0]}" @click="tapBarHandler(0)">업무 요청 <span>5</span></button>
      <button :class="{active : tabbar[1]}" @click="tapBarHandler(1)">업무 진행 <span>5</span></button>
      <button :class="{active : tabbar[2]}" @click="tapBarHandler(2)">업무 완료 <span>10</span></button>
    </div>
    <div class="content-worklist-filter">
      <div class="left">
        <p
          :style="
            sortOrder === 'asc' ? { color: '#777784' } : { color: '#00986E' }
          "
          @click="
            this.sortOrder = 'asc';
            sortTable();
          "
        >
          최신순
        </p>
        <p
          :style="
            sortOrder === 'desc' ? { color: '#777784' } : { color: '#00986E' }
          "
          @click="
            this.sortOrder = this.sortOrder = 'desc';
            sortTable();
          "
        >
          오래된순
        </p>
      </div>
      <div class="right">
        <p>전체*전체*전체</p>
        <button></button>
      </div>
    </div>
		<div v-if="tabbar[0] === true">
			<WorkListRequestCard @click="handleWeelId(weel.id)" v-for="(weel,i) in $store.state.weelData" :key="i" :weel="weel" />
		</div>
		<div v-if="tabbar[1] === true">
			<WorkListProgressCard @click="handleProgress" v-for="(weel,i) in filteredWeelDataProgress" :key="i" :weel="weel"/>
		</div>
		<div v-if="tabbar[2] === true">
			<WorkListDoneCard @click="handleWorkDone" v-for="(weel,i) in filteredWeelDataWorkdone" :key="i"/>
		</div>
	</div>
	<Modal
      v-if="$store.state.modalWorklistRequest === true"
      :currentModalpage="$store.state.currentModalpage.modalWorklistRequest"
    >
      <template v-slot:title>해당 WELL의 업무를 요청하시겠습니까?<br>지도로 이동합니다.</template>
      <template v-slot:btn-box>
			<div class="btn-box">
        <button class="left" @click="$store.commit('modalOff','modalWorklistRequest')">아니오</button>
        <button class="right" @click="transMap">네</button>
      </div>
      </template>
	</Modal>
</template>

<script>
import HeaderForm from "./HeaderForm.vue";
import Modal from './ModalForm.vue';
import WorkListRequestCard from "./WorkListRequestCard.vue";
import WorkListProgressCard from "./WorkListProgressCard.vue"
import WorkListDoneCard from "./WorkListDoneCard.vue"
export default {
	data(){
		return{
		clickedWeelId : "",
		tabbar : [false,true,false]
		}
	},
	computed: {
    filteredWeelDataProgress() {
      return this.$store.state.weelData.filter(weel => weel.state === "business_progress");
    },
    filteredWeelDataWorkdone() {
      return this.$store.state.weelData.filter(weel => weel.state === "work_done");
    }
  },
	methods:{
		handleProgress(){
			this.$router.push(`/login/${this.$store.state.userId}/worklist/progress`);
		},
		handleWorkDone(){
			this.$router.push(`/login/${this.$store.state.userId}/worklist/workdone`);
		},
		handleWeelId(id){
			this.clickedWeelId = id;
			this.$store.commit('modalOn','modalWorklistRequest');
			this.$store.commit('weelDescriptionId',this.clickedWeelId);
		},
		transMap(){
			this.$store.commit('modalOff','modalWorklistRequest')
			this.$router.push({name : "AddGoogleMap"})
			this.$store.state.isActive[4] = false
			this.$store.commit("updateWeelDataPosition", { index: this.$store.state.weelDescriptionId, position: this.$store.state.weelData[this.$store.state.weelDescriptionId].position});
		},
		tapBarHandler(clickedIndex){
			this.tabbar = this.tabbar.map((_, index) => index === clickedIndex);
		}
	},
  components: { 
		HeaderForm, WorkListRequestCard,WorkListProgressCard,WorkListDoneCard ,Modal,
	},
};
</script>

<style>
.worklist-page {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background-color: #2c313f;
  color: #fff;
}
.worklist-tabbar{
	display: flex;
	border-bottom: 1px solid #41485C;
}
.worklist-tabbar button{
	position: relative;	
	font-size: 16px;
	font-weight: 500;
	margin: 0 10px;
	padding: 12px 0;
	background-color: transparent;
	color:#9C9CA5;
}
.worklist-tabbar button::before{
	position: absolute;
	left: 50%;
	bottom: 0;
	transform: translateX(-50%);
	content: "";
	width: 0;
	height: 2px;
	background: #00CD95;
	transition: .5s;
}
.worklist-tabbar button span{
	height: 12px;
	padding: 2px 4px;
	font-size: 12px;
	text-align: center;
	border-radius: 12px;
	background: rgba(156, 156, 165, 0.15);
}
.worklist-tabbar button.active {	
	color: #00986E;
}
.worklist-tabbar button.active::before {
	width: 100%;
}
.worklist-tabbar button.active span{	
	background-color: rgba(46, 195, 136, 0.15);
}
.content-worklist-filter {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #9c9ca5;
  margin: 20px 20px 10px 20px;
}
.content-worklist-filter .left {
  display: flex;
}
.content-worklist-filter .left p {
  position: relative;
  padding-right: 21px;
}
.content-worklist-filter .left p:first-child:before {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 12px;
  background-color: #41485c;
  content: "";
}
.content-worklist-filter .right {
	display: flex;
}
.content-worklist-card-container {
  position: relative;
  overflow: scroll;
}
.content-worklist-card-container button {
  position: fixed;
  left: 50%;
  bottom: 74px;
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
