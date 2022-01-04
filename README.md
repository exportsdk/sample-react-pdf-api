# sample-react-pdf-api
A barebones NodeJS API that will generate PDFs with the help of React PDF.

This repo was created for the tutorial [How to Generate PDFs with NodeJS and React PDF](https://exportsdk.com/How-to-generate-pdfs-with-nodejs).

## Getting started
Install the dependencies.

```bash
npm install
```

## Start the server (for dev)

```bash
npm run serve
```

## Send POST requests to generate PDFs
To generate a PDF, send a JSON blog matching the expected data in the body of a POST request.

Using the default template, the JSON would look like this:

```json
{
	"companyName": "Blank Labs",
	"companyPhone": "555-555-5555",
	"companyEmail": "hello@blanklabs.dev",
	"receiptNumber": "101445",
	"datePaid": "1/4/2022",
	"paymentMethod": "Visa",
	"amount": "$29.99"
}
```

The PDF will be returned in the response of the POST request.