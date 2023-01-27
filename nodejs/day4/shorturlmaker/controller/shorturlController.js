const { request } = require("express");
const Url = require("../models/ShortUrl");

function makeid() {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

exports.getUrl = async (request, response) => {
  try {
    const url = await Url.find();
    response.send(url);
  } catch (error) {
    response.send({ message: error.message });
  }
};

exports.createUrl = async (request, response) => {
  const original = request.body.original;
  try {
    const url = await Url.create({
      original: original,
      shorturl: makeid(),
    });
    response.status(200).json({ success: true, data: url });
  } catch (error) {
    response.send({ message: error.message });
  }
};

exports.getUrlById = async (request, response) => {
  const shorturl = request.body.shorturl;
  try {
    const url = await Url.find({ shorturl });
    response.send({ url });
  } catch (error) {
    response.send({ message: error.message });
  }
};
