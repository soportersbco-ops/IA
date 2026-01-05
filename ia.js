exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      mensaje: "La función de IA funciona correctamente 🚀"
    })
  };
};
