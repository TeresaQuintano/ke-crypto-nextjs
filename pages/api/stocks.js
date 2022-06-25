// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function  (req,res) {
  const  data = require("../../data/stocks.json");

  return res.status(200).json(data);
}

