export const formatDate = (dateStr) => {
    try {
      let dArr = dateStr.split("-");
      return dArr[2] + "/" + dArr[1] + "/" + dArr[0];
    } catch (error) {
      return "";
    }
  };

  export const formatDateSeconds = (secs) => {
    secs = Number(secs);
    let h = Math.floor(secs / 3600);
    let m = Math.floor(secs % 3600 / 60);
    let hDisplay = h > 0 ? h + "h " : "";
    let mDisplay = m > 0 ? m + (m == 1 ? " min" : " min") : "";
    return hDisplay + mDisplay; 
}
  export const formatDistance = (meters) => {
    let km = meters/1000;
 return Math.round(km) + " km" 
}