// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../utilities/dbConnect";
import Task from '../../models/Task';

dbConnect();

export default async function (req, res) {
  const {method} = req;

  switch(method) {
    case 'GET':
      try {
        const lists = await Task.find({});
        res.status(200).json({success: true, data: lists});
      }
      catch (error) {
        res.status(400).json({success: false});
      }
      break;

    case 'POST':
      try {
        const list = await Task.create(req.body);
        res.status(201).json({success: true, data: list});
      }
      catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default: 
      res.status(400).json({ success: false });
      break;
  }

  
}
