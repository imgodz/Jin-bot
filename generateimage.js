const Canvas = require("canvas")
const Discord = require("discord.js")

const background = "https://imgur.com/gallery/H0xHOyE"

const dim = {
    height: 960,
    width: 1280,
    margin: 50
}


const generateImage = async (member) => {
    let username = member.user.username
    let discrim = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({format: "jpeg", dynamic: false, size: 256})

    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")

    //draw in the backgrounds
    const backimg = await Canvas.createCanvas.loadImage(background)
    ctx.drawImage(backimg, 0, 0)

    //draw black tinted box
    ctx.fillStyle = "rgba(0,0,0,0.8)"
    ctx.fillRect(dim.margin,dim.margin, dim.width - 2* dim.margin, dim.height - 2* dim.margin)

    const avimg = await Canvas.loadImage(avatarURL)
    ctx.save()

    ctx.beginPath()
    ctx.arc(av.x + 256 / 2, av.y +256 / 2, 256 / 2, 0, Math.PI *2, true)
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(avimg, av.x, av.y)
    ctx.restore()

    // write in text
    ctx.fillStyle = "white"
    ctx.textAlign = "center"

    //draw in welcome
    ctx.font = "50px Comic Sans MS"
    ctx.fillText("Welcome", dim.width/2, dim.margin + 70)

    //draw in username
    ctx.font = "50px Comic Sans MS"
    ctx.fillText(username + discrim, dim.width/2, dim.height - dim.margin - 125)

    //draw in server
    ctx.font = "40px Comic Sans MS"
    ctx.fillText("to the server", dim.width/2, dim.height - dim.margin - 50)


    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.jpeg")
    return attachment

}

module.exports = generateImage