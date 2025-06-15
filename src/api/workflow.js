import { axiosInstance } from "./instance";

export const workflow = {
  getLeaveContent: () => {
    return axiosInstance.get("", {
      headers: {
        brainz: "1",
      },
    });
  },
};
