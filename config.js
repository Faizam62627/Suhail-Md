const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_07_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxLFxuICAgICAgICAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDExMixcbiAgICAgICAgOTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc2LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDMwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxODMsXG4gICAgICAgIDkwLFxuICAgICAgICA1MixcbiAgICAgICAgMjA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMCxcbiAgICAgICAgNixcbiAgICAgICAgMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxODksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MixcbiAgICAgICAgMjM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDcxLFxuICAgICAgICA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ1dUall3QjBLWHFRdTh2VnBhTi9mZmVNZ0puVTkrRDJua0lIUVI3aElsYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVkY4aUxpVWhURXVkVThHaFZpOEhDZ1wiLFxuICBcInBob25lSWRcIjogXCI2YzQ0ZWFlNC0yMWVlLTQ2ZTEtYjEyZC04ZjE2YmFlMTk0OWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTksXG4gICAgICAyNDIsXG4gICAgICAyMzQsXG4gICAgICAxNzIsXG4gICAgICAxOTYsXG4gICAgICAxMTUsXG4gICAgICAxNDQsXG4gICAgICAyNDksXG4gICAgICA5LFxuICAgICAgOTQsXG4gICAgICAxOTksXG4gICAgICAxMzIsXG4gICAgICAxMTAsXG4gICAgICAxLFxuICAgICAgMTkzLFxuICAgICAgMTEyLFxuICAgICAgMjE1LFxuICAgICAgMjI0LFxuICAgICAgMTU3LFxuICAgICAgNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgNTEsXG4gICAgICA5NyxcbiAgICAgIDE1MCxcbiAgICAgIDI1LFxuICAgICAgODQsXG4gICAgICA0MCxcbiAgICAgIDE2NCxcbiAgICAgIDIxOCxcbiAgICAgIDIxNyxcbiAgICAgIDUxLFxuICAgICAgMTQsXG4gICAgICAxMTcsXG4gICAgICAyMzEsXG4gICAgICAxNTEsXG4gICAgICAyMjMsXG4gICAgICA0NSxcbiAgICAgIDIsXG4gICAgICA0OCxcbiAgICAgIDk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZISEFEUVM3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0MjYzNzM3NDo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzEzNjY2ODU1MDE2OjczQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09IenBjSUdFT1QwcnJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaXFYSFkyY3FBMmNxRXdTaWR2cmxmd2JwWVlzdlYyd2VkOUl3YjhRZkYzdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4d2w3THFvbHRJZTlDTm5mRjVmYVFzZ2NvNGdnZzlhSDJaQyt2VkF3SGc5eS9HTmp0Z1FYT1J1R0tmbXJUMEoreW1FOVRFcXBHQkZxUHhZYjNhWUdBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQZ1E4cHM3bDllVm1walE5aHRPOEE5d3ppNGlZZklXMURXUEc2d1ZCWm5zREM3Ui93eWp2ZnE5eVQvTytLU1lFMytwckpnK1Q4UmhCbC9WbDN2M2JCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc0MjYzNzM3NDo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0MzMyNTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPbjVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9uNS5qc29uIjogIntcImtleURhdGFcIjpcImE0MnZsb3lYaXJWcUFQMHd1NjN0ZkptQTJ5bTVXN0R2aWtXeXpPMHJwZnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc0OTY0NTc5MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
