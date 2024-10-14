module.exports = {
 config: {
   name: "bot",
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
 if (event.body && event.body.toLowerCase() === "bot") {
 return message.reply({
 body: `👉🏻👌🏿`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/Jj6DAJC.jpeg")
 });
 }
 }
}
