// import { AppError, catchAsync } from "../errors/index.js";




//   export const validatePlaneId = catchAsync(async(req, res, next) => {
//     const planeId = req.params.plane_id;
//     const plane = await Plane.findByPk(planeId);
//     if (plane) {
//       req.plane = plane;
//       next();
//     } else {
//       res.status(404).json({ message: 'Avión no encontrado' });
//     }
//   })

