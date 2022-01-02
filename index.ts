import express, { Request, Response } from "express";
import createTemplate from "./create-template";
import faker from "faker";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const mockData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    description: faker.lorem.paragraphs(2),
    sections: [
      faker.lorem.words(15),
      faker.lorem.words(12),
      faker.lorem.words(21),
    ],
    company: faker.company.companyName(),
    address: faker.address.streetAddress(),
    cost: faker.commerce.price(),
  };

  const result = await createTemplate(mockData);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `attachment; filename=export.pdf`);

  result.pipe(res);
});

app.listen(port, () => {
  console.log(`The same app is running on port ${port}.`);
});
