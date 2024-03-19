import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSupmit = e =>{
        e.preventDefault()
        console.log(`name:${name}, email: ${email}, password: ${password}`);
    }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 bg-purple-400 p-7">
        <form onSubmit={e => handleSupmit(e)}>
          <h1 className=" text-3xl font-bold text-center my-6">Login</h1>
          <div className="space-y-5">
            <div>
              <p className="text-xl font-semibold">Name:</p>
              <input
              onChange={e => setName(e.currentTarget.value)}
                className="w-full p-3 border-2 border-purple-600 bg-purple-200"
                type="text"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">Email:</p>
              <input
              onChange={e => setEmail(e.currentTarget.value)}
                className="w-full p-3 border-2 border-purple-600 bg-purple-200"
                type="email"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <p className="text-xl font-semibold">Password:</p>
              <input
              onChange={e => setPassword(e.currentTarget.value)}
                className="w-full p-3 border-2 border-purple-600 bg-purple-200"
                type="password"
                placeholder="Enter Name"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <input type="checkbox" name="" id="" />{" "}
                <span className="text-sm">
                  Do you agree with trams and condition?
                </span>
              </div>
              <div>
                <button className="bg-purple-800 px-8 py-3 text-xl font-semibold text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
