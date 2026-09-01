import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://sarathinx.com/api";

function AdminDashboard() {
  const navigate = useNavigate();

  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState("All");

  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const username = localStorage.getItem("adminUsername");

  // =====================================================
  // LOGOUT / SESSION EXPIRED
  // =====================================================

  const logoutAndRedirect = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUsername");

    navigate("/admin/login", {
      replace: true,
    });
  };

  // =====================================================
  // FETCH ENQUIRIES
  // =====================================================

  const fetchEnquiries = async () => {
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        logoutAndRedirect();
        return;
      }

      const response = await fetch(`${API_URL}/enquiries`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 401 || response.status === 403) {
        logoutAndRedirect();
        return;
      }

      if (!response.ok) {
        throw new Error(
          `Failed to fetch enquiries (${response.status})`
        );
      }

      const data = await response.json();

      setEnquiries(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching enquiries:", error);

      setError(
        "Unable to load enquiries. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // INITIAL LOAD
  // =====================================================

  useEffect(() => {
    fetchEnquiries();
  }, []);

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
    logoutAndRedirect();
  };

  // =====================================================
  // DELETE ENQUIRY
  // =====================================================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        logoutAndRedirect();
        return;
      }

      const response = await fetch(
        `${API_URL}/enquiries/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 401 || response.status === 403) {
        logoutAndRedirect();
        return;
      }

      if (!response.ok) {
        throw new Error(
          `Failed to delete enquiry (${response.status})`
        );
      }

      setEnquiries((previous) =>
        previous.filter(
          (enquiry) => enquiry.id !== id
        )
      );

      if (
        selectedEnquiry &&
        selectedEnquiry.id === id
      ) {
        setSelectedEnquiry(null);
      }
    } catch (error) {
      console.error("Error deleting enquiry:", error);

      alert("Unable to delete enquiry.");
    }
  };

  // =====================================================
  // EXPORT CSV
  // =====================================================

  const handleExportCSV = () => {
    if (filteredEnquiries.length === 0) {
      alert("No enquiries available to export.");
      return;
    }

    const headers = [
      "ID",
      "Name",
      "Phone",
      "Email",
      "Service",
      "Message",
      "Created At",
    ];

    const rows = filteredEnquiries.map((enquiry) => [
      enquiry.id ?? "",
      enquiry.name ?? "",
      enquiry.phone ?? "",
      enquiry.email ?? "",
      enquiry.service ?? "",
      enquiry.message ?? "",
      enquiry.createdAt
        ? new Date(enquiry.createdAt).toLocaleString()
        : "",
    ]);

    const csvContent = [headers, ...rows]
      .map((row) =>
        row
          .map((value) => {
            const text = String(value).replace(
              /"/g,
              '""'
            );

            return `"${text}"`;
          })
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = `sarathi-nx-enquiries-${new Date()
      .toISOString()
      .slice(0, 10)}.csv`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  // =====================================================
  // TODAY
  // =====================================================

  const today = new Date();

  const todayEnquiries = useMemo(() => {
    return enquiries.filter((enquiry) => {
      if (!enquiry.createdAt) {
        return false;
      }

      const date = new Date(enquiry.createdAt);

      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    });
  }, [enquiries]);

  // =====================================================
  // THIS MONTH
  // =====================================================

  const monthEnquiries = useMemo(() => {
    return enquiries.filter((enquiry) => {
      if (!enquiry.createdAt) {
        return false;
      }

      const date = new Date(enquiry.createdAt);

      return (
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    });
  }, [enquiries]);

  // =====================================================
  // SERVICES
  // =====================================================

  const services = useMemo(() => {
    const uniqueServices = enquiries
      .map((enquiry) => enquiry.service)
      .filter(Boolean);

    return [
      "All",
      ...new Set(uniqueServices),
    ];
  }, [enquiries]);

  // =====================================================
  // MOST REQUESTED SERVICE
  // =====================================================

  const mostRequestedService = useMemo(() => {
    if (enquiries.length === 0) {
      return "-";
    }

    const serviceCount = {};

    enquiries.forEach((enquiry) => {
      const service = enquiry.service || "Other";

      serviceCount[service] =
        (serviceCount[service] || 0) + 1;
    });

    const sorted = Object.entries(serviceCount).sort(
      (a, b) => b[1] - a[1]
    );

    return sorted.length > 0
      ? sorted[0][0]
      : "-";
  }, [enquiries]);

  // =====================================================
  // SEARCH + FILTER
  // =====================================================

  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((enquiry) => {
      const searchText = search
        .toLowerCase()
        .trim();

      const matchesSearch =
        !searchText ||
        enquiry.name
          ?.toLowerCase()
          .includes(searchText) ||
        enquiry.phone
          ?.toLowerCase()
          .includes(searchText) ||
        enquiry.email
          ?.toLowerCase()
          .includes(searchText);

      const matchesService =
        serviceFilter === "All" ||
        enquiry.service === serviceFilter;

      return matchesSearch && matchesService;
    });
  }, [enquiries, search, serviceFilter]);

  // =====================================================
  // RECENT ENQUIRIES
  // =====================================================

  const recentEnquiries = useMemo(() => {
    return [...enquiries]
      .sort((a, b) => {
        const dateA = a.createdAt
          ? new Date(a.createdAt).getTime()
          : 0;

        const dateB = b.createdAt
          ? new Date(b.createdAt).getTime()
          : 0;

        return dateB - dateA;
      })
      .slice(0, 5);
  }, [enquiries]);

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}

      <header className="border-b bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-4 px-6 py-4 md:flex-row md:items-center">

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Admin Dashboard
            </h1>

            <p className="text-sm text-gray-500">
              Manage Sarathi NX enquiries
            </p>
          </div>

          <div className="flex items-center gap-3">

            {username && (
              <div className="hidden text-right sm:block">
                <p className="text-xs text-gray-500">
                  Logged in as
                </p>

                <p className="font-semibold text-gray-800">
                  {username}
                </p>
              </div>
            )}

            <button
              onClick={fetchEnquiries}
              disabled={loading}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
            >
              {loading ? "Loading..." : "Refresh"}
            </button>

            <button
              onClick={handleLogout}
              className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Logout
            </button>

          </div>
        </div>
      </header>

      {/* MAIN */}

      <main className="p-6">

        {/* ANALYTICS */}

        <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* TOTAL */}

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Total Enquiries
                </p>

                <h2 className="mt-2 text-3xl font-bold text-teal-600">
                  {enquiries.length}
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-xl">
                📩
              </div>

            </div>
          </div>

          {/* TODAY */}

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Today's Enquiries
                </p>

                <h2 className="mt-2 text-3xl font-bold text-blue-600">
                  {todayEnquiries.length}
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
                📅
              </div>

            </div>
          </div>

          {/* MONTH */}

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  This Month
                </p>

                <h2 className="mt-2 text-3xl font-bold text-purple-600">
                  {monthEnquiries.length}
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl">
                📊
              </div>

            </div>
          </div>

          {/* POPULAR SERVICE */}

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">

              <div className="min-w-0">
                <p className="text-sm text-gray-500">
                  Popular Service
                </p>

                <h2 className="mt-2 truncate text-lg font-bold text-orange-600">
                  {mostRequestedService}
                </h2>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xl">
                ⭐
              </div>

            </div>
          </div>

        </div>

        {/* RECENT ENQUIRIES */}

        <div className="mb-6 rounded-2xl bg-white shadow-sm">

          <div className="border-b px-6 py-4">
            <h2 className="text-lg font-bold text-gray-800">
              Recent Enquiries
            </h2>

            <p className="text-sm text-gray-500">
              Latest customer enquiries
            </p>
          </div>

          <div className="divide-y">

            {recentEnquiries.length === 0 ? (

              <div className="p-6 text-center text-gray-500">
                No enquiries available.
              </div>

            ) : (

              recentEnquiries.map((enquiry) => (
                <div
                  key={enquiry.id}
                  className="flex flex-col gap-3 px-6 py-4 transition hover:bg-gray-50 md:flex-row md:items-center md:justify-between"
                >

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {enquiry.name || "Unknown"}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {enquiry.email || "-"}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                      {enquiry.service || "Other"}
                    </span>

                    <span className="text-xs text-gray-400">
                      {enquiry.createdAt
                        ? new Date(
                            enquiry.createdAt
                          ).toLocaleDateString()
                        : "-"}
                    </span>

                    <button
                      onClick={() =>
                        setSelectedEnquiry(enquiry)
                      }
                      className="rounded-lg bg-blue-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-600"
                    >
                      View
                    </button>

                  </div>

                </div>
              ))

            )}

          </div>
        </div>

        {/* SEARCH / FILTER */}

        <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm">

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

            <input
              type="text"
              placeholder="Search name, phone or email..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-500"
            />

            <select
              value={serviceFilter}
              onChange={(e) =>
                setServiceFilter(e.target.value)
              }
              className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-500"
            >
              {services.map((service) => (
                <option
                  key={service}
                  value={service}
                >
                  {service}
                </option>
              ))}
            </select>

            <button
              onClick={handleExportCSV}
              className="rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              📥 Export CSV
            </button>

          </div>
        </div>

        {/* ERROR */}

        {error && (
          <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* TABLE */}

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

          <div className="border-b px-6 py-4">
            <h2 className="text-lg font-bold text-gray-800">
              All Enquiries
            </h2>

            <p className="text-sm text-gray-500">
              {filteredEnquiries.length} enquiries found
            </p>
          </div>

          <div className="overflow-x-auto">

            {loading ? (

              <div className="p-10 text-center text-gray-500">
                Loading enquiries...
              </div>

            ) : filteredEnquiries.length === 0 ? (

              <div className="p-10 text-center text-gray-500">

                <p className="text-lg font-medium">
                  No enquiries found
                </p>

                <p className="mt-1 text-sm">
                  Try changing your search or service filter.
                </p>

              </div>

            ) : (

              <table className="w-full min-w-[1100px] text-left">

                <thead className="bg-gray-50">
                  <tr>

                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                      ID
                    </th>

                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                      Name
                    </th>

                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                      Phone
                    </th>

                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                      Email
                    </th>

                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                      Service
                    </th>

                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                      Date
                    </th>

                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">
                      Action
                    </th>

                  </tr>
                </thead>

                <tbody>

                  {filteredEnquiries.map((enquiry) => (
                    <tr
                      key={enquiry.id}
                      className="border-b transition hover:bg-gray-50"
                    >

                      <td className="px-4 py-4 text-sm text-gray-500">
                        #{enquiry.id}
                      </td>

                      <td className="px-4 py-4 text-sm font-semibold text-gray-800">
                        {enquiry.name || "-"}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-600">
                        {enquiry.phone || "-"}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-600">
                        {enquiry.email || "-"}
                      </td>

                      <td className="px-4 py-4">
                        <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                          {enquiry.service || "Other"}
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                        {enquiry.createdAt
                          ? new Date(
                              enquiry.createdAt
                            ).toLocaleString()
                          : "-"}
                      </td>

                      <td className="px-4 py-4">

                        <div className="flex gap-2">

                          <button
                            onClick={() =>
                              setSelectedEnquiry(
                                enquiry
                              )
                            }
                            className="rounded-lg bg-blue-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-600"
                          >
                            View
                          </button>

                          <button
                            onClick={() =>
                              handleDelete(
                                enquiry.id
                              )
                            }
                            className="rounded-lg bg-red-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-600"
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            )}

          </div>
        </div>

      </main>

      {/* DETAILS MODAL */}

      {selectedEnquiry && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">

            <div className="flex items-center justify-between border-b px-6 py-4">

              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Enquiry Details
                </h2>

                <p className="text-xs text-gray-500">
                  Enquiry #{selectedEnquiry.id}
                </p>
              </div>

              <button
                onClick={() =>
                  setSelectedEnquiry(null)
                }
                className="flex h-9 w-9 items-center justify-center rounded-full text-2xl text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
              >
                ×
              </button>

            </div>

            <div className="space-y-5 p-6">

              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
                  Name
                </p>

                <p className="font-semibold text-gray-800">
                  {selectedEnquiry.name || "-"}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
                  Phone
                </p>

                <p className="font-semibold text-gray-800">
                  {selectedEnquiry.phone || "-"}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
                  Email
                </p>

                <p className="break-all font-semibold text-gray-800">
                  {selectedEnquiry.email || "-"}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
                  Service
                </p>

                <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700">
                  {selectedEnquiry.service || "Other"}
                </span>
              </div>

              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
                  Message
                </p>

                <div className="rounded-xl bg-gray-50 p-4 text-sm leading-6 text-gray-700">
                  {selectedEnquiry.message ||
                    "No message provided."}
                </div>
              </div>

              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
                  Submitted At
                </p>

                <p className="text-sm text-gray-700">
                  {selectedEnquiry.createdAt
                    ? new Date(
                        selectedEnquiry.createdAt
                      ).toLocaleString()
                    : "-"}
                </p>
              </div>

            </div>

            <div className="flex justify-end gap-3 border-t px-6 py-4">

              <button
                onClick={() =>
                  setSelectedEnquiry(null)
                }
                className="rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-900"
              >
                Close
              </button>

              <button
                onClick={() =>
                  handleDelete(
                    selectedEnquiry.id
                  )
                }
                className="rounded-lg bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
              >
                Delete
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default AdminDashboard;
