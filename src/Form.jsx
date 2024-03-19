import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [check, setCheck] = useState(false);
//   console.log(check);

  const handleSupmit = (e) => {
    e.preventDefault();
    if(!check){
        return;
    }
    setIsSubmit(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 bg-purple-400 p-7">
        <form onSubmit={(e) => handleSupmit(e)}>
          <h1 className=" text-3xl font-bold text-center my-6">Login</h1>
          <div className="space-y-5">
            <div>
              <p className="text-xl font-semibold">Name:</p>
              <input
                onChange={(e) => setName(e.currentTarget.value)}
                className="w-full p-3 border-2 border-purple-600 bg-purple-200"
                type="text"
                placeholder="Enter name"
                
              />
            </div>
            <div>
              <p className="text-xl font-semibold">Email:</p>
              <input
                onChange={(e) => setEmail(e.currentTarget.value)}
                className="w-full p-3 border-2 border-purple-600 bg-purple-200"
                type="email"
                placeholder="Enter email"
                
              />
            </div>
            <div>
              <p className="text-xl font-semibold">Password:</p>
              <input
                onChange={(e) => setPassword(e.currentTarget.value)}
                className="w-full p-3 border-2 border-purple-600 bg-purple-200"
                type="password"
                placeholder="Enter password"
                
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <input type="checkbox" onChange={(e)=> setCheck(e.target.checked) } name="" id="" />{" "}
                <span className="text-sm">
                  Do you agree with trams and condition?
                </span>
              </div>
              <div>
                <button className="bg-purple-800 px-8 py-3 text-xl font-semibold text-white hover:bg-purple-600">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {isSubmit && (
        <div className="fixed h-screen flex w-full justify-center items-center">
          <div className="bg-purple-900 w-2/4 h-1/2 text-center p-5">
            <h1 className="text-3xl font-semibold text-white">
              Login successful
            </h1>
            <div className="text-white my-7">
              <p className="text-xl font-semibold">Name: {name}</p>
              <p className="text-xl font-semibold">Email: {email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
