<template>
  <div class="report-page pageWrap">
    <HeaderForm>
      <button class="btn-back" @click="$router.push(`/login/${$store.state.userId}`)"></button>
      <h4>월간 리포트</h4>
    </HeaderForm>
    <main>
      <div class="content-report-header">
        <div class="content-report-tap-menu">
          <button @click="month -= 1"></button>
          <p>{{year}}년 {{ month }}월</p>
          <button @click="month += 1"></button>
        </div>
      </div>
      <div class="content-report-filter">
        <div class="left">
          <p
            :style="
              sortOrder === 'asc' ? { color: '#777784' } : { color: '#00986E' }
            "
            @click="
              this.sortOrder = 'asc';
              sortTable();
            "
          >
            최신순
          </p>
          <p
            :style="
              sortOrder === 'desc' ? { color: '#777784' } : { color: '#00986E' }
            "
            @click="
              this.sortOrder = this.sortOrder = 'desc';
              sortTable();
            "
          >
            오래된순
          </p>
        </div>
        <div class="right">
          <p>{{ $store.state.reportData.length }}개의 월간리포트가 있습니다.</p>
        </div>
      </div>
      <div class="content-report-card-container">
        <ReportCard
          v-for="(report, i) in $store.state.reportData"
          :key="i"
          :report="report"
          @click="$router.push(`/login/${$store.state.userId}/report/view/${i}`)"
        />
        <button class="btn-monthly-report" @click="$router.push(`/login/${$store.state.userId}/report/-1`)">
          월간 리포트 작성
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import ReportCard from "../components/ReportCard.vue";
import HeaderForm from '../components/HeaderForm.vue'

export default {
  data() {
    return {
      sortOrder: "asc",
      sortBy: "reportCreateDate",
      tableData: this.$store.state.reportData,

			month: new Date().getMonth() + 1,
			year: new Date().getFullYear(),
    };
  },
  components: {
    ReportCard,
    HeaderForm,
  },
	watch : {
		month(){
			if(this.month === 0){
				this.month = 12;
				this.year -= 1;
			}else if(this.month === 13){
				this.month = 1;
				this.year += 1;
			}
		},
	},
  
  methods: {
    sortTable() {
      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";

      this.tableData.sort((a, b) => {
        const sortOrder = this.sortOrder === "asc" ? 1 : -1;
        const aValue = a[this.sortBy];
        const bValue = b[this.sortBy];

        if (aValue > bValue) {
          return sortOrder;
        } else if (aValue < bValue) {
          return -sortOrder;
        } else {
          return 0;
        }
      });
    },
  },
  mounted() {
    this.sortTable();
  },
};
</script>

<style>
.report-page {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background-color: #2c313f;
  color: #fff;
}
.content-report-tap-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  border-bottom: 1px solid #41485c;
}

.content-report-tap-menu p {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin: 0 10px;
}
.content-report-tap-menu button {
  width: 11px;
  height: 16px;
}
.content-report-tap-menu button:nth-child(1) {
  background: url(../assets/btn-prev-report.png) no-repeat;
}
.content-report-tap-menu button:nth-child(3) {
  background: url(../assets/btn-next-report.png) no-repeat;
}
.content-report-filter {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #9c9ca5;
  margin: 20px 20px 10px 20px;
}
.content-report-filter .left {
  display: flex;
}
.content-report-filter .left p {
  position: relative;
  padding-right: 21px;
}
.content-report-filter .left p:first-child:before {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 12px;
  background-color: #41485c;
  content: "";
}
.content-report-filter .right {
}
.content-report-card-container {
  position: relative;
  overflow: scroll;
}
</style>
