ýmodule.exports = {
 config: {
	 name: "prefix",
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
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `
𝙿𝚛𝚎𝚏𝚒𝚡 𝚒𝚜 [ - ]`,
 attachment: await global.utils.getStreamFromURL("https://ibb.co.com/mcS8Fs7")
 });
 }
 }
}
