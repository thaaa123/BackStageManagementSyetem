const viewport = {
  data() {
    return {
      clientHeight: 0
    }
  },
  created() {
    this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight
  }
}

export default viewport
