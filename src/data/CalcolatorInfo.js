
const CalcolatorInfo = [
  {
    id: 0,
    calcolatorTitle: "The Basal Metabolic Rate (BMR) ",
    calcolatorDesc: " The Basal Metabolic Rate  Calculator estimates your basal metabolic rate—the amount of energy expended while at rest in a neutrally temperate environment, and in a post-absorptive state",

    calcBMR: function (gender, weight, height, age) {
      let result;

      if (gender === "man") {
        return (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)).toFixed(2);
      }
      else if (gender === "women") {
        return (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age).toFixed(2));
      }
      else {
        return ' verfit  your gender or inputs';
      }
    },

  },
  {
    id: 1,
    calcolatorTitle: "Total motabolise (BMi) calcolator",
    calcolatorDesc: "Lorem BMi ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptas. Aliquid neque itaque fugit ducimus voluptatem sequi adipisci.",
  },
  {
    id: 2,
    calcolatorTitle: "Total motabolise (PPM) calcolator",
    calcolatorDesc: "Lorem PPM ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptas. Aliquid neque itaque fugit ducimus voluptatem sequi adipisci.",
  },
  {
    id: 3,
    calcolatorTitle: "Total motabolise (water) calcolator",
    calcolatorDesc: "Lorem water ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptas. Aliquid neque itaque fugit ducimus voluptatem sequi adipisci.",
  }
];
export default CalcolatorInfo;