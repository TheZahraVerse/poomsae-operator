import RtdsLayout from "../layouts/RtdsLayout.vue"

export default {
  path: "/rtds",
  component: RtdsLayout,
  children: [
    {
      path: "standby",
      name: "rtds-standby",
      component: () => import("../pages/rtds/StandbySingle.vue"),
      meta: {
        stage: "SEMI-FINAL",
        center: "ROUND - 1",
        category: "MALE - UNDER 30",
      },
    },
    // TODO: all other pages with their path will be in here 
    // {
    //   path: "standby-double",
    //   name: "rtds-standby-double",
    //   component: () => import("../pages/rtds/StandbyDouble.vue"),
    //   meta: {
    //     stage: "SEMI-FINAL",
    //     center: "ROUND - 1",
    //     category: "MALE - UNDER 30",
    //   },
    // },
    // {
    //   path: "scoring",
    //   name: "rtds-scoring",
    //   component: () => import("../pages/rtds/ScoringSingle.vue"),
    //   meta: {
    //     stage: "SEMI-FINAL",
    //     center: "SCORING",
    //     category: "MALE - UNDER 30",
    //   },
    // },
    // {
    //   path: "scoring-double",
    //   name: "rtds-scoring-double",
    //   component: () => import("../pages/rtds/ScoringDouble.vue"),
    //   meta: {
    //     stage: "SEMI-FINAL",
    //     center: "SCORING",
    //     category: "MALE - UNDER 30",
    //   },
    // },
    // {
    //   path: "scoring-freestyle",
    //   name: "rtds-scoring-freestyle",
    //   component: () => import("../pages/rtds/ScoringFreestyle.vue"),
    //   meta: {
    //     stage: "SEMI-FINAL",
    //     center: "SCORING",
    //     category: "FREESTYLE",
    //   },
    // },
    // {
    //   path: "result",
    //   name: "rtds-result",
    //   component: () => import("../pages/rtds/ResultOneRound.vue"),
    //   meta: {
    //     stage: "SEMI-FINAL",
    //     center: "ROUND 1",
    //     category: "MALE - UNDER 30",
    //   },
    // },
    // {
    //   path: "result-two-rounds",
    //   name: "rtds-result-two-rounds",
    //   component: () => import("../pages/rtds/ResultTwoRounds.vue"),
    //   meta: {
    //     stage: "SEMI-FINAL",
    //     center: "RESULT",
    //     category: "MALE - UNDER 30",
    //   },
    // },
    // {
    //   path: "form-draw",
    //   name: "rtds-form-draw",
    //   component: () => import("../pages/rtds/FormDrawSingle.vue"),
    //   meta: {
    //     stage: "SEMI-FINAL",
    //     center: "FORM DRAW",
    //     category: "MALE - UNDER 30",
    //   },
    // },
    // {
    //   path: "form-draw-double",
    //   name: "rtds-form-draw-double",
    //   component: () => import("../pages/rtds/FormDrawDouble.vue"),
    //   meta: {
    //     stage: "SEMI-FINAL",
    //     center: "FORM DRAW",
    //     category: "PAIR",
    //   },
    // },
    // {
    //   path: "ranking",
    //   name: "rtds-ranking",
    //   component: () => import("../pages/rtds/RankingTable.vue"),
    //   meta: {
    //     stage: "SEMI-FINAL",
    //     center: "RANKING",
    //     category: "MALE - UNDER 30",
    //   },
    // },
    // {
    //   path: "top4",
    //   name: "rtds-top4",
    //   component: () => import("../pages/rtds/Top4Table.vue"),
    //   meta: {
    //     stage: "SEMI-FINAL",
    //     center: "TOP 4",
    //     category: "MALE - UNDER 30",
    //   },
    // },
  ],
}