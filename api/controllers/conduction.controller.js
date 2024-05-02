export const wall = async (req, res, next) => {
  let calculatedValuesWall = {};
  const {
    heatTransferRate,
    temperatureCoefficient,
    area,
    initialTemperature,
    finalTemperature,
    length,
  } = req.body;

  if (!heatTransferRate) {
    calculatedValuesWall.heatTransferRate =
      (temperatureCoefficient *
        area *
        (initialTemperature - finalTemperature)) /
      length;
  }
  if (!temperatureCoefficient) {
    calculatedValuesWall.temperatureCoefficient =
      (length * heatTransferRate) /
      (area * (initialTemperature - finalTemperature));
  }

  if (!area) {
    calculatedValuesWall.area =
      (length * heatTransferRate) /
      (temperatureCoefficient * (initialTemperature - finalTemperature));
  }
  if (!length) {
    calculatedValuesWall.length =
      (temperatureCoefficient *
        area *
        (initialTemperature - finalTemperature)) /
      heatTransferRate;
  }
  if (!initialTemperature) {
    calculatedValuesWall.initialTemperature =
      finalTemperature +
      (length * heatTransferRate) / (area * temperatureCoefficient);
  }

  if (!finalTemperature) {
    calculatedValuesWall.finalTemperature =
      initialTemperature -
      (length * heatTransferRate) / (area * temperatureCoefficient);
  }

  res.json(calculatedValuesWall);
};

export const cylinder = async (req, res, next) => {
  let calculatedValuesCylinder = {};
  const {
    heatTransferRate,
    temperatureCoefficient,
    innerRadius,
    outerRadius,
    initialTemperature,
    finalTemperature,
    length,
  } = req.body;

  if (!heatTransferRate) {
    calculatedValuesCylinder.heatTransferRate =
      (2 *
        Math.PI *
        temperatureCoefficient *
        length *
        (initialTemperature - finalTemperature)) /
      Math.log(outerRadius / innerRadius);
  }

  if (!temperatureCoefficient) {
    calculatedValuesCylinder.temperatureCoefficient =
      (heatTransferRate * Math.log(outerRadius / innerRadius)) /
      (2 * Math.PI * length * (initialTemperature - finalTemperature));
  }

  if (!innerRadius) {
    calculatedValuesCylinder.innerRadius =
      outerRadius *
      Math.exp(
        (2 * Math.PI * length * heatTransferRate) /
          (temperatureCoefficient * (initialTemperature - finalTemperature))
      );
  }

  if (!outerRadius) {
    calculatedValuesCylinder.outerRadius =
      innerRadius *
      Math.exp(
        -(
          (2 * Math.PI * length * heatTransferRate) /
          (temperatureCoefficient * (initialTemperature - finalTemperature))
        )
      );
  }

  if (!initialTemperature) {
    calculatedValuesCylinder.initialTemperature =
      finalTemperature +
      (heatTransferRate * Math.log(outerRadius / innerRadius)) /
        (2 * Math.PI * temperatureCoefficient * length);
  }

  if (!finalTemperature) {
    calculatedValuesCylinder.finalTemperature =
      initialTemperature -
      (heatTransferRate * Math.log(outerRadius / innerRadius)) /
        (2 * Math.PI * temperatureCoefficient * length);
  }

  res.json(calculatedValuesCylinder);
};

export const sphere = async (req, res, next) => {
  let calculatedValuesSphere = {};
  const {
    heatTransferRate,
    temperatureCoefficient,
    innerRadius,
    outerRadius,
    initialTemperature,
    finalTemperature,
  } = req.body;

  if (!heatTransferRate) {
    calculatedValuesSphere.heatTransferRate =
      (4 *
        Math.PI *
        innerRadius *
        outerRadius *
        temperatureCoefficient *
        (initialTemperature - finalTemperature)) /
      (outerRadius - innerRadius);
  }

  if (!temperatureCoefficient) {
    calculatedValuesSphere.temperatureCoefficient =
      (heatTransferRate * (outerRadius - innerRadius)) /
      (4 *
        Math.PI *
        innerRadius *
        outerRadius *
        (initialTemperature - finalTemperature));
  }
  if (!innerRadius) {
    calculatedValuesSphere.innerRadius =
      (heatTransferRate * (outerRadius - innerRadius)) /
      (4 *
        Math.PI *
        outerRadius *
        temperatureCoefficient *
        (initialTemperature - finalTemperature));
  }
  if (!outerRadius) {
    calculatedValuesSphere.outerRadius =
      (heatTransferRate * (outerRadius - innerRadius)) /
      (4 *
        Math.PI *
        innerRadius *
        temperatureCoefficient *
        (initialTemperature - finalTemperature));
  }
  if (!initialTemperature) {
    calculatedValuesSphere.initialTemperature =
      finalTemperature +
      (heatTransferRate * (outerRadius - innerRadius)) /
        (4 * Math.PI * innerRadius * outerRadius * temperatureCoefficient);
  }
  if (!finalTemperature) {
    calculatedValuesSphere.finalTemperature =
      initialTemperature -
      (heatTransferRate * (outerRadius - innerRadius)) /
        (4 * Math.PI * innerRadius * outerRadius * temperatureCoefficient);
  }

  res.json(calculatedValuesSphere);
};
