export const formatDate = (dateStr) => {
    try {
      var dArr = dateStr.split("-");
      return dArr[2] + "/" + dArr[1] + "/" + dArr[0];
    } catch (error) {
      return "";
    }
  };