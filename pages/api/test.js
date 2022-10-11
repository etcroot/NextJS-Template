export default function handler(req, res) {
  const { method, query, body } = req;
  try {
    switch (method) {
      case "GET":
        res.status(200).json({ response: "OK!", statusCode: 200 });
        break;
      default:
        res
          .status(405)
          .json({ response: "Method not allowed", statusCode: 405 });
        break;
    }
  } catch (err) {
    res
      .status(500)
      .json({ response: "Internal Server Error", statusCode: 500 });
  }
}
