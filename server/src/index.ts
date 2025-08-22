import express from "express";
import fs from "fs";
import pdf from "pdf-parse";
import path from "path";
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    const pathName = path.join(__dirname, "../public/sample.pdf"); 
  let dataBuffer = fs.readFileSync(pathName);

  pdf(dataBuffer)
    .then(function (data) {
      // use data

        return res.status(200).json({
            message : data.text
        })
    })
    .catch(function (error) {
      // handle exceptions
      console.log(error);
    });
 
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
