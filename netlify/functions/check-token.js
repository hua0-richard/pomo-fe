exports.handler = async function(event, context) {
  const validTokens = process.env.AUTHORIZED_TOKENS ? process.env.AUTHORIZED_TOKENS.split(',') : [];

  // Get token from query string
  const token = event.queryStringParameters && event.queryStringParameters.token;

  if (!token || !validTokens.includes(token)) {
    console.log("auth failed")
    return {
      statusCode: 403,
      body: JSON.stringify({ message: "Access Denied: Invalid token" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Access Granted" }),
  };
};
