import connectDB from "../../../utils/connectDB";
import Novedades from "../../../models/novedadesModel";

connectDB();

export default async (req, res) => {
  switch(req.method) {
    case "GET":
      await getNovedades(req, res);
      break;
  }
} 

const getNovedades = async (req, res) => {
  try {
    const novedades = await Novedades.find();
    res.json({
      status: "success",
      result: novedades.length,
      novedades,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
