import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Conduction() {
  const [formDataWall, setFormDataWall] = useState({});
  const [calculatedValuesWall, setCalculatedValuesWall] = useState({});
  const [formDataCylinder, setFormDataCylinder] = useState({});
  const [calculatedValuesCylinder, setCalculatedValuesCylinder] = useState({});
  const [formDataSphere, setFormDataSphere] = useState({});
  const [calculatedValuesSphere, setCalculatedValuesSphere] = useState({});
  const navigate = useNavigate();

  const [wall, setWall] = useState(true);
  const [cylinder, setCylinder] = useState(false);
  const [sphere, setSphere] = useState(false);

  const handleChangeWall = (e) => {
    // ...formData keeps the other parameters saved i.e if we enter some username, it will save that and when we enter email, it will have the username saved

    //.trim() removes blank spaces from the input
    setFormDataWall({ ...formDataWall, [e.target.id]: e.target.value.trim() });
    console.log(formDataWall);
  };

  const handleChangeCylinder = (e) => {
    // ...formData keeps the other parameters saved i.e if we enter some username, it will save that and when we enter email, it will have the username saved

    //.trim() removes blank spaces from the input
    setFormDataCylinder({
      ...formDataCylinder,
      [e.target.id]: e.target.value.trim(),
    });
    console.log(formDataCylinder);
  };

  const handleChangeSphere = (e) => {
    // ...formData keeps the other parameters saved i.e if we enter some username, it will save that and when we enter email, it will have the username saved

    //.trim() removes blank spaces from the input
    setFormDataSphere({
      ...formDataSphere,
      [e.target.id]: e.target.value.trim(),
    });
    console.log(formDataSphere);
  };

  const handleSubmitWall = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/conduction/wall", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataWall),
      });
      const data = await res.json();
      setCalculatedValuesWall(data);
      if (data.success === false) {
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmitCylinder = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/conduction/cylinder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataCylinder),
      });
      const data = await res.json();
      setCalculatedValuesCylinder(data);
      if (data.success === false) {
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmitSphere = async (e) => {
    e.preventDefault();
    // if (
    //   !formData.username ||
    //   !formData.email ||
    //   !formData.password ||
    //   !formData.rollNo ||
    //   !formData.hostel
    // ) {
    //   return setErrorMessage("Please fill out all the fields.");
    // }
    try {
      // when the user presses submit, it should show loading until finished and initially an error shouldn't be there i.e the error has to be caught during this process
      //   setLoading(true);
      //   setErrorMessage(null);
      const res = await fetch("http://localhost:3000/api/conduction/sphere", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataSphere),
      });
      const data = await res.json();
      setCalculatedValuesSphere(data);
      if (data.success === false) {
        //return setErrorMessage(data.message);
      }
      //setLoading(false);
      //   if (res.ok) {
      //     navigate("/sign-in");
      //   }
    } catch (error) {
      console.error("Error:", error);
      //   setErrorMessage(error.message);
      //   setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      {wall && (
        //<div className="min-h-screen mt-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          {/* left */}
          <div className="flex-1">
            <Link to="/" className="font-bold dark:text-white text-4xl">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Wall Conduction{" "}
              </span>
              Algorithm
            </Link>
            <p className="text-sm mt-5">
              Enter the variables given to you in the question and get the
              remaining ones!
            </p>
          </div>
          {/* right */}

          <div className="flex-1">
            <form className="flex flex-col gap-4" onSubmit={handleSubmitWall}>
              <div>
                <Label value="Enter Heat Transfer Rate:" />
                <TextInput
                  type="number"
                  placeholder="Q [in W]"
                  id="heatTransferRate"
                  onChange={handleChangeWall}
                  step="any"
                />
              </div>
              <div>
                <Label value="Enter Temperature Coefficient:" />
                <TextInput
                  type="number"
                  placeholder="K [in W/m.K]"
                  id="temperatureCoefficient"
                  onChange={handleChangeWall}
                  step="any"
                />
              </div>
              <div>
                <Label value="Enter Area:" />
                <TextInput
                  type="number"
                  placeholder="Area [in m^2]"
                  id="area"
                  onChange={handleChangeWall}
                  step="any"
                />
              </div>
              <div>
                <Label value="Enter Initial Temperature:" />
                <TextInput
                  type="number"
                  placeholder="T1 [in K]"
                  id="initialTemperature"
                  onChange={handleChangeWall}
                  step="any"
                />
              </div>
              <div>
                <Label value="Enter Final Temperature:" />
                <TextInput
                  type="number"
                  placeholder="T2 [in K]"
                  id="finalTemperature"
                  onChange={handleChangeWall}
                  step="any"
                />
              </div>

              <div>
                <Label value="Enter Length" />
                Cylinder
                <TextInput
                  type="text"
                  placeholder="L in [m]"
                  id="length"
                  onChange={handleChangeWall}
                  step="any"
                />
              </div>
              <Button gradientDuoTone="purpleToPink" type="submit">
                Calculate The Rest
              </Button>
            </form>
            {/* Display calculated values */}
            {Object.keys(calculatedValuesWall).map((key) => (
              <div className="mt-2" key={key}>
                <Label value={`Calculated ${key}:`} />
                <p>{calculatedValuesWall[key]}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {cylinder && (
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          {/* left */}
          <div className="flex-1">
            <Link to="/" className="font-bold dark:text-white text-4xl">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                CyclinderConduction{" "}
              </span>
              Algorithm
            </Link>
            <p className="text-sm mt-5">
              Enter the variables given to you in the question and get the
              remaining ones!
            </p>
          </div>
          {/* right */}

          <div className="flex-1">
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmitCylinder}
            >
              <div>
                <Label value="Enter Heat Transfer Rate:" />
                <TextInput
                  type="number"
                  placeholder="Q [in W]"
                  id="heatTransferRate"
                  onChange={handleChangeCylinder}
                  step="any"
                />
              </div>
              <div>
                <Label value="Enter Temperature Coefficient:" />
                <TextInput
                  type="number"
                  placeholder="K [in W/m.K]"
                  id="temperatureCoefficient"
                  onChange={handleChangeCylinder}
                  step="any"
                />
              </div>
              <div>
                <Label value="Enter Inner Radius:" />
                <TextInput
                  type="number"
                  placeholder="r1 [in m]"
                  id="innerRadius"
                  onChange={handleChangeCylinder}
                  step="any"
                />
              </div>
              <div>
                <Label value="Enter Outer Radius:" />
                <TextInput
                  type="number"
                  placeholder="r2 [in m]"
                  id="outerRadius"
                  onChange={handleChangeCylinder}
                  step="any"
                />
              </div>
              <div>
                <Label value="Enter Initial Temperature:" />
                <TextInput
                  type="number"
                  placeholder="T1 [in K]"
                  id="initialTemperature"
                  onChange={handleChangeCylinder}
                  step="any"
                />
              </div>
              <div>
                <Label value="Enter Final Temperature:" />
                <TextInput
                  type="number"
                  placeholder="T2 [in K]"
                  id="finalTemperature"
                  onChange={handleChangeCylinder}
                  step="any"
                />
              </div>

              <div>
                <Label value="Enter Length" />
                <TextInput
                  type="text"
                  placeholder="L in [m]"
                  id="length"
                  onChange={handleChangeCylinder}
                  step="any"
                />
              </div>
              <Button gradientDuoTone="purpleToPink" type="submit">
                Calculate The Rest
              </Button>
            </form>
            {/* Display calculated values */}
            {Object.keys(calculatedValuesCylinder).map((key) => (
              <div className="mt-2" key={key}>
                <Label value={`Calculated ${key}:`} />
                <p>{calculatedValuesCylinder[key]}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {sphere && (
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          {/* left */}
          <div className="flex-1">
            <Link to="/" className="font-bold dark:text-white text-4xl">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                SphericalConduction{" "}
              </span>
              Algorithm
            </Link>
            <p className="text-sm mt-5">
              Enter the variables given to you in the question and get the
              remaining ones!
            </p>
          </div>
          {/* right */}

          <div className="flex-1">
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmitSphere}
              step="any"
            >
              <div>
                <Label value="Enter Heat Transfer Rate:" />
                <TextInput
                  type="number"
                  placeholder="Q [in W]"
                  id="heatTransferRate"
                  onChange={handleChangeSphere}
                  step="any"
                />
              </div>
              <div>
                <Label value="Enter Temperature Coefficient:" />
                <TextInput
                  type="number"
                  placeholder="K [in W/m.K]"
                  id="temperatureCoefficient"
                  onChange={handleChangeSphere}
                  step="any"
                />
              </div>
              <div>
                <Label value="Enter Inner Radius:" />
                <TextInput
                  type="number"
                  placeholder="r1 [in m]"
                  id="innerRadius"
                  onChange={handleChangeSphere}
                  step="any"
                />
              </div>
              <div>
                <Label value="Enter Outer Radius:" />
                <TextInput
                  type="number"
                  placeholder="r2 [in m]"
                  id="outerRadius"
                  onChange={handleChangeSphere}
                  step="any"
                />
              </div>
              <div>
                <Label value="Enter Initial Temperature:" />
                <TextInput
                  type="number"
                  placeholder="T1 [in K]"
                  id="initialTemperature"
                  onChange={handleChangeSphere}
                  step="any"
                />
              </div>
              <div>
                <Label value="Enter Final Temperature:" />
                <TextInput
                  type="number"
                  placeholder="T2 [in K]"
                  id="finalTemperature"
                  onChange={handleChangeSphere}
                  step="any"
                />
              </div>

              <Button gradientDuoTone="purpleToPink" type="submit">
                Calculate The Rest
              </Button>
            </form>
            {Object.keys(calculatedValuesSphere).map((key) => (
              <div className="mt-2" key={key}>
                <Label value={`Calculated ${key}:`} />
                <p>{calculatedValuesSphere[key]}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex gap-2 text-sm mt-5 justify-center">
        <Button
          gradientDuoTone="purpleToPink"
          onClick={() => {
            setWall(true), setCylinder(false), setSphere(false);
          }}
        >
          Wall Conduction
        </Button>
        <Button
          gradientDuoTone="purpleToPink"
          onClick={() => {
            setWall(false), setCylinder(true), setSphere(false);
          }}
        >
          Cylindrical Conduction
        </Button>
        <Button
          gradientDuoTone="purpleToPink"
          onClick={() => {
            setWall(false), setCylinder(false), setSphere(true);
          }}
        >
          Spherical Conduction
        </Button>
      </div>
    </div>
  );
}
