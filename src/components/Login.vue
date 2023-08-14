<template>
  <div>
    <div class="allWrap logInfo">
      <header>
        <h2>환영합니다!</h2>
        <p>신속하고 정확하게 업무하실 수 있도록 도와드리겠습니다.</p>
      </header>
      <!-- <div class="logInfo">
      </div> -->
      <form @submit.prevent="userLogin">
        <div class="inpt_group">
          <input
            @input="userId = $event.target.value"
            type="text"
            placeholder="Enter email"
          />
          <input
            @input="userPassword = $event.target.value"
            type="Password"
            placeholder="Password"
          />
        </div>
        <div class="right">
          <p class="link_pw">Forgot password?</p>
        </div>
        <div class="btn_group">
          <button class="btn btn_orange w100" type="submit" @click="userLogin">LOGIN</button>
        </div>
      </form>
      <div class="btn_group colum">
        <button class="btn w100">Countiue With Apple</button>
        <button class="btn w100">Countiue With Apple</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueLogin",
  data() {
    return {
      userId: "",
      userPassword: "",
    };
  },
  methods: {
    userLogin() {
      if (this.userId === "master" && this.userPassword === "1") {
        this.$store.commit('userLoginOn',this.userId)
        alert("로그인성공");
        this.$router.push(`/login/${this.userId}`)
      }
    },
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background: #ededed;
  margin: 0;
  padding: 0;
}
.contentWrap .rContentBox {
  overflow-y: inherit;
}
.guide .contentWrap {
  width: 1600px;
  margin: 0 auto;
}
.comonWrap {
  margin-bottom: 30px;
}
.comonWrap > h3 {
  background: #222;
  color: #fff;
  padding: 5px 20px;
  margin-bottom: 10px;
  border-radius: 6px 6px 0 0;
}
.comonWrap .sample {
  padding: 10px 0;
}
.comonWrap .exType {
  margin-top: 20px;
}
.comonWrap .exType h5 {
  margin-bottom: 5px;
}
.comonWrap .exTxt {
  padding: 20px;
  background: #f2f2f2;
  font-size: 14px;
}
.comonWrap .exTxt ul li {
  line-height: 26px;
}
.exTypeWrap {
  position: relative;
}
/* .exTypeWrap a.linkGo{position:absolute; right:-35px; top:0; width:18px; height:18px; background:#bebebe; border-radius:100%; background:#eee url("../images/go.png") center center no-repeat; border:1px solid #d5d5d5} */
.sample > button {
  margin-right: 5px;
}
ul {
  list-style: none;
}

/* 커스텀 */
.inpt_group {
  display: flex;
  flex-direction: column;
}
header {
  text-align: left;
}
.orange {
  color: #ff8c21;
}
.logInfo p {
  color: #666;
}
.logInfo header {
  margin-bottom: 32px;
}
.logInfo .btn_group {
}
.logInfo .link_pw {
  font-size: 13px;
  color: #666;
}
.logInfo .inpt_group {
  margin: 10px 0;
}
.logInfo .right {
  margin-bottom: 24px;
}
/* Button */
.btn {
  background: #222;
  color: #b6b6b6;
  font-weight: 500;
}
.btn_group {
  display: flex;
}
.btn_orange {
  background: #ff8c21;
  color: #222;
}

/* Common */
.right {
  display: flex;
  justify-content: flex-end;
}
.w100 {
  width: 100%;
}
.colum {
  flex-direction: column;
}
</style>
