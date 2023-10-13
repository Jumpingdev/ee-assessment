import http from "http";
import { fileURLToPath } from "url";
import path, { dirname, extname } from "path";
import { readFile } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  const contentType = getContentType(filePath);

  readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        // File not found
        res.writeHead(404);
        res.end("Not Found");
      } else {
        // Server error
        res.writeHead(500);
        res.end("Server Error");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

function getContentType(filePath) {
  const extension = extname(filePath).toLowerCase();
  switch (extension) {
    case ".html":
      return "text/html";
    case ".js":
      return "text/javascript";
    case ".css":
      return "text/css";
    case ".json":
      return "application/json";
    case ".png":
      return "image/png";
    case ".jpg":
      return "image/jpg";
    default:
      return "application/octet-stream";
  }
}
