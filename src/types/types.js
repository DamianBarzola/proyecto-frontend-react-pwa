export const types = {
  loginUser: `[AuthUser] login`,
  loginDriver: `[AuthDriver] login`,
  logout: `[Auth] logout`,
  logMsg: "[AuthMsg] error",
  logSuccess: "[AuthSuccess] success",
  analyticsDriver: "[AuthDriver] analytics",


  shipmentAdd: `[Shipment] add`,
  shipmentDelete: `[Shipment] delete`,
  shipmentRead: `[Shipment] read`,
  shipmentModify: `[Shipment] modify`,
  shipmentClean: `[Shipment] clean`,
  newshipmentSuccess: `[Shipment] newshipmentSuccess`,
  shipmentAnalytics: `[Shipment] analytics`,

  offerRead: `[Offer] read`,
  offerAccepted: `[Offer] accepted`,
  offerCreated: `[Offer] created`,
};
export const url = "http://localhost:3000";
