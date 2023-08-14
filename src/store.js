import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      userId: "",
      userLoginOn: false,
			
      monthlyReportOn: false,

      weelDescriptionOn: false,
      weelDescriptionId: 0,
      weelDescriptionStep: 0,
			weelData: [
        {
          id: "0",
          weelName: "TopOilbank",
          onnerName: "MISA",
          onnerManagerName: "KING",
          adminName: "SOIL",
          weelTerm: "23.07.07 (목)~ 23.10.10 (금)",
          userManagerName: "MICHALE",
          type: "PUMPER",
          state: "need_request",
          userTerm: "23.04.10 (금) ~ 24.01.01 (토)",
          userState: "ADMIN 1",
          weelState: "in_operation",
          location: "seoul mapogu worldcup-bookro 396",
          position: { lat: -33.91721, lng: 151.225 },
          report: false,
          editing: "0",
          workRequest: false 
        },
        {
          id: "1",
          weelName: "TOPOILLBANK",
          onnerName: "DUCKPUENG",
          onnerManagerName: "Jh",
          adminName: "SOLAR",
          weelTerm: "23.01.14 (목)~ 23.12.19 (금)",
          userManagerName: "JACK",
          type: "PUMPER",
          state: "business_progress",
          userTerm: "23.04.13 (금) ~ 24.03.02 (토)",
          userState: "ADMIN 1",
          weelState: "downtime",
          location: "seoul juonggu seajongdaero 21gil 15",
          position: { lat: -33.922, lng: 151.2282 },
          report: true,
          editing: "0",
          workRequest: true 
        },
        {
          id: "2",
          weelName: "TOPOILLBANK",
          onnerName: "HANAM",
          onnerManagerName: "QUEEN",
          adminName: "AIR",
          weelTerm: "23.07.01 (목)~ 23.12.31 (금)",
          userManagerName: "CAIL",
          type: "PUMPER",
          state: "work_done",
          userTerm: "23.02.10 (금) ~ 24.05.06 (토)",
          userState: "ADMIN 1",
          weelState: "private",
          location: "seoul jongrogu jongro 14",
          position: { lat: -33.91747, lng: 151.231 },
          report: true,
          editing: "0",
          workRequest: true
        },
      ],
      reportData: [
        {
          id: "0",
          startDate:{},
          endDate:{},
          weelName: "",
          onner:"",
          grossVolume:"",
          totalFluids:"",
          comments:"",
        },
      ],
			currentModalpage: {
				modalLocationOn: "modalLocationOn",
        modalWorkCheckOn: "modalWorkCheckOn",
        modalWorkCheckConfirm: "modalWorkCheckConfirm",
        modalWorkCheckDateOn: "modalWorkCheckDateOn",
        modalWorkCheckDateConfirm: "modalWorkCheckDateConfirm",
        modalWorkRequestDone: "modalWorkRequestDone",
      },
			/*모달 상태값*/
			modalWorkCheckConfirm: false,
			modalWorkCheckDateConfirm: false,
      modalLocationOn: false,
			modalWorkCheckOn: false,
			modalWorkCheckDateOn: false,
			modalWorkRequestDone: false,
			/*모달 상태값*/
    };
  },
  mutations: {
    monthlyReportOn(state) {
      state.monthlyReportOn = true;
    },
    monthlyReportOff(state) {
      state.monthlyReportOn = false;
    },
		workCheckListSend(state, workCheckList, selectedDate) {
			const targetWeelData = state.weelData.find(item => item.id === state.weelDescriptionId);
			if (targetWeelData) {
				targetWeelData.workCheckList = workCheckList;
				targetWeelData.userTerm = selectedDate;
				targetWeelData.state = 'business_progress';
				targetWeelData.workRequest = true;

				console.log(state.weelData)

				this.commit("modalOff", state.currentModalpage.modalWorkCheckConfirm)
				this.commit("modalOff", state.currentModalpage.modalWorkCheckDateConfirm)
				this.commit("modalOn", state.currentModalpage.modalWorkRequestDone)
			}
		},
    userLoginOn(state, userId) {
      state.userId = userId
      state.modalLocationOn = true;
    },
		userLoginOff(state) {
			state.userLoginOn = false;
		},
		weelDescriptionId(state, id){
			state.weelDescriptionId = id
		},
		weelDescriptionOn(state){
			state.weelDescriptionOn = true;
		},
		weelDescriptionOff(state){
			state.weelDescriptionOn = false;
		},
		modalOn(state, modalName) {	
			state[modalName] = true
			console.log(state[modalName]);
		},
		modalOff(state, modalName) {	
			state[modalName] = false
			console.log(state[modalName]);
		},
  },

});

export default store;
