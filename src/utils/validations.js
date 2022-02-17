export const validateEmail = (valor) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!re.test(valor)) {
    return false;
  } else return true;
};

export const transformDateFormat = (datetime) => {
  // 2022-03-24T00:00:00.000Z
  let date = datetime.split("T")[0];
  let datePieces = date.split("-");
  return datePieces[2] + "/" + datePieces[1] + "/" + datePieces[0];
};
