import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      userLoginOn: false,
			
      weelDescriptionOn: false,
      weelDescriptionId: 0,
      weelDescriptionStep: 0,

			
      modalLocationOn: false,
    };
  },
  mutations: {
    userLoginOn(state) {
      state.userLoginOn = true;
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
