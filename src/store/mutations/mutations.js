export default {
  //   updateCount(state, num) {
  //     state.count = num;
  //   },
  //参数对象
  updateCount(state, { num, num2 }) {
    console.log(num2);
    state.count = num;
  },
  saveHeader(state, data) {
    //   console.log('mutations')
    //   console.log(data.data)
    state.projectData.header = data.data;
  },
  saveMain(state, data) {
    // console.log('mutations')
    // console.log(data.data)
    state.projectData.main = data.data;
  },
};
