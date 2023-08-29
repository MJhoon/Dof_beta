<template>
  <div class="worklist-field-report">
    <HeaderForm>
      <h4>현장 리포트</h4>
      <button
        class="btn-back"
        @click="$router.push(`/login/${$store.state.userId}/worklist/progress`)"
      ></button>
    </HeaderForm>
    <main style="overflow-y: auto; height: calc(100% - 152px)">
      <div class="view-content">
        <div class="content-info">
          <h4 class="content-title-green">기본정보</h4>
          <div>
            <p class="content-sub-title-text">Location</p>
            <p>885 Maude Ave, Mountain View, CA 94043</p>
          </div>
          <div class="flex">
            <div>
              <p class="content-sub-title-text">Operating Agency</p>
              <p>SOIL</p>
            </div>
            <div>
              <p class="content-sub-title-text">OWNER</p>
              <p>MISA</p>
            </div>
          </div>
          <div class="slide-menu">
            <button class="slide-menu-title" @click="toggleSlideMenu(0)">
              IOT 정보
            </button>
            <div class="slide-menu-detail" :class="{ active: slideOn[0] }">
              <div class="content-info">
                <div>
                  <p class="content-sub-title-text">온도</p>
                  <p>500</p>
                </div>
                <div>
                  <p class="content-sub-title-text">습도</p>
                  <p>500</p>
                </div>
                <div>
                  <p class="content-sub-title-text">무게</p>
                  <p>500</p>
                </div>
                <div>
                  <p class="content-sub-title-text">전력 사용량</p>
                  <p>500</p>
                </div>
              </div>
            </div>
          </div>
          <div class="slide-menu">
            <button class="slide-menu-title" @click="toggleSlideMenu(1)">
              WELL 정보
            </button>
            <div class="slide-menu-detail" :class="{ active: slideOn[1] }">
              <div class="content-info">
                <div class="flex">
                  <div>
                    <p class="content-sub-title-text">WELL 이름</p>
                    <p>TOP OILBANK</p>
                  </div>
                  <div>
                    <p class="content-sub-title-text">IOT 수량</p>
                    <p>150</p>
                  </div>
                </div>
                <div>
                  <p class="content-sub-title-text">IOT 교체 예상일</p>
                  <p>24.01.03 (목)</p>
                </div>
              </div>
            </div>
          </div>
          <h4 class="content-title-green">WEEL 상황</h4>
          <p class="weel-status">물 누출,HSE(Sensor issue)</p>
        </div>
      </div>
      <div class="divider"></div>
      <div class="view-content">
        <div class="content-input-info">
          <h4 class="content-title-green">Gross Production Volume</h4>
          <div>
            <p class="content-sub-title-text">Oil(bbl)</p>
            <p>12,000</p>
          </div>
          <div>
            <p class="content-sub-title-text">Gas(Mcf)</p>
            <p>13,000</p>
          </div>
          <div>
            <p class="content-sub-title-text">Water(bbl)</p>
            <p>100,000</p>
          </div>
          <div class="content-input-info-result">
            <div>
              <p>Total fluids(bbl)</p>
              <p class="strong">112,000</p>
            </div>
            <div>
              <p>Water cut(%)</p>
              <p class="strong">20%</p>
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="view-content">
        <div class="content-input-info">
          <h4 class="content-title-green">Gross Disposal Volume</h4>
          <div>
            <p class="content-sub-title-text">Transferred(bbl)</p>
            <p>11,000</p>
          </div>
          <div>
            <p class="content-sub-title-text">Disposal water(bbl)</p>
            <p>130,000</p>
          </div>
          <div>
            <p class="content-sub-title-text">Fresh water(bbl)</p>
            <p>2,000</p>
          </div>
          <div>
            <p class="content-sub-title-text">Brine water(bbl)</p>
            <p>10,000</p>
          </div>
          <div>
            <p class="content-sub-title-text">KCL(bbl)</p>
            <p>1,000</p>
          </div>
          <div>
            <p class="content-sub-title-text">Packer fluid(bbl)</p>
            <p>200,000</p>
          </div>
          <div>
            <p class="content-sub-title-text">Biocide(bbl)</p>
            <p>30,000</p>
          </div>
          <div>
            <p class="content-sub-title-text">Scavenger(bbl)</p>
            <p>40,000</p>
          </div>
          <div class="content-input-info-result">
            <div>
              <p>Total fluids(bbl)</p>
              <p class="strong">424,000</p>
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="view-content">
        <div class="view-comment">
          <p class="content-sub-title-text">COMENTS</p>
          <p class="view-comment-area">
            The news that a wealthy young gentleman named Charles Bingley has
            rented the manor of Netherfield Park causes a great stir in the
            nearby village of Longbourn, especially in the Bennet household.
          </p>
          <div class="content-input-info">
            <div>
              <p class="content-sub-title-text">작성자</p>
              <p>MIKE, PUMPER</p>
            </div>
            <div>
              <p class="content-sub-title-text">작성일</p>
              <p>23.07.06</p>
            </div>
          </div>
          <div class="report-confirm">
            <button
              type="button"
              @click="$store.commit('modalOn', 'modalReportReRequest')"
            >
              재요청
            </button>
            <button
              type="button"
              @click="$store.commit('modalOn', 'modalReportConfirm')"
            >
              컨펌
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
  <Modal
    v-if="$store.state.modalReportReRequest === true"
    :currentModalpage="$store.state.currentModalpage.modalReportReRequest"
  >
    <template v-slot:title>현장 리포트를<br />재요청하시겠습니까?</template>
    <template v-slot:btn-box>
      <div class="btn-box">
        <button
          class="left"
          @click="$store.commit('modalOff', 'modalReportReRequest')"
        >
          취소
        </button>
        <button class="right" @click="onFieldReportReRequest">재요청</button>
      </div>
    </template>
  </Modal>
  <Modal
    v-if="$store.state.modalReportConfirm === true"
    :currentModalpage="$store.state.currentModalpage.modalReportConfirm"
  >
    <template v-slot:title>현장 리포트를<br />컨펌하시겠습니까?</template>
    <template v-slot:btn-box>
      <div class="btn-box">
        <button
          class="left"
          @click="$store.commit('modalOff', 'modalReportConfirm')"
        >
          취소
        </button>
        <button class="right" @click="onFieldReportConfirm">컨펌</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import HeaderForm from "./HeaderForm.vue";
import Modal from "./ModalForm.vue";
export default {
  data() {
    return {
      slideOn: [false, false],
    };
  },
  methods: {
    toggleSlideMenu(index) {
      this.slideOn[index] = !this.slideOn[index]; // 값을 토글합니다
    },
    onFieldReportReRequest() {
      this.$router.push(`/login/${this.$store.state.userId}/worklist/progress`);
    },
    onFieldReportConfirm() {
      this.$router.push(`/login/${this.$store.state.userId}/worklist/progress`);
    },
  },
  components: {
    HeaderForm,
    Modal,
  },
};
</script>

<style>
.worklist-field-report {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background-color: #2c313f;
  color: #fff;
  text-align: left;
}
.weel-status {
  color: #da2f58;
}
.strong {
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
}
.content-input-info-result {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin-bottom: 20px;
  border-top: 1px solid #363b4b;
}
.view-comment-area {
  margin-bottom: 42px;
}
</style>
