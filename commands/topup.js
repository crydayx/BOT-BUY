const Discord = require('discord.js')
const config = require('../config.json')
const fs = require('fs')

module.exports = {
  name: "setup",
  description: "เริ่มเซทบอทตอนนี้",
  run: async (Client, interaction) => {
    const user_id = interaction.user.id;
    const sorisell = new Discord.EmbedBuilder()
      .setColor("#333333")
      .setTitle("มึงไม่มีสิทธิ์ใช้คำสั่งนี้ไอ้โง่")
    if (!config.ownerID.includes(user_id)) return interaction.reply({ embeds: [sorisell], ephemeral: true });
    const Embed = new Discord.EmbedBuilder()
      .setColor('#000001')
      .setTitle('**         ซื้อยศ│Donate**')
      .setImage('https://cdn.discordapp.com/attachments/1096081392296796210/1102603621192966184/truewallet_01.jpg')
    const row = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setCustomId('ซื้อยศ')
          .setLabel('ซื้อยศ')
          .setStyle(Discord.ButtonStyle.Success)
      )
      .addComponents(
        new Discord.ButtonBuilder()
          .setCustomId('ช่วยเหลือ')
          .setLabel('ราคายศ')
          .setStyle(Discord.ButtonStyle.Primary)
      );
    await interaction.channel.send({ embeds: [Embed], components: [row] })
  },
};