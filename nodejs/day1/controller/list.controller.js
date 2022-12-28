const Task = require("../models/Task");

const list = ["bruhs teeth", "dont get late from school"];

exports.getList = async (request, response) => {
  await Task.find({});
  response.send(data);
};

exports.addData = async (request, response) => {
  await Task.create({
    title: request.body.title,
    detail: ["1", "2"],
  });
  response.send({ message: "successfully added" });
};
exports.updateData = async (request, response) => {
  await Task.findByIdAndUpdate(
    { _id: request.body.id },
    { title: request?.body.title }
  );
  response.send({ message: "successfully updated" });
};

exports.deleteData = async (request, response) => {
  await Task.findByIdAndDelete({ _id: request.body.id });
};
