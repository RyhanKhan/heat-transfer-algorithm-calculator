export const energy = async (req, res, next) => {
  const { energy, emissivePower, Temperature } = req.body;

  let calculatedValuesNormal = {};

  if (!energy) {
    calculatedValuesNormal.energy =
      emissivePower * 5.670374419 * Math.pow(10, -8) * Math.pow(Temperature, 4);
  }

  if (!Temperature) {
    calculatedValuesNormal.Temperature = Math.pow(
      energy / (emissivePower * 5.670374419 * Math.pow(10, -8)),
      1 / 4
    );
  }
  if (!emissivePower) {
    calculatedValuesNormal.emissivePower =
      energy / (5.670374419 * Math.pow(10, -8) * Math.pow(Temperature, 4));
  }

  res.json(calculatedValuesNormal);
};

export const energyBlackBody = async (req, res, next) => {
  const { energy, Temperature } = req.body;

  let calculatedValuesBB = {};

  if (!energy) {
    calculatedValuesBB.energy =
      5.670374419 * Math.pow(10, -8) * Math.pow(Temperature, 4);
  }
  if (!Temperature) {
    calculatedValuesBB.Temperature = Math.pow(
      energy / (5.670374419 * Math.pow(10, -8)),
      1 / 4
    );
  }
  res.json(calculatedValuesBB);
};
