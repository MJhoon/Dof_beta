<template>
  <nav id="nav" v-show="$store.state.userLoginOn === true">
    <a
      href="#"
      class="btn-nav-map"
      :class="{ active: isActive[0], 'btn-nav-map-on': isActive[0] }"
      @click="toggleActive(0)"
    ></a>
    <a
      href="#"
      class="btn-nav-alert"
      :class="{ active: isActive[1], 'btn-nav-alert-on': isActive[1] }"
      @click="toggleActive(1)"
    ></a>
    <a
      href="#"
      class="btn-nav-bookmark"
      :class="{ active: isActive[2], 'btn-nav-bookmark-on': isActive[2] }"
      @click="toggleActive(2)"
    ></a>
    <a
      href="#"
      class="btn-nav-options"
      :class="{ active: isActive[3], 'btn-nav-options-on': isActive[3] }"
      @click="toggleActive(3)"
    ></a>
    <a
      class="btn-nav-tapmenu"
      :class="{ active: isActive[4], 'btn-nav-tapmenu-on': isActive[4] }"
      @click="
        toggleActive(4);
        tapMenuActive();
      "
    ></a>
  </nav>
  <router-view
    @weelDataSend="$store.state.weelDescriptionId = $event"
    :weelData="weelData"
  ></router-view>
  <WeelDescription
    v-if="$store.state.weelDescriptionOn == true"
    @weelDataSend="weelDescriptionOn = false"
    :weelData="weelData[$store.state.weelDescriptionId]"
  />
  <TapMenuForm :style="isActive[4] ? { left: 0 } : { left: '100%' }" />
</template>

<script>
import WeelDescription from "./components/WeelDescription.vue";
import TapMenuForm from "./components/TapMenuForm.vue";
import { mapMutations } from "vuex";

export default {
  name: "App",
  data() {
    return {
      /*weel 상세정보 data*/
      weelDescriptionOn: false,
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
          workRequest: false, // 업무요청
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
          workRequest: true, // 업무요청
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
          workRequest: true, // 업무요청
        },
      ],
    };
  },
  computed: {
    isActive() {
      return this.$store.state.isActive;
    },
    tabClasses() {
      return this.isActive.map((active) => ({
        active,
        "btn-nav-map-on": active,
      }));
    },
  },
  methods: {
    ...mapMutations(["updateIsActive", "tapMenuOn"]),
    toggleActive(index) {
      const updatedIsActive = this.isActive.map((active, idx) => idx === index);
      this.updateIsActive(updatedIsActive);

      if (index === 4 && updatedIsActive[4]) {
        this.tapMenuActive();
      }
    },
    tapMenuActive() {
      this.tapMenuOn();
    },
  },
  components: {
    WeelDescription,
    TapMenuForm,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  padding-bottom: 64px;
}

* {
  -webkit-text-size-adjust: none;
  word-break: keep-all;
}
*:focus {
  outline: none;
}
body {
  -webkit-font-smoothing: subpixel-antialiased;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body,
form,
div,
p,
h1,
h2,
h3,
h4,
h5,
h6,
dl,
dt,
dd,
ul,
ol,
li,
fieldset,
th,
td,
input,
textarea,
button,
select,
pre {
  margin: 0;
  padding: 0;
  font-family: "NotoKR", "Sans-serif";
  font-weight: normal;
  letter-spacing: -0.7px;
}
body {
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
pre {
  text-align: left;
}
li,
ol,
ul,
dl {
  list-style: none;
}
a {
  color: #fff;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
}
a[href^="tel"] {
  font-style: normal;
}
a,
i {
  display: inline-block;
}

a {
  text-decoration: none;
  color: #333; /*outline:none;*/ /* select-dummy:expression(this.hideFocus=true); */
  cursor: pointer;
} /* w3c css검사 */
a:hover,
a:active,
a:focus {
  text-decoration: none;
  cursor: pointer;
}
a label {
  cursor: pointer;
}
select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}
address,
caption,
em,
var {
  font-style: normal;
}
input,
textarea,
select {
  letter-spacing: normal;
}
fieldset,
img {
  border: 0;
}
legend,
caption,
hr {
  display: none;
}
img {
  border: 0;
  vertical-align: middle;
  max-width: 100%;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
form,
fieldset,
iframe {
  display: block;
  border: 0;
}
br {
  letter-spacing: normal;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"] {
  vertical-align: middle;
  font-size: 17px;
  padding: 11px;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  outline: none;
}
input[type="checkbox"] {
  border: 1px solid #a7a7a7;
  -webkit-border-radius: 2px; /*-webkit-appearance:none;-webkit-border-radius:0;*/
}
input:checked[type="checkbox"] {
  -webkit-appearance: checkbox;
}
input[type="radio"] {
  border: none;
  -webkit-appearance: none;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
button {
  overflow: visible;
  margin: 0;
  padding: 0;
  border: 0 none;
  font-family: "notokr-regular", "Sans-serif";
  vertical-align: top;
  cursor: pointer;
}
main {
  text-align: left;
  font-weight: 400;
  color: #fff;
  font-size: 14px;
}
button,
input[type="button"],
input[type="submit"],
input[type="reset"],
input[type="file"] {
  -webkit-appearance: button;
  border-radius: 0;
}
input[type="file"] {
  display: none;
}
textarea {
  -webkit-appearance: none;
  outline: none;
}
select {
  -webkit-appearance: menulist-text;
  -webkit-appearance: none;
  appearance: none;
}
select::-ms-expand {
  display: none;
} /* for IE 11 */
marker {
  display: none;
}

video[poster] {
  height: 100%;
  width: 100%;
  object-fit: inherit;
}

.blind {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  font-size: 1px !important;
  line-height: 0 !important;
  clip: rect(0, 0, 0, 0);
}

/*input[type="password"] {-webkit-text-security:disc;}*/

input,
textarea {
  -webkit-appearance: none;
  -webkit-border-radius: 0;
}

div {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/* all */
::-webkit-input-placeholder {
  font-family: "notokr-regular", sans-serif;
  letter-spacing: -1px;
  font-size: 0.93rem;
  color: #979797;
}
::-moz-placeholder {
  font-family: "notokr-regular", sans-serif;
  letter-spacing: -1px;
  font-size: 0.93rem;
  color: #979797;
} /* firefox 19+ */
:-ms-input-placeholder {
  font-family: "notokr-regular", sans-serif;
  letter-spacing: -1px;
  font-size: 0.93rem;
  color: #979797;
} /* ie */
input:-moz-placeholder {
  font-family: "notokr-regular", sans-serif;
  letter-spacing: -1px;
  font-size: 0.93rem;
  color: #979797;
}

/* Font */
@font-face {
  font-family: "NotoKR medium";
  src: url(assets/font/NotoSansKR-Medium.eot);

  src: local("Noto Sans CJK KR medium"), local("Noto Sans KR medium"),
    local("NotoSansKR-medium"),
    url(assets/font/NotoSansKR-Medium.eot?#iefix) format("embedded-opentype"),
    url(assets/font/NotoSansKR-Medium.woff2) format("woff2"),
    url(assets/font/NotoSansKR-Medium.woff) format("woff");
  font-weight: normal;
}
@font-face {
  font-family: "NotoKR";
  src: url(assets/font/NotoSansKR-Regular.eot);
  src: local("Noto Sans CJK KR Regular"), local("Noto Sans KR Regular"),
    local("NotoSansKR-Regular"),
    url(assets/font/NotoSansKR-Regular.eot?#iefix) format("embedded-opentype"),
    url(assets/font/NotoSansKR-Regular.woff2) format("woff2"),
    url(assets/font/NotoSansKR-Regular.woff) format("woff");
  font-weight: normal;
}
@font-face {
  font-family: "NotoKR Light";
  /* src: url(assets/font/NotoSansKR-Light.eot);  */
  src: local("Noto Sans CJK KR Light"), local("Noto Sans KR Light"),
    local("NotoSansKR-Light"),
    /* url(assets/font/NotoSansKR-Light.eot?#iefix) format('embedded-opentype'), */
      url(assets/font/NotoSansKR-Light.woff2) format("woff2"),
    url(assets/font/NotoSansKR-Light.woff) format("woff");
  font-weight: normal;
}
/* common */
.btn-monthly-report{
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
/* 커스텀 */
input {
  padding: 11px;
  border: 1px solid #ebebeb;
}
input::placeholder {
  color: #888;
}
h2 {
  font-size: 34px;
  font-weight: 600;
  margin-bottom: 16px;
}
nav {
  position: fixed;
  padding: 0 10px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #2c313f;
  z-index: 11;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 64px;
  box-shadow: 0px 2px 2px 0px rgba(212, 211, 243, 0.08) inset;
  box-sizing: border-box;
  align-items: flex-end;
}
nav > * {
  position: relative;
  font-size: 11px;
  color: #888;
  padding: 20px;
  width: 24px;
  height: 24px;
  display: block;
}
nav > *::before {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: #00cd95;
  content: "";
  transition: width 0.5s;
}
nav > *.active::before {
  width: 100%;
}
.btn-nav-map {
  background: url(./assets/nav_map_icon.png) no-repeat center center;
}
.btn-nav-alert {
  background: url(./assets/nav_alert_icon.png) no-repeat center center;
}
.btn-nav-bookmark {
  background: url(./assets/nav_bookmark_icon.png) no-repeat center center;
}
.btn-nav-options {
  background: url(./assets/nav_options.icon.png) no-repeat center center;
}
.btn-nav-tapmenu {
  background: url(./assets/nav_tapmenu_icon.png) no-repeat center center;
}
.btn-nav-map-on {
  background: url(./assets/nav_map_icon_on.png) no-repeat center center;
}
.btn-nav-alert-on {
  background: url(./assets/nav_alert_icon_on.png) no-repeat center center;
}
.btn-nav-bookmark-on {
  background: url(./assets/nav_bookmark_icon_on.png) no-repeat center center;
}
.btn-nav-options-on {
  background: url(./assets/nav_options.icon_on.png) no-repeat center center;
}
.btn-nav-tapmenu-on {
  background: url(./assets/nav_tapmenu_icon_on.png) no-repeat center center;
}
</style>
