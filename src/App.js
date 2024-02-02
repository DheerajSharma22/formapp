import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    notification: "",
    comment: false,
    candidates: false,
    offers: false,
  });

  const updateHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form
        className="w-[100vw] min-h-[100vh] m-auto shadow-md p-5 flex flex-col gap-2 md:w-[50vw] md:p-10"
        onSubmit={submitHandler}
      >
        <div className="w-full flex flex-col">
          <label htmlFor="fname" className="font-semibold text-sm">
            First Name
          </label>
          <input
            type="text"
            placeholder="pranay"
            id="fname"
            name="firstName"
            className="border border-blue-300 p-2 rounded-lg mt-2"
            onChange={updateHandler}
            value={formData.firstName}
          />
        </div>

        <div className="w-full flex flex-col">
          <label className="font-semibold text-sm" htmlFor="lname">
            Last Name
          </label>
          <input
            className="border border-blue-300 p-2 rounded-lg mt-2"
            type="text"
            placeholder="Gupta"
            id="lname"
            name="lastName"
            onChange={updateHandler}
            value={formData.lastName}
          />
        </div>

        <div className="w-full flex flex-col">
          <label className="font-semibold text-sm" htmlFor="email">
            Email Address
          </label>
          <input
            className="border border-blue-300 p-2 rounded-lg mt-2"
            type="text"
            placeholder="pgupta@duck.com"
            id="email"
            name="email"
            onChange={updateHandler}
            value={formData.email}
          />
        </div>

        <div className="w-full flex flex-col">
          <label className="font-semibold text-sm" htmlFor="country">
            Country
          </label>
          <select
            name="country"
            id="country"
            className="border border-blue-300 p-2 rounded-lg mt-2"
            onChange={updateHandler}
            value={formData.country}
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Sri Lanka">Sri Lanka</option>
          </select>
        </div>

        <div className="w-full flex flex-col">
          <label className="font-semibold text-sm" htmlFor="saddress">
            Street Address
          </label>
          <input
            className="border border-blue-300 p-2 rounded-lg mt-2"
            type="text"
            placeholder="1234 Main St"
            id="saddress"
            name="street"
            onChange={updateHandler}
            value={formData.street}
          />
        </div>

        <div className="w-full flex flex-col">
          <label className="font-semibold text-sm" htmlFor="city">
            City
          </label>
          <input
            className="border border-blue-300 p-2 rounded-lg mt-2"
            type="text"
            placeholder="Ujjain"
            id="city"
            name="city"
            onChange={updateHandler}
            value={formData.city}
          />
        </div>

        <div className="w-full flex flex-col">
          <label className="font-semibold text-sm" htmlFor="state">
            State / Province
          </label>
          <input
            className="border border-blue-300 p-2 rounded-lg mt-2"
            type="text"
            placeholder="Madhya Pradesh"
            id="state"
            name="state"
            onChange={updateHandler}
            value={formData.state}
          />
        </div>

        <div className="w-full flex flex-col">
          <label className="font-semibold text-sm" htmlFor="zipCode">
            Zip / Postal Code
          </label>
          <input
            className="border border-blue-300 p-2 rounded-lg mt-2"
            type="text"
            placeholder="456006"
            id="zipCode"
            name="zipCode"
            onChange={updateHandler}
            value={formData.zipCode}
          />
        </div>

        <div>
          <p className="font-semibold text-sm">By Email</p>
          <div className="flex items-start gap-5 mt-5 w-full text-sm">
            <input
              type="checkbox"
              name="comment"
              id="comment"
              className="mt-1 w-4 h-4 rounded"
              onChange={updateHandler}
              value={formData.comments}
            />
            <div>
              <label htmlFor="comment" className="font-semibold">
                Comments
              </label>
              <p className="text-gray-500">
                Get notified when someones posts a comment on a posting.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5 mt-5 w-full text-sm">
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              className="mt-1 w-4 h-4 rounded"
              onChange={updateHandler}
              value={formData.candidates}
            />
            <div>
              <label htmlFor="candidates" className="font-semibold">
                Candidates
              </label>
              <p className="text-gray-500">
                Get notified when a candidate applies for a job.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5 mt-5 w-full text-sm">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              className="mt-1 w-4 h-4 rounded"
              onChange={updateHandler}
              value={formData.offers}
            />
            <div>
              <label htmlFor="offers" className="font-semibold">
                Offers
              </label>
              <p className="text-gray-500">
                Get notified when a candidate accepts or rejects an offer.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="text-sm">
            <p className="font-semibold">Push Notifications</p>
            <p className="text-gray-500">
              These are delivered via SMS to your mobile phone.
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-5">
            <div className="flex gap-3 items-center">
              <input
                type="radio"
                name="notification"
                id="everything"
                className="w-4 h-4"
                onChange={updateHandler}
                value="everything"
              />
              <label htmlFor="everything">Everything</label>
            </div>

            <div className="flex gap-3 items-center">
              <input
                type="radio"
                name="notification"
                id="sameasemail"
                className="w-4 h-4"
                onChange={updateHandler}
                value="same as email"
              />
              <label htmlFor="sameasemail">Same as email</label>
            </div>

            <div className="flex gap-3 items-center">
              <input
                type="radio"
                name="notification"
                id="nopushnotifications"
                className="w-4 h-4"
                onChange={updateHandler}
                value="no push notifications"
              />
              <label htmlFor="nopushnotifications">No push notifications</label>
            </div>
          </div>
        </div>

        <div>
          <input
            type="submit"
            value="save"
            className=" bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-white font-bold capitalize mt-2 cursor-pointer"
          />
        </div>
      </form>
    </>
  );
}

export default App;
