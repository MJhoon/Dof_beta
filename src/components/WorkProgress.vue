<template>
  <div class="worklist-detail-page">
    <HeaderForm>
      <button
        class="btn-back"
        @click="$router.push(`/login/${$store.state.userId}/worklist`)"
      ></button>
      <h4>업무 상세</h4>
    </HeaderForm>
    <div style="overflow-y: scroll; height: 84.5%">
      <div class="maps-wrap">
        <GoogleMap
          api-key="AIzaSyDNhn5qcitFbev-MubnJoQkdGwNTifkjzw"
          :center="center"
          :zoom="16"
          :styles="mapStyle"
          language="kor"
          style="width: 100%; height: 100%"
        >
          <CustomMarker
            :options="{
              position: $store.state.weelData[2].position,
              icon: getIconUrl($store.state.weelData[2].weelState),
            }"
            :clickable="true"
            @click="handleMarkerClick($store.state.weelData[2].id)"
          >
            <div class="custom-marker-wrap">
              <img
                :src="getIconUrl($store.state.weelData[2].weelState)"
                alt="marker"
              />
              <p class="custom-marker-title">TopOilbank</p>
              <p class="custom-marker-type">ADMIN 1</p>
            </div>
          </CustomMarker>
        </GoogleMap>
      </div>
      <div class="view-content">
        <div class="content-info">
          <h4 class="content-title-green">WEEL information</h4>
          <div>
            <p class="content-sub-title-text">Operating Agency</p>
            <p>SOIL</p>
          </div>
          <div>
            <p class="content-sub-title-text">Location</p>
            <p>885 Maude Ave, Mountain View, CA 94043</p>
          </div>
          <div class="flex">
            <div>
              <p class="content-sub-title-text">Request Status</p>
              <p>23.08.02 ~ 23.08.10</p>
            </div>
            <div>
              <p class="content-sub-title-text">Type Of Work</p>
              <p>Oli Pick Up</p>
            </div>
          </div>
        </div>
        <div class="content-info">
          <h4 class="content-title-green">OWNER Infomation</h4>
          <div class="flex">
            <div>
              <p class="content-sub-title-text">OWNER명</p>
              <p>MISA</p>
            </div>
            <div>
              <p class="content-sub-title-text">OWNER 담당자명</p>
              <p>KING</p>
            </div>
          </div>
          <div>
            <p class="content-sub-title-text">WELL 계약기간</p>
            <p>23.08.02 ~ 23.08.10</p>
          </div>
        </div>
        <div class="slide-menu">
          <button class="slide-menu-title" @click="toggleSlideMenu">
            USER 정보
          </button>
          <div class="slide-menu-detail" :class="{ active: slideOn }">
            <div class="content-info">
              <div class="flex">
                <div>
                  <p class="content-sub-title-text">TYPE</p>
                  <p>PUMPER</p>
                </div>
                <div>
                  <p class="content-sub-title-text">총작업횟수</p>
                  <p>115회</p>
                </div>
              </div>
              <div>
                <p class="content-sub-title-text">유저 계약기간</p>
                <p>23.08.02 ~ 23.08.10</p>
              </div>
              <div class="flex">
                <div>
                  <p class="content-sub-title-text">이름</p>
                  <p>마이클</p>
                </div>
                <div>
                  <p class="content-sub-title-text">핸드폰번호</p>
                  <p>123456789</p>
                </div>
              </div>
              <div>
                <p class="content-sub-title-text">이메일</p>
                <p>MICHALE@EMAIL.COM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="view-content">
        <div class="business-status">
          <div class="status-title">
            <p>업무 현황</p>
          </div>
          <div class="status-content">
            <div class="progress-status">
              <div class="progress-status-box">
                <div class="icon-status"></div>
                <p class="title">업무 시작</p>
                <p>23.07.15 (월) 15:36</p>
              </div>
              <div class="progress-status-box">
                <div class="icon-status"></div>
                <p class="title">리포트 작성 완료</p>
                <p>23.07.20 (목) 10:10</p>
                <p>작업시간: 15시간</p>
              </div>
              <div class="progress-status-box">
                <div class="icon-status"></div>
                <p class="title">리포트 컨펌</p>
                <p>23.07.23 (토)</p>
              </div>
              <button @click="toFieldReport">리포트 컨펌</button>
            </div>
          </div>
        </div>
        <button
          class="btn-monthly-report"
          @click="$router.push(`/login/${$store.state.userId}/report/`)"
        >
          월간 리포트 작성
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { GoogleMap, CustomMarker } from "vue3-google-map";
import HeaderForm from "./HeaderForm.vue";

export default {
  data() {
    return {
      slideOn: false,
      center: this.$store.state.weelData[2].position,
      locationMarkers: this.weelData,
    };
  },
  methods: {
    toggleSlideMenu() {
      this.slideOn = !this.slideOn; // 값을 토글합니다
    },
    getIconUrl(weelState) {
      if (weelState === "in_operation") {
        return require("../assets/in_operation.png");
      } else if (weelState === "downtime") {
        return require("../assets/downtime.png");
      } else if (weelState === "private") {
        return require("../assets/private.png");
      }
    },
    toFieldReport() {
      this.$router.push(
        `/login/${this.$store.state.userId}/worklist/progress/fieldReport`
      );
      this.$store.state.isActive[4] = false;
    },
  },
  components: {
    GoogleMap,
    CustomMarker,
    HeaderForm,
  },
};
</script>

<style>
.divider {
  width: 100%;
  height: 20px;
  background-color: #252935;
}
.maps-wrap {
  width: calc(100% - 40px);
  height: 160px;
  margin: 20px auto;
}
.worklist-detail-page {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background-color: #2c313f;
  color: #fff;
  text-align: left;
}
.slide-menu {
  background-color: #363b4b;
  padding: 0 20px;
  border-radius: 8px;
}
.slide-menu-title {
  position: relative;
  width: 100%;
  text-align: left;
  padding: 20px 0px;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  color: #00986e;
  background-color: transparent;
}
.slide-menu-title:before {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  content: "";
  background: url(../assets/select_icon_down.png);
}
.slide-menu-detail {
  overflow: hidden;
  transition: max-height 0.5s ease-out;
  max-height: 0;
  border-top: 1px solid #2c313f;
}
.slide-menu-detail.active {
  max-height: 350px;
}
.status-title {
  font-size: 20px;
  font-weight: 600;
  color: #00986e;
  padding: 20px 0;
}
.status-content {
  position: relative;
  width: 100%;
}
.progress-status {
  padding-left: 22%;
}
.progress-status-box {
  position: relative;
  padding: 20px;
  border-radius: 8px;
  background-color: #252935;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
}
.progress-status-box .title {
  color: #fff;
}
.progress-status-box p {
  color: #9c9ca5;
}
.progress-status button {
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: #00986e;
  padding: 8px 0;
  border: 1px solid #00986e;
  border-radius: 8px;
  background-color: transparent;
}
.worklist-detail-page .btn-monthly-report {
  position: static;
  width: 100%;
  margin: 50px 0 9px 0;
  transform: translateX(0);
  background-color: #00cd95;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  padding: 9px 0;
}

.progress-status-box::before {
  position: absolute;
  left: -17%;
  top: 0;
  width: 2px;
  height: 125%;
  content: "";
  background-color: #00cd95;
}
.progress-status-box::after{
  position: absolute;
  top: 50%;
  left: -16.9%;
  transform: translate(-50%,-50%);
  width: 20px;
  height: 38px;
  content: "";
  background: #2c313f url(../assets/Icon_status_check.png) no-repeat;
  background-position: center center;
}
.progress-status-box:nth-last-of-type(1)::before{
  height: 50%;
}
</style>
