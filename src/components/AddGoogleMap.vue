<template>
  <Modal
    v-if="$store.state.modalLocationOn === true"
    :currentModalpage="$store.state.currentModalpage.modalLocationOn"
  >
    <template v-slot:title>사용자 위치 접근 허용</template>
    <template v-slot:text>
      위치 서비스는 앱을 이용하는데 필요하며, 업무 관리 작업을 위해서도
      필수적입니다. 앱을 사용하는 동안 사용자의 위치에 접근하도록
      허용하시겠습니까?
    </template>
    <template v-slot:btn-box>
      <div class="btn-box">
        <button class="left">거부</button>
        <button class="right">허용</button>
      </div>
    </template>
  </Modal>
  <GoogleMap
    api-key="AIzaSyDNhn5qcitFbev-MubnJoQkdGwNTifkjzw"
    :center="center"
    :zoom="16"
    :styles="mapStyle"
    language="kor"
    style="width: 100%; height: 100%"
  >
    <CustomMarker
      :key="index"
      v-for="(m, index) in locationMarkers"
      title="fuckkkkk"
      :options="{
        position: m.position,
        icon: getIconUrl(m.weelState),
      }"
      :clickable="true"
      @click="handleMarkerClick(m.id)"
    >
      <img :src="getIconUrl(m.weelState)" alt="marker" />
      <p class="custom-marker-title">
        {{ $store.state.weelData[m.id].weelName }}
      </p>
      <p class="custom-marker-type">
        {{ $store.state.weelData[m.id].adminName }}
      </p>
    </CustomMarker>
  </GoogleMap>
</template>

<script>
import { GoogleMap, CustomMarker } from "vue3-google-map";
import Modal from "../components/ModalForm.vue";

export default {
  name: "AddGoogleMap",
  data() {
    return {
      center: this.$store.state.centerPosition,
      locationMarkers: this.weelData,
      mapStyle: [
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "transit",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
      ],
    };
  },
  components: {
    GoogleMap,
    CustomMarker,
    Modal,
  },
  props: {
    weelData: Array,
  },
  mounted() {
    this.$store.commit("modalOn", "modalLocationOn");
  },
  methods: {
    handleMarkerClick(id) {
      // 부모 컴포넌트로 이벤트를 전달합니다.
      this.$store.commit("weelDescriptionId", id);
      console.log("weelDescriptionId   이벤트를 발생시킵니다. ID:", id);
      this.$store.commit("weelDescriptionOn");
    },
    /*상태에 따른 icon 이미지 요청*/
    getIconUrl(weelState) {
      if (weelState === "in_operation") {
        return require("../assets/in_operation.png");
      } else if (weelState === "downtime") {
        return require("../assets/downtime.png");
      } else if (weelState === "private") {
        return require("../assets/private.png");
      }
    },
  },
};
</script>

<style>
.gmap {
  position: relative;
  width: 100%;
  height: 100%;
}
.svg_marker {
  width: 100px;
  height: 100px;
}
.custom-marker-wrap{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.custom-marker-title {
  color: #252935;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
}
.custom-marker-type {
  font-size: 14px;
  font-weight: 400;
  color: rgba(84, 89, 94, 0.6);
}
</style>
