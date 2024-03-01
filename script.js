const news = [
  {
    img: "./img/blog/blog1.svg",
    title: "Let’s Get Solution For Building Construction Work",
    date: "26 December,2022",
    desc: "Kitchan Design"
  },
  {
    img: "./img/blog/blog2.svg",
    title: "Low Cost Latest Invented Interior Designing",
    date: "22 December,2022",
    desc: "Living Design"
  },
  {
    img: "./img/blog/blog3.svg",
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December,2022",
    desc: "Interior Design"
  },
  {
    img: "./img/blog/blog4.svg",
    title: "Let’s Get Solution For Building Construction Work",
    date: "26 December,2022",
    desc: "Kitchan Design"
  },
  {
    img: "./img/blog/blog5.svg",
    title: "Low Cost Latest Invented Interior Designing",
    date: "22 December,2022",
    desc: "Living Design"
  },
  {
    img: "./img/blog/blog6.svg",
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December,2022",
    desc: "Interior Design"
  },
];

const blogApp = new Vue({
  el: "#app",
  data: {
    news: news,
  },
  methods: {
    orderAsc() {
      this.products.sort((a, b) => a.price - b.price);
    },
    orderDesc() {
      this.products.sort((a, b) => b.price - a.price);
    },
  },
});
