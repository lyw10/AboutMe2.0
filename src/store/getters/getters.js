export default {
  projectTitle(state) {
    return state.projectData.header[state.currentId - 1].title;
  },
  currentMain(state) {
    return Array.from(state.projectData.main).filter(
      (item) => item.hid === state.currentId
    );
  },
};
