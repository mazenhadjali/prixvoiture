import { useState } from "react";

function CreateUser() {
  const [user, setUser] = useState({
    id: '',
    firstname: '',
    lastname: '',
    dob: 0,
    tel: '',
    email: '',
    username: '',
    password: '',
    // roles: [], // excluding roles field
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <form className="max-w-md mx-auto">
        {/* Add your form fields here */}
        <div className="mb-4">
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-600">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={user.firstname}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={user.lastname}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-600">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={user.dob}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tel" className="block text-sm font-medium text-gray-600">
            Phone Number
          </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={user.tel}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
