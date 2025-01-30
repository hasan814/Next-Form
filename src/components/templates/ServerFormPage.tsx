const ServerFormPage = () => {
  // ============= Submit Function =============
  const addHandler = async (formData) => {
    "use server";
    const title = formData.get("title");
    const description = formData.get("description");
  };

  // ============= Rendering =============
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Server Form
        </h1>

        <form action={addHandler} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">
              title name
            </label>
            <input
              type="text"
              name="title"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter Title name"
            />
          </div>

          <div>
            <label className="capitalize block text-sm font-medium text-gray-700">
              description
            </label>
            <input
              type="text"
              name="description"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter IP address"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServerFormPage;
