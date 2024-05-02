import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Convection() {
  const [formData, setFormData] = useState({});
  const [calculatedValues, setCalculatedValues] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    // ...formData keeps the other parameters saved i.e if we enter some username, it will save that and when we enter email, it will have the username saved

    //.trim() removes blank spaces from the input
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
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
      const res = await fetch(
        "http://localhost:3000/api/convection/convection",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      setCalculatedValues(data);
      if (data.success === false) {
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Convection{" "}
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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Enter Heat Transfer Rate:" />
              <TextInput
                type="number"
                placeholder="Q [in W]"
                id="heatTransferRate"
                onChange={handleChange}
                step="any"
              />
            </div>
            <div>
              <Label value="Enter Heat Transfer Coefficient:" />
              <TextInput
                type="number"
                placeholder="h [in W/(m^2)K]"
                id="heatTransferCoefficient"
                onChange={handleChange}
                step="any"
              />
            </div>
            <div>
              <Label value="Enter Area:" />
              <TextInput
                type="number"
                placeholder="Area [in m^2]"
                id="area"
                onChange={handleChange}
                step="any"
              />
            </div>
            <div>
              <Label value="Enter Initial Temperature:" />
              <TextInput
                type="number"
                placeholder="T1 [in K]"
                id="initialTemperature"
                onChange={handleChange}
                step="any"
              />
            </div>
            <div>
              <Label value="Enter Final Temperature:" />
              <TextInput
                type="number"
                placeholder="T2 [in K]"
                id="finalTemperature"
                onChange={handleChange}
                step="any"
              />
            </div>
            <div>
              <Label value="Enter Thermal Resistance:" />
              <TextInput
                type="number"
                placeholder="R [in K/W]"
                id="thermalResistance"
                onChange={handleChange}
                step="any"
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Calculate The Rest
            </Button>
          </form>

          {/* Display calculated values */}
          {Object.keys(calculatedValues).map((key) => (
            <div className="mt-2" key={key}>
              <Label value={`Calculated ${key}:`} />
              <p>{calculatedValues[key]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
