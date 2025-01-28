//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255786452588";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID 
  process.env.SESSION_ID ||
  "VENOCYBER-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE42Nk54RzdaNUkwVWZBY09HbHZCM3Z4L2JNSXdadW1NSUV6UDRiZjdWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUw3OWJoa2F2YWZxSGVnblR0ZGZtWXR1MmU2SzJYRThIc0dTODVOUEJBST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TTlHY1N2ejRJdFZycnNqczNob3grTXZpcmpucFNFSWZoL1pTeFRjZm0wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRY2lYK05XTWZqUWtieFU5NjlSVyswNzk5V1pjM3JldGxUNUZFM2FDTVgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFDNEpDK25RQ09rWFdkVE8xaW9OVXM0K3hHdkZ6ajVWM1ZTNUMyRlZNVTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFTM0hDOFBlMERlV1NEUjVlYzlTTzV2aVpEejJDcHdkbDJTR0FtNXp2MzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUF3eTBmTzdlc1FLMDFHMVkxZmNDQmZxYXRSWXhUY0ZKQ2wveGZxWW1udz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGlqREI0L05sSHpLTEFPR3ljaDM1K24xd01WaStIODBZMWg4R0t2Z2FFOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9zNUVIZFJEa3k4QjdCRkJOenBEUHJvU0ZQMFVuTm9FMVhDdnpqU2JSRXdrR1BZVlRqekhoSEM1Y3gvVTVrUC9STkJoZnRsamZURmhXSkRISTdEM0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6IlZtRnpoOTZ2L0I3aXdsZUNnZ2t2L3R1THEyc2NlS2FWQnYxaXA1SlYvUDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImhURVpmbUw1U3FTMVd2a19DNU4xNGciLCJwaG9uZUlkIjoiMzJkNjE0ZWMtNDJlNS00ZjRkLTgyOWYtOTlkMmNmM2Y2MTAyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRkZHltODhtYk9pVXlUWitQQWtqcWFPbTNRVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTV2Zvam93cjBEdEpvTFM4d2lRb0t5UnYxbkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS1c4UjZWS0ciLCJtZSI6eyJpZCI6IjI1NTc4NjQ1MjU4ODoyMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJKb3NzeX5sZWUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0svZXNlb0RFTmkrNUx3R0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFmUUtzMGlmQktsdGFVYkxqKyt2bS9kQVFBdGFQUm1lYWpnaVBNQ245bkE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkllWWwwOG95TXpXTlJTRkNJbGRIWFVqTmNxblV0b0V5U0xrNk5mRmNvdUVlN3NCK251SHlaUy9hVXhDTTNVZWFxY1J6ZUNyK3NKY0ZKclZ5cEJIbUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYbzNhTGpMNHI4WWN2M3BjNEJnYXB0SE5yeE1OMExsNWdJcWlreTJBaDBsK3hRRHQ4RVRtejRjOFFSZ3pyeUVyS3RPM0dtTXFUaURNRXVpNXY4VStEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTc4NjQ1MjU4ODoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhbjBDck5JbndTcGJXbEd5NC92cjV2M1FFQUxXajBabm1vNElqekFwL1p3In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM4MDg4MjkzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJlZSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "JOSSY2020",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
