const vm = new Vue({
  el: "#app",
  data: {
    query: "",
    status: null,
    request: {},
  },
  methods: {
    dataGet() {
      fetch(`https://api.github.com/users/${this.query}/repos`)
        .then((r) => {
          this.status = r.status;
          return r.json();
        })
        .then((data) => {
          this.request = data;
        });
    },
  },
});
