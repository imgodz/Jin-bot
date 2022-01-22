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

client.on("messageCreate", gotMessage)
function gotMessage(message){
    if (message.author.bot) return

    //Chats
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
    if (message.content == "hi"){
        message.reply("Hello There!!")
    }
    if (message.content == "HI"){
        message.reply("Hello There!!")
    }
    if (message.content == "HI"){
        message.reply("Hello There!!")
    }
    if (message.content == "hI"){
        message.reply("Hello There!!")
    }
    if (message.content == "hlo"){
        message.reply("Hello There!!")
    }
    if (message.content == "Hlo"){
        message.reply("Hello There!!")
    }
    if (message.content == "HLO"){
        message.reply("Hello There!!")
    }
    if (message.content == "Hello"){
        message.reply("Hello There!!")
    }
    if (message.content == "hello"){
        message.reply("Hello There!!")
    }
    if (message.content == "HELLO"){
        message.reply("Hello There!!")
    }
    if (message.content == "Hey"){
        message.reply("Hello There!!")
    }
    if (message.content == "hey"){
        message.reply("Hello There!!")
    }
    if (message.content == "HEY"){
        message.reply("Hello There!!")
    }

    if (message.content == "gg"){
        message.reply("GG")
    }

    if (message.content.includes("what")){
        message.reply("Sex")
    }
    if (message.content.includes("What")){
        message.reply("Sex")
    }
    if (message.content.includes("WHAT")){
        message.reply("Sex")
    }
    if (message.content.includes("Where")){
        message.reply("Sex")
    }
    if (message.content.includes("where")){
        message.reply("Sex")
    }
    if (message.content.includes("WHERE")){
        message.reply("Sex")
    }
    if (message.content.includes("Why")){
        message.reply("Sex")
    }
    if (message.content.includes("why")){
        message.reply("Sex")
    }
    if (message.content.includes("WHY")){
        message.reply("Sex")
    }
    if (message.content.includes("Whut")){
        message.reply("Sex")
    }
    if (message.content.includes("wt")){
        message.reply("Sex")
    }
    if (message.content.includes("Whut")){
        message.reply("Sex")
    }
    if (message.content.includes("Wt")){
        message.reply("Sex")
    }

    // Commands
    if (message.content === "/jaquote") {
        getQuote().then(quote => message.channel.send(quote))
    }


    if (message.content.includes === "/jms"){
        const args = message.content.split(/ +/);
        if (args[0] == "/jms"){
            let keywords = 'https://www.youtube.com/playlist?list=PLjnsp86EUQgpV6rjy4sMlIPo-7LIbjZyX'
            if (args.length > 1) {
                keywords = args.slice(1, args.length).join(" ")
            }
            message.channel.send("#play " + keywords)
        }
    }

    if (message.content === "/jrnum"){
        sauce = (Math.floor(100000 + Math.random() * 900000))
        message.channel.send("Here's a Random Sauce for master")
        message.channel.send("Code: ")
        message.channel.send(sauce.toString())
        message.channel.send("Link: https://nhentai.to/g/" + sauce)
    }

    /*async function getgif() {
        let tokens = message.cleanContent.split(" ")
        if (tokens[0] == "/jgif") {
            let keywords = "zhongli";
            if (tokens.length > 1) {
              keywords = tokens.slice(1, tokens.length).join(" ");
            }
            let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=off`;
            let response = await fetch(url);
            let json = await response.json();
            const index = Math.floor(Math.random() * json.results.length);
            message.channel.send(json.results[index].url);
            message.channel.send("GIF from Tenor: " + keywords);
          }
      }*/

    if (message.content.includes("/jgif")){
    getgif()
    }



    if (message.content === "/jmviol"){
        message.reply('https://www.youtube.com/watch?v=s7gY2ewmPHo')
    }
    if (message.content === "/jmnindog"){
        message.reply('https://www.youtube.com/watch?v=bldaBCv4BsY')
    }
    if (message.content === "/jmemodmg"){
        message.reply('https://www.youtube.com/watch?v=Nid2HId9EVY')
    }
    if (message.content === "/jhelp"){
        message.reply('I noticed you need help in operating with my functions (≧∇≦)/\n\
Very well I shall aid you\n\nSo here is the thing\n slash "/" is for calling function \n \
Ik most bots use either $ or #\nBut my creator is built different\nAfter / the "j" stands for my name that is Jin\n\n\
Real shit starts here\nAddition of m means meme\n\
   - Addition viol returns "That one there was a violation meme"\n\
   - Addition of nindog returns Ninja doggo\n    It stands for ninja doggo obv\n\nAddition of a means Anime\n\
   -Addition of quote will return a quote, the character who said it and anime it is from\
   - Addition of emodmg will return emotional damage meme\n\n\n\
Coming to text replies\n whenever the user says \nHi i shall reply with Hello There!!\n\
What,Whut,Where,Why ishall reply with sex\n\n\n\
My master has only given me the power and authority fullfill the above requirements and commands\n\
I was promised by my master that i shall be upgraded whenever he deems it\n\n\nWell then i shall take my leave\n\
Bye Bye ヾ(＾ ∇ ＾)'
        )
    }

}

/*client.on("messageCreate", (message) => {
    if (message.content == "/jgif"){


        let url = `https://g.tenor.com/v1/search?q=zhongli&key=${process.env.TENORKEY}&limit=8`
        let response = await fetch(url)
        let json = await response.json()
        console.log(json)

        message.channel.send("gif")
        message.channel.send(json.results[0].url)
    }
    
})*/



client.login(process.env.TOKEN)