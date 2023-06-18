
exports.handler = async function (event, context) {
    const body = event.body;
    const body2 = JSON.parse(body)
    console.log(body2.woke)
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello World" }),
      };
  };