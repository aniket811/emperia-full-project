"use client";

import { FormEvent, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdeoobel";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    location: "",
    property_type: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (!form.full_name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!form.phone.trim()) {
      setError("Please enter your mobile number.");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.phone.trim())) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: form.full_name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          location: form.location.trim(),
          property_type: form.property_type,
          budget: form.budget.trim(),
          message: form.message.trim(),
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(
          result?.errors?.[0]?.message ||
            "Unable to submit your enquiry. Please try again."
        );
      }

      setSuccess(
        "Thank you for your enquiry. Our sales team will contact you shortly."
      );

      setForm({
        full_name: "",
        phone: "",
        email: "",
        location: "",
        property_type: "",
        budget: "",
        message: "",
      });
    } catch (err: unknown) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit your enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="enquiry"
      className="w-full bg-light px-5 pt-0 md:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-black font-bold uppercase tracking-[0.25em] text-[#b89058]">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Make an Enquiry
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-12 bg-[#b89058]" />

          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500 md:text-base">
            Tell us what you are looking for and our property experts
            will contact you shortly.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)] md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Full Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/40 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition duration-200 focus:border-[#b89058] focus:bg-white focus:ring-2 focus:ring-[#b89058]/20"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Mobile Number <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/40 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition duration-200 focus:border-[#b89058] focus:bg-white focus:ring-2 focus:ring-[#b89058]/20"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/40 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition duration-200 focus:border-[#b89058] focus:bg-white focus:ring-2 focus:ring-[#b89058]/20"
                />
              </div>

              {/* Location */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Preferred Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="e.g. Panvel, Thane, Navi Mumbai"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/40 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition duration-200 focus:border-[#b89058] focus:bg-white focus:ring-2 focus:ring-[#b89058]/20"
                />
              </div>

              {/* Property Type */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Property Type
                </label>

                <select
                  name="property_type"
                  value={form.property_type}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/40 px-4 py-3 text-sm text-slate-700 outline-none transition duration-200 focus:border-[#b89058] focus:bg-white focus:ring-2 focus:ring-[#b89058]/20"
                >
                  <option value="">Select Property Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Commercial & Residential">
                    Commercial & Residential
                  </option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Budget
                </label>

                <input
                  type="text"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  placeholder="e.g. ₹50 Lakh - ₹1 Crore"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/40 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition duration-200 focus:border-[#b89058] focus:bg-white focus:ring-2 focus:ring-[#b89058]/20"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us what you are looking for..."
                rows={4}
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/40 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition duration-200 focus:border-[#b89058] focus:bg-white focus:ring-2 focus:ring-[#b89058]/20"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                {success}
              </div>
            )}

            {/* Submit */}
            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto min-w-[220px] rounded-full bg-[#b89058] px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-md transition duration-300 hover:bg-[#a37c45] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Enquiry →"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}