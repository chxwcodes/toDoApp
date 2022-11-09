// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../utilities/dbConnect";

dbConnect();

export default async function (req, res) {
  res.json({test: 'test'});
}
