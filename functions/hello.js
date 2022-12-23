// domain/.netlify/functions/hello
const items = [
  { id: 1, name: "Rui" },
  { id: 2, name: "Raquel" },
];
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "hello world",
  };
};
