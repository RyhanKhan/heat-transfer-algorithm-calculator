// export const convection = async (req, res, next) => {
//   const {
//     heatTransferRate,
//     heatTransferCoefficient,
//     area,
//     initialTemperature,
//     finalTemperature,
//     thermalResistance,
//   } = req.body;
//   console.log(
//     heatTransferRate,
//     heatTransferCoefficient,
//     area,
//     initialTemperature,
//     finalTemperature,
//     thermalResistance
//   );

//   //logic

//   if (!heatTransferRate) {
//     let newHeatTransferRate =
//       -1 *
//       heatTransferCoefficient *
//       area *
//       (initialTemperature - finalTemperature);
//     console.log(newHeatTransferRate);
//   }

//   if (!heatTransferCoefficient) {
//     let newHeatTransferCoefficient =
//       (-1 * heatTransferRate) /
//       (area * (initialTemperature - finalTemperature));
//     console.log(newHeatTransferCoefficient);
//   }
//   if (!area) {
//     let newArea =
//       (-1 * heatTransferRate) /
//       (heatTransferCoefficient * (initialTemperature - finalTemperature));
//     console.log(newArea);
//   }

//   if (!thermalResistance) {
//     let newThermalResistance = 1 / (heatTransferCoefficient * area);
//     console.log(newThermalResistance);
//   }

//   if (!initialTemperature) {
//     let newInitialTemperature =
//       finalTemperature - heatTransferRate / (heatTransferCoefficient * area);
//     console.log(newInitialTemperature);
//   }
//   if (!finalTemperature) {
//     let newFinalTemperature =
//       finalTemperature + heatTransferRate / (heatTransferCoefficient * area);
//     console.log(newFinalTemperature);
//   }
// };

export const convection = async (req, res, next) => {
  const {
    heatTransferRate,
    heatTransferCoefficient,
    area,
    initialTemperature,
    finalTemperature,
    thermalResistance,
  } = req.body;

  let calculatedValues = {};

  if (!heatTransferRate) {
    calculatedValues.heatTransferRate =
      -1 *
      heatTransferCoefficient *
      area *
      (initialTemperature - finalTemperature);
  }

  if (!heatTransferCoefficient) {
    calculatedValues.heatTransferCoefficient =
      (-1 * heatTransferRate) /
      (area * (initialTemperature - finalTemperature));
  }
  if (!area) {
    calculatedValues.area =
      (-1 * heatTransferRate) /
      (heatTransferCoefficient * (initialTemperature - finalTemperature));
  }

  if (!thermalResistance) {
    calculatedValues.thermalResistance = 1 / (heatTransferCoefficient * area);
  }

  if (!initialTemperature) {
    calculatedValues.initialTemperature =
      finalTemperature - heatTransferRate / (heatTransferCoefficient * area);
  }
  if (!finalTemperature) {
    calculatedValues.finalTemperature =
      finalTemperature + heatTransferRate / (heatTransferCoefficient * area);
  }

  res.json(calculatedValues);
};
