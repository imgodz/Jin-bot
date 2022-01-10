const Discord = require('discord.js')
require("dotenv").config()

const fetch = require("node-fetch")

function getQuote() {
    return fetch("https://animechan.vercel.app/api/random")
      .then(res => {
        return res.json()
      })
      .then(data => {
        return data["quote"] + "\n   -" + data["character"] + "\nAnime From: " + data["anime"]
      })
  }


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

const questions_for_$ex = ["What", "what","WHAT", 
    "Whut", "whut", "wt", "Wt", "where", "Where", "Why", "why"]

const hi_messages = ["hi", "Hi", "HI", "hI", "hlo", "Hlo", "HLO","Hello", "hello", "HELLO"]

client.on("messageCreate", (message) => {

    if (message.author.bot) return


    
    if (message.content == "rick"){
        message.reply("roll")
    }
    else if (message.content == "Rick"){
        message.reply("Roll")
    }
    else if (message.content == "nice"){
        message.reply("Ye")
    }
    else if (message.content == "Nice"){
        message.reply("Ye")
    }
    else if (message.content == "Sad"){
        message.reply("ikr lol")
    }
    else if (message.content == "sad"){
        message.reply("ikr lol")
    }
    if (hi_messages.some(word => message.content.includes(word))) {
        message.reply("Hello There!!")
    }

    if (questions_for_$ex.some(word => message.content.includes(word))) {
        message.reply("Sex")
    }
    
    if (message.content === "/jaquote") {
        getQuote().then(quote => message.channel.send(quote))
    }

    if (message.content === "/jmviol"){
        message.reply('https://www.youtube.com/watch?v=s7gY2ewmPHo')
    }
    if (message.content === "/jmnindog"){
        message.reply('https://www.youtube.com/watch?v=bldaBCv4BsY')
    }
    if (message.content === "/jhelp"){
        message.reply('I noticed you need help in operating with my functions (≧∇≦)/\nVery well I shall aid you\n\nSo here is the thing\n slash "/" is for calling function \n Ik most bots use either $ or #\nBut my creator is built different\nAfter / the "j" stands for my name that is Jin\n\nReal shit starts here\nAddition of m means meme\n   - Addition viol returns "That one there was a violation meme"\n   - Addition of nindog returns Ninja doggo\n    It stands for ninja doggo obv\n\nAddition of a means Anime\n    -Addition of quote will return a quote, the character who said it and anime it is from\n\n\nComing to text replies\n whenever the user says \nHi i shall reply with Hello There!!\nWhat,Whut,Where,Why ishall reply with sex\n\n\nMy master has only given me the power and authority fullfill the above requirements and commands\nI was promised by my master that i shall be upgraded whenever he deems it\n\n\nWell then i shall take my leave\nBye Bye ヾ(＾ ∇ ＾)'
        )
    }
})


client.login(process.env.TOKEN)