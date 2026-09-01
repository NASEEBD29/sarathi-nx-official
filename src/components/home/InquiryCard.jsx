import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function InquiryCard() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // ==============================
  // HANDLE INPUT CHANGE
  // ==============================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // ==============================
  // HANDLE FORM SUBMIT
  // ==============================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {

      // ==============================
      // SAVE DATA TO SPRING BOOT
      // ==============================

      const response = await fetch(
        "https://sarathinx.com/api/enquiries",

        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );


      // ==============================
      // CHECK RESPONSE
      // ==============================

      if (!response.ok) {
        throw new Error("Failed to save enquiry");
      }


      // ==============================
      // GET SAVED DATA
      // ==============================

      const savedData = await response.json();

      console.log(
        "Enquiry successfully saved in database:",
        savedData
      );


      // ==============================
      // SUCCESS MESSAGE
      // ==============================

      setSuccess(
        "Thank you! Your enquiry has been submitted successfully."
      );


      // ==============================
      // WHATSAPP MESSAGE
      // ==============================

      const whatsappNumber = "917666984626";

      const whatsappMessage = encodeURIComponent(
        `Hello Sarathi NX,

I would like to know more about your travel services.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Message: ${formData.message}`
      );


      // ==============================
      // OPEN WHATSAPP
      // ONLY AFTER DATABASE SUCCESS
      // ==============================

      window.open(
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
        "_blank"
      );


      // ==============================
      // RESET FORM
      // ==============================

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });

    } catch (err) {

      console.error(
        "Enquiry submission error:",
        err
      );

      // ==============================
      // ERROR MESSAGE
      // ==============================

      setError(
        "Unable to submit enquiry. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };


  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm">

      {/* ==============================
          HEADING
      ============================== */}

      <h2 className="text-2xl font-bold text-[#003DA5] mb-2">
        Quick Enquiry
      </h2>


      <p className="text-gray-500 text-sm mb-6">
        Get in touch with our travel experts.
      </p>


      {/* ==============================
          FORM
      ============================== */}

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        {/* NAME */}

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          disabled={loading}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#003DA5] disabled:bg-gray-100"
        />


        {/* PHONE */}

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          disabled={loading}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#003DA5] disabled:bg-gray-100"
        />


        {/* EMAIL */}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          disabled={loading}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#003DA5] disabled:bg-gray-100"
        />


        {/* SERVICE */}

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          disabled={loading}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#003DA5] disabled:bg-gray-100"
        >

          <option value="">
            Select Service
          </option>

          <option value="Business Travel">
            Business Travel
          </option>

          <option value="Exhibition Tour">
            Exhibition Tour
          </option>

          <option value="Visa Assistance">
            Visa Assistance
          </option>

          <option value="Corporate Tour">
            Corporate Tour
          </option>

          <option value="International Exhibition Travel">
            International Exhibition Travel
          </option>

          <option value="Group Tours">
            Group Tours
          </option>

          <option value="MICE">
            MICE
          </option>

        </select>


        {/* MESSAGE */}

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="3"
          disabled={loading}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#003DA5] resize-none disabled:bg-gray-100"
        />


        {/* ==============================
            SUCCESS MESSAGE
        ============================== */}

        {success && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-green-600 text-sm font-medium">
              {success}
            </p>

            <p className="text-green-600 text-xs mt-1">
              WhatsApp is opening...
            </p>
          </div>
        )}


        {/* ==============================
            ERROR MESSAGE
        ============================== */}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-red-600 text-sm font-medium">
              {error}
            </p>
          </div>
        )}


        {/* ==============================
            SUBMIT BUTTON
        ============================== */}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#003DA5] hover:bg-[#002B73] disabled:bg-gray-400 text-white py-3 rounded-lg flex justify-center items-center gap-2 transition-all duration-300"
        >

          <FaPaperPlane />

          {loading
            ? "Sending..."
            : "Send Enquiry"
          }

        </button>

      </form>

    </div>
  );
}