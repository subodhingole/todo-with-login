export const verifyUser = async (user, pass) => {
  if (user === "fester" && pass === "fester") {
    return { success: true };
  } else {
    return { success: false };
  }
};
