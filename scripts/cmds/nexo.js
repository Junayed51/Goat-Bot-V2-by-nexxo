module.exports = {
 config: {
   name: "nexxo",
   version: "1.0",
   author: "NEXXO",//remodified by NEXXO
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "neoaz") {
 return message.reply({
 body: `𝚠𝚑𝚢 𝚊𝚛𝚎 𝚢𝚘𝚞 𝚋𝚊𝚛𝚔𝚒𝚗𝚐!?`,
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/GHncM6g/image.gif")
 });
 }
 }
}
