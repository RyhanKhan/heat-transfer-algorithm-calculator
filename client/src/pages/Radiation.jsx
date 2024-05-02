import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Radiation() {
  const [formDataNormal, setFormDataNormal] = useState({});
  const [calculatedValuesNormal, setCalculatedValuesNormal] = useState({});
  const [formDataBB, setFormDataBB] = useState({});
  const [calculatedValuesBB, setCalculatedValuesBB] = useState({});
  const navigate = useNavigate();

  const [normal, setNormal] = useState(true);
  const [blackBody, setBlackBody] = useState(false);

  const handleChangeNormal = (e) => {
    // ...formData keeps the other parameters saved i.e if we enter some username, it will save that and when we enter email, it will have the username saved

    //.trim() removes blank spaces from the input
    setFormDataNormal({
      ...formDataNormal,
      [e.target.id]: e.target.value.trim(),
    });
    console.log(formDataNormal);
  };

  const handleChangeBB = (e) => {
    // ...formData keeps the other parameters saved i.e if we enter some username, it will save that and when we enter email, it will have the username saved

    //.trim() removes blank spaces from the input
    setFormDataBB({ ...formDataBB, [e.target.id]: e.target.value.trim() });
    console.log(formDataBB);
  };

  const handleSubmitNormal = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/radiation/energy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataNormal),
      });
      const data = await res.json();
      setCalculatedValuesNormal(data);
      if (data.success === false) {
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmitBB = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:3000/api/radiation/energy-black-body",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formDataBB),
        }
      );
      const data = await res.json();
      setCalculatedValuesBB(data);
      if (data.success === false) {
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      {normal && (
        //<div className="min-h-screen mt-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          {/* left */}
          <div className="flex-1">
            <Link to="/" className="font-bold dark:text-white text-4xl">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Radiation{" "}
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
            <form className="flex flex-col gap-4" onSubmit={handleSubmitNormal}>
              <div>
                <Label value="Enter Energy:" />
                <TextInput
                  type="number"
                  placeholder="E [in J]"
                  id="energy"
                  onChange={handleChangeNormal}
                  step="any"
                />
              </div>
              <div>
                <Label value="Enter Emissive Power:" />
                <TextInput
                  type="number"
                  placeholder=""
                  id="emissivePower"
                  onChange={handleChangeNormal}
                  step="any"
                />
              </div>
              <div>
                <Label value="Enter Temperature:" />
                <TextInput
                  type="number"
                  placeholder="T [in K]"
                  id="Temperature"
                  onChange={handleChangeNormal}
                  step="any"
                />
              </div>

              <Button gradientDuoTone="purpleToPink" type="submit">
                Calculate The Rest
              </Button>
            </form>
            {/* Display calculated values */}
            {Object.keys(calculatedValuesNormal).map((key) => (
              <div className="mt-2" key={key}>
                <Label value={`Calculated ${key}:`} />
                <p>{calculatedValuesNormal[key]}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {blackBody && (
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          {/* left */}
          <div className="flex-1">
            <Link to="/" className="font-bold dark:text-white text-4xl">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                BB Radiation{" "}
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
            <form className="flex flex-col gap-4" onSubmit={handleSubmitBB}>
              <div>
                <Label value="Enter Energy:" />
                <TextInput
                  type="number"
                  placeholder="E [in J]"
                  id="energy"
                  onChange={handleChangeBB}
                  step="any"
                />
              </div>

              <div>
                <Label value="Enter Temperature:" />
                <TextInput
                  type="number"
                  placeholder="T [in K]"
                  id="Temperature"
                  onChange={handleChangeBB}
                  step="any"
                />
              </div>
              <Button gradientDuoTone="purpleToPink" type="submit">
                Calculate The Rest
              </Button>
            </form>
            {/* Display calculated values */}
            {Object.keys(calculatedValuesBB).map((key) => (
              <div className="mt-2" key={key}>
                <Label value={`Calculated ${key}:`} />
                <p>{calculatedValuesBB[key]}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-2 text-sm mt-5 justify-center">
        <Button
          gradientDuoTone="purpleToPink"
          onClick={() => {
            setNormal(true), setBlackBody(false);
          }}
        >
          Radiation
        </Button>
        <Button
          gradientDuoTone="purpleToPink"
          onClick={() => {
            setNormal(false), setBlackBody(true);
          }}
        >
          Black Body Radiation
        </Button>
      </div>
    </div>
  );
}
