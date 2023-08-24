<template>
  <div class="report-page">
    <HeaderForm>
      <button
        class="btn-back"
        @click="$router.push(`/login/${$store.state.userId}/report`)"
      ></button>
      <h4>월간 리포트 보기 {{ $route.params.id }}</h4>
    </HeaderForm>
    <main style="margin: 20px; text-align: left; overflow-y: auto">
      <div class="view-content">
        <div class="view-weel-info">
          <h4 class="content-title-green">WEEL information</h4>
          <div>
            <p class="content-sub-title-text">기간</p>
            <p>
              {{ startDate }} ~
              {{ endDate }}
            </p>
          </div>
          <div>
            <p class="content-sub-title-text">Location</p>
            <p>885 Maude Ave, Mountain View, CA 94043</p>
          </div>
          <div class="flex">
            <div>
              <p class="content-sub-title-text">Operating Agency</p>
              <p>MISA</p>
            </div>
            <div>
              <p class="content-sub-title-text">OWNER</p>
              <p>{{ ownerDate }}</p>
            </div>
          </div>
        </div>
        <div class="view-input-info">
          <h4 class="content-title-green">입력정보</h4>
          <div>
            <p class="content-sub-title-text">GROSS PRODUCTION VOLUME</p>
            <p>{{ grossVolume }}</p>
          </div>
          <div>
            <p class="content-sub-title-text">DISPOSAL</p>
            <p>500,000</p>
          </div>
          <div>
            <p class="content-sub-title-text">TOTAL FLUIDS</p>
            <p>{{ totalFluids }}</p>
          </div>
          <div>
            <p class="content-sub-title-text">WATER CUT</p>
            <p>600</p>
          </div>
        </div>
        <div class="view-comment">
          <p class="content-sub-title-text">COMENTS</p>
          <p>
            {{ comments }}
          </p>
          <div class="report-confirm">
            <button
              type="button"
              @click="$store.commit('modalOn', 'modalReportEditdelete')"
            >
              삭제
            </button>
            <button
              type="button"
              @click="
                $router.push(
                  `/login/${$store.state.userId}/report/view/:${$route.params.id}/edit${$route.params.id}`
                )
              "
            >
              수정
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
  <Modal
    v-if="$store.state.modalReportEditdelete === true"
    :currentModalpage="$store.state.currentModalpage.modalReportEditdelete"
  >
    <template v-slot:title>월간 리포트 삭제하시겠습니까?</template>
    <template v-slot:text
      >월간리포트를 삭제하면 <br />해당 데이터를 더이상 볼 수
      없습니다.</template
    >
    <template v-slot:btn-box>
      <div class="btn-box">
        <button
          class="left"
          @click="$store.commit('modalOff', 'modalReportEditdelete')"
        >
          아니오
        </button>
        <button class="right" @click="onDeleteReport">삭제</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from "./ModalForm.vue";
import HeaderForm from "./HeaderForm.vue";

export default {
  computed: {
    startDate() {
      return this.$store.state.reportData[this.$route.params.id].startDate;
    },
    endDate() {
      return this.$store.state.reportData[this.$route.params.id].endDate;
    },
    owner() {
      return this.$store.state.reportData[this.$route.params.id].owner;
    },
    grossVolume() {
      return this.$store.state.reportData[this.$route.params.id].grossVolume;
    },
    totalFluids() {
      return this.$store.state.reportData[this.$route.params.id].totalFluids;
    },
    comments() {
      return this.$store.state.reportData[this.$route.params.id].comments;
    },
  },
  methods: {
    onDeleteReport() {
      const id = this.$route.params.id;
      const startDate =
        this.$store.state.reportData[this.$route.params.id].startDate;
      this.$store.commit("deleteReport", { id, startDate });
      this.$store.commit("modalOff", "modalReportEditdelete");
      this.$router.push(`/login/${this.$store.state.userId}/report`);
    },
  },
  components: {
    Modal,
    HeaderForm,
  },
};
</script>

<style>
.view-content {
  margin: 0 20px 20px 20px;
}
.view-weel-info div {
  margin-bottom: 20px;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.flex div {
  width: 50%;
}
.content-title-green {
  font-weight: 700;
  font-size: 18px;
  color: #00986e;
  margin-bottom: 10px;
}
.content-sub-title-text {
  font-size: 12px;
  color: #9c9ca5;
  margin-bottom: 10px;
}
.view-input-info div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.view-comment {
  margin-top: 40px;
}
</style>
