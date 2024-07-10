export default {
  install: (app, options) => {
    let prodPath = '/test/mainImages'
    let devPath = '/public/mainImages'

    app.config.globalProperties.$imgPath = devPath
  }
}