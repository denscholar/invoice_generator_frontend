# PDF Invoice Generator

A simple React-based project to generate and save invoices as PDF files using html2pdf.js.


<img width="938" alt="invoice_generator2024-12-10 132226" src="https://github.com/user-attachments/assets/abd1d600-3c61-4bf9-a3d6-79a6b75d48e3">


## Table of Contents
1. About the Project
2. Getting Started
3. Features
4. Usage
5. Contributing
6. License
7. Contact

About the Project
📝 Description
The PDF Invoice Generator is a React application that allows users to create professional invoices dynamically. Users can add rows, fill in invoice details, upload a logo, and generate a downloadable PDF.

🔑 Key Technologies
- React.js
- html2pdf.js

## Getting Started
📋 Prerequisites
To run this project locally, ensure you have the following installed:

Node.js (v14 or later)
npm or yarn
🚀 Installation
Follow these steps to set up the project:

### Clone the repository:
```
git clone https://github.com/username/pdf-invoice-generator.git
```
### Navigate to the project directory:
```
cd pdf-invoice-generator
```
### Install dependencies:
```
npm install
```
### Start the development server:

```
npm start
```

## Features
- 🖼 Upload a company logo.
- ➕ Add, update, and delete invoice rows dynamically.
- 📆 Specify invoice details (e.g., due date, issue date, invoice number).
- 🖨 Generate and download invoices as PDF using html2pdf.js.
- 💰 Automatically calculate totals based on item rates and quantities.

## Usage
- Fill in the invoice details such as your company name, bill-to information, and dates.
- Upload a logo file.
- Add items, rates, and quantities.
- The total and amounts are automatically calculated.
- Click the "Save as PDF" button to generate and download the invoice.

## Example Code Snippet for PDF Generation:
```
const handleClick = () => {
  const invoiceElement = document.querySelector('#invoice-pdf');
  html2pdf(invoiceElement);
};
```

## Contributing
Contributions are welcome! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch:

```
git checkout -b feature/YourFeature
```

3. Make your changes and commit them:
```
git commit -m "Add your feature"
```
4. Push your changes:
```
git push origin feature/YourFeature
```

5. Open a pull request.

## License
Distributed under the MIT License. See LICENSE for more information.

## Contact
📧 Email: denscholar20@gmail.com


