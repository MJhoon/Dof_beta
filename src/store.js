import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      userId: "",
      userLoginOn: false,
      tapMenuOn: false,
      isActive : [false,false,false,false,false],//tapNav on/off
      monthlyReportOn: false,

      centerPosition: {
        lat: -33.919, lng: 151.228 
      },
      weelDescriptionOn: false,
      weelDescriptionId: 0,
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
          workRequest: false,
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
          workRequest: true,
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
          workRequest: true,
        },
      ],
      reportData: [
        {
          startDate: "2023.08.17",
          endDate: "2023.08.19",
          reportCreateDate: "2023/08/12(Sat)",
          weelName: "king",
          owner: "Kim",
          grossVolume: "500",
          totalFluids: "2000",
          comments: "오류발생 king",
          edited: false,
        },
        {
          startDate: "2023.08.21",
          endDate: "2023.08.23",
          reportCreateDate: "2023/08/09(Wed)",
          weelName: "prince",
          owner: "MOON",
          grossVolume: "3000",
          totalFluids: "60000",
          comments: "오류발생 prince",
          edited: false,
        },
        {
          startDate: "2023.08.19",
          endDate: "2023.08.21",
          reportCreateDate: "2023/08/14(Mon)",
          weelName: "queen",
          owner: "PARK",
          grossVolume: "820",
          totalFluids: "1640",
          comments: "오류발생 queen",
          edited: false,
        },
      ],
      /*report select data*/
      dropdownActive: [false, false],
      Weels: ["TOPOILL", "TOPOILL2", "TOPOILL3", "OIL"],
      owners: ["KIM", "PARK", "LEE", "MOON"],
      selectedWeel: "WEEL",
      selectedOwner: "OWNER Information",
      /*report select data*/

      /*모달 상태값*/
      currentModalpage: {
        modalLocationOn: "modalLocationOn",
        modalWorkCheckOn: "modalWorkCheckOn",
        modalWorkCheckConfirm: "modalWorkCheckConfirm",
        modalWorkCheckDateOn: "modalWorkCheckDateOn",
        modalWorkCheckDateConfirm: "modalWorkCheckDateConfirm",
        modalWorkRequestDone: "modalWorkRequestDone",
        modalReportCreate: "modalReportCreate",
        modalReportCreateCancel: "modalReportCreateCancel",
        modalReportEdit: "modalReportEdit",
        modalReportEditdelete: "modalReportEditdelete",
        modalWorklistRequest:"modalWorklistRequest"
      },
      modalWorkCheckConfirm: false,
      modalWorkCheckDateConfirm: false,
      modalLocationOn: false,
      modalWorkCheckOn: false,
      modalWorkCheckDateOn: false,
      modalWorkRequestDone: false,
      modalReportCreate: false,
      modalReportCreateCancel: false,
      modalReportEdit: false,
      modalReportEditdelete: false,
      modalWorklistRequest: false
      /*모달 상태값*/
    };
  },
  mutations: {
    updateWeelDataPosition(state, payload) {
      state.centerPosition = payload.position;
    },
    updateIsActive(state, payload) {
      state.isActive = payload;
    },
    deleteReport(state, { id, startDate }) {   
      
      console.log(id);
      console.log(startDate);
      state.reportData.splice(id, 1);
    },
    setSelectedWeel(state, payload) {
      if (payload.id >= 0) {
        state.selectedWeel = state.reportData[payload.id].weelName;
      } else {
        state.selectedWeel = "WEEL";
      }
    },
    setSelectedOwner(state, payload) {
      if (payload.id >= 0) {
        state.selectedOwner = state.reportData[payload.id].owner;
      } else {
        state.selectedOwner = "OWNER Information";
      }
    },
    /*monthly report 영역 weel이름 owner 이름 드롭다운 메뉴*/
    toggleDropdown(state, index) {
      state.dropdownActive[index] = !state.dropdownActive[index];
    },

    selectWeel(state, weel) {
      state.selectedWeel = weel;
      state.dropdownActive[0] = false;
    },
    selectOwner(state, owner) {
      state.selectedOwner = owner;
      state.dropdownActive[1] = false;
    },
    monthlyReportOn(state) {
      state.monthlyReportOn = true;
    },
    monthlyReportOff(state) {
      state.monthlyReportOn = false;
    },
    workCheckListSend(state, workCheckList, selectedDate) {
      const targetWeelData = state.weelData.find(
        (item) => item.id === state.weelDescriptionId
      );
      if (targetWeelData) {
        targetWeelData.workCheckList = workCheckList;
        targetWeelData.userTerm = selectedDate;
        targetWeelData.state = "business_progress";
        targetWeelData.workRequest = true;

        console.log(state.weelData);

        this.commit("modalOff", state.currentModalpage.modalWorkCheckConfirm);
        this.commit(
          "modalOff",
          state.currentModalpage.modalWorkCheckDateConfirm
        );
        this.commit("modalOn", state.currentModalpage.modalWorkRequestDone);
      }
    },
    userLoginOn(state, userId) {
      state.userLoginOn = true;
      state.userId = userId;
      state.modalLocationOn = true;
    },
    userLoginOff(state) {
      state.userLoginOn = false;
    },
    weelDescriptionId(state, id) {
      state.weelDescriptionId = id;
    },
    weelDescriptionOn(state) {
      state.weelDescriptionOn = true;
    },
    weelDescriptionOff(state) {
      state.weelDescriptionOn = false;
    },
    tapMenuOn(state){
      state.tapMenuOn = !state.tapMenuOn;
    },
    modalOn(state, modalName) {
      state[modalName] = true;
      console.log(state[modalName]);
    },
    modalOff(state, modalName) {
      state[modalName] = false;
      console.log(state[modalName]);
    },
  },
});

export default store;
