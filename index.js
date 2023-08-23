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
    if (message.content == "Who was in Paris") {
        message.reply("HI-")
        message.channel.send("Hello This is the Discord Team ヾ(＾ ∇ ＾) \nWe found something funny so we removed it.")
    }
    if (message.content == "Who was in paris") {
        message.reply("HI-")
        message.channel.send("Hello This is the Discord Team ヾ(＾ ∇ ＾) \nWe found something funny so we removed it.")
    }
    if (message.content == "who was in paris") {
        message.reply("HI-")
        message.channel.send("Hello This is the Discord Team ヾ(＾ ∇ ＾) \nWe found something funny so we removed it.")
    }
    if (message.content == "WHO WAS IN PARIS") {
        message.reply("HI-")
        message.channel.send("Hello This is the Discord Team ヾ(＾ ∇ ＾) \nWe found something funny so we removed it.")
    }

    // Calls

    if (message.content.includes("Charan")) {
        message.channel.send("<@663753057682587679> You've been Summoned")
    }
    if (message.content.includes("charan")) {
        message.channel.send("<@663753057682587679> You've been Summoned")
    }
    if (message.content.includes("CHARAN")) {
        message.channel.send("<@663753057682587679> You've been Summoned")
    }

    if (message.content.includes("prashasth")) {
        message.channel.send("<@754326560898547772> You've been Summoned")
    }
    if (message.content.includes("Prashasth")) {
        message.channel.send("<@754326560898547772> You've been Summoned")
    }
    if (message.content.includes("PRASHASTH")) {
        message.channel.send("<@754326560898547772> You've been Summoned")
    }
    if (message.content.includes("Akhil")) {
        message.channel.send("<@516440044190433300> You've been Summoned")
    }
    if (message.content.includes("AKHIL")) {
        message.channel.send("<@516440044190433300> You've been Summoned")
    }
    if (message.content.includes("akhil")) {
        message.channel.send("<@516440044190433300> You've been Summoned")
    }



    // Commands
    if (message.content === "/jaquote") {
        getQuote().then(quote => message.channel.send(quote))
    }

    if (message.content === "/jrnum"){
        sauce = (Math.floor(100000 + Math.random() * 900000))
        message.channel.send("Here's a Random Sauce for master")
        message.channel.send("Code: ")
        message.channel.send(sauce.toString())
        message.channel.send("Link: https://nhentai.net/g/" + sauce)
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

    /*if (message.content.includes("/jgif")){
    getgif()
    }*/


    if (message.content === "/jhelp"){
        message.reply('I noticed you need help in operating with my functions (≧∇≦)/\n\
Very well I shall aid you\n\nSo here is the thing\n slash "/" is for calling function \n\
Ik most bots use either $ or #\nBut my creator is built different\nAfter / the "j" stands for my name that is Jin\n\n\
Real shit starts here\nAddition of m means meme\n\
   - Addition viol returns "That one there was a violation meme"\n\
   - Addition of nindog returns Ninja doggo\n    It stands for ninja doggo obv\n\nAddition of a means Anime\n\
   -Addition of quote will return a quote, the character who said it and anime it is from\
   - Addition of emodmg will return emotional damage meme\n\n\n\
Coming to text replies\n whenever the user says \nHi i shall reply with Hello There!!\n\
What,Whut,Where,Why i shall reply with sex\n\n\n\
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