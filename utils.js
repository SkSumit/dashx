export const loadState = () => {
  if (typeof window !== "undefined") {
    try {
      const state = localStorage.getItem("state");
      if (state === null) {
        return {
            successfulLaunch : false,
            successfulLanding : false,
            year : null
        };
      }
      return JSON.parse(state);
    } catch (error) {
      return undefined;
    }
  }
};

export const saveState = (state) => {
  if (typeof window !== "undefined") {
    try {
      const localState = JSON.stringify(state);
      localStorage.setItem("state", localState);
    } catch (error) {
      return undefined;
    }
  }
};
