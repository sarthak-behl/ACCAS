export const WHATSAPP_NUMBER = "918595626430";
export const WHATSAPP_MESSAGE = "Hi ACCAS, I'd like to discuss my project.";
export const whatsappUrl = (msg: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
