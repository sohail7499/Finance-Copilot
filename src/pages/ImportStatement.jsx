import React, { useState } from "react";
import Papa from "papaparse";

function ImportStatement() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    const text = await file.text();
    // console.log(typeof "text");

    const rows = text.split("\n");
    const headerIndex = rows.findIndex((row) =>
      row.includes("Transaction Date"),
    );
    // console.log(headerIndex);

    const transactionRow = rows.slice(headerIndex + 1);
    // console.log(transactionRow);

    const transactions = transactionRow.filter((row) => {
      return row.trim().match(/^"?\d/);
    });
    // console.log(transactions);

    const transactionObjects = transactions.map((row) => {
      const result = Papa.parse(row);
      // CSV ki ek row ko parse karke uske columns ko alag-alag values mein convert karta hai.
      const values = result.data[0];
      // Papa.parse ke result.data mein rows ka array aata hai, [0] se first row milti hai.
      return {
        id: Number(values[0]),
        date: values[1],
        description: values[3],
        amount: parseFloat(values[5].replace(/,/g, "")),
        // Amount ke saare commas remove karke string ko number mein convert karta hai.
        type: values[6],
        balance: parseFloat(values[7].replace(/,/g, "")),
      };
    });
    console.log(transactionObjects);
  };
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="text-center text-2xl font-bold text-slate-800">
            import statement
          </h1>
          <p className="mt-2 text-center text-slate-500">
            Upload Your Bank Statement To Build Your Finance Dashboard
          </p>
          <label className="mt-8 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 px-6 py-10 text-center hover:border-slate-500">
            <p className="font-medium text-slate-700">
              Click To Choose Your Statement
            </p>
            <p className="mt-2 text-sm text-slate-500">CSV file only for now</p>
            <input
              type="file"
              accept=".csv"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>

          {/* file && Matlab: Agar file mein koi value hai, tab ye JSX render karo. */}
          {file && (
            <p className="mt-4 text-center text-sm text-slate-600">
              Selected file: <span className="font-medium">{file.name}</span>
            </p>
          )}
          <button
            onClick={handleUpload}
            type="button"
            disabled={!file}
            className="mt-6 w-full rounded-lg bg-slate-900 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Upload Statement
          </button>
        </div>
      </div>
    </>
  );
}

export default ImportStatement;
