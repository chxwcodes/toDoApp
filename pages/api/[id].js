import dbConnect from "../../utilities/dbConnect";
import Task from '../../models/Task';

dbConnect();

export default async function (req, res) {
  const {
    query: { id },
    method
  } = req;

  switch(method) {
    case 'GET':
      try {
        const list = await Task.findById(id);

        if (!list) {
          return res.status(400).json({succecss: false})
        }

        res.status(200).json({success: true, data: list})
      }

      catch (error) {
        return res.status(400).json({ succecss: false })
      }
      break;

    case 'PUT':
      try {
        const list = await Task.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });

        if (!note) {
          return res.status(400).json({ succecss: false })
        }

        res.status(200).json({ success: true, data: list })
      }
      catch (error) {
        return res.status(400).json({ succecss: false })
      }
      break;

    case 'DELETE':
      try  {
        const deletedList = await Task.deleteOne({_id: id})

        if(!deletedList) {
          return res.status(400).json({success: false})
        }

        res.status(200).json({ success: true, data: {} })
      }
      catch (error) {
        return res.status(400).json({ succecss: false })
      }
      break;

    default:
      res.status(400).json({ succecss: false })
      break;
  }
}