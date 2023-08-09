<template>
  <GoogleMap
    api-key="AIzaSyDNhn5qcitFbev-MubnJoQkdGwNTifkjzw"
    :center="center"
    :zoom="16"
    :styles="mapStyle"
    language="kor"
    style="width: 100%; height: 100%"
  >
    <Marker
      :key="index"
      v-for="(m, index) in locationMarkers"
      :options="{
        position: m.position,
        icon: getIconUrl(m.weelState),
      }"
      :clickable="true"
      @click="handleMarkerClick(m.id)"
    ></Marker>
  </GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  name: "AddGoogleMap",
  data() {
    return {
      center: { lat: -33.919, lng: 151.228 },
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
    Marker,
  },
  props: {
    weelData: Array,
  },
  methods: {
    handleMarkerClick(id) {
      // 부모 컴포넌트로 이벤트를 전달합니다.
      this.$store.commit("weelDescriptionId", id);
      console.log("weelDescriptionId 이벤트를 발생시킵니다. ID:", id);
      this.$store.commit('weelDescriptionOn');
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
.custom-marker-title {
  font-size: 16px;
  font-weight: 700;
}
.custom-marker-type {
  font-size: 16px;
  font-weight: 700;
}
</style>
