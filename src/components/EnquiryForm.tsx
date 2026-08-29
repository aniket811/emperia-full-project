"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const projects = [
  "Emperia Codename IBHQ Wagle Estate Thane",
  "Emperia IBHQ Wagle Estate Thane West",
  "Emperia World Thane West",
  "Emperia World Wagle Estate",
  "Emperia Garden",
  "Diva Antilia",
  "Evora",
  "Gurukrupa Heights",
  "Gurukrupa One",
  "Vinayak Greens",
  "Emperia Icon",
  "Sun City",
  "Emperia Akshar Rivergate",
  "Happy Homes",
  "Emperia Vandan Heights",
  "Emperia Arham",
  "9 Meraki",
  "Emperia Hillcrest",
  "Emperia The Capital",
];

export default function EnquiryForm() {
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    project: "",
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
      const { error: insertError } = await supabase
        .from("property_enquiries")
        .insert([
          {
            full_name: form.full_name.trim(),
            phone: form.phone.trim(),
            email: form.email.trim() || null,
            project: form.project || null,
            property_type: form.property_type || null,
            budget: form.budget.trim() || null,
            message: form.message.trim() || null,
          },
        ]);

      if (insertError) {
        console.error(insertError);
        throw new Error(insertError.message);
      }

      setSuccess(
        "Thank you for your enquiry. Our sales team will contact you shortly."
      );

      setForm({
        full_name: "",
        phone: "",
        email: "",
        project: "",
        property_type: "",
        budget: "",
        message: "",
      });
    } catch (err: any) {
      console.error(err);

      setError(
        err?.message ||
          "Unable to submit your enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="enquiry"
      className="w-full bg-[#f7f6f2] px-5 py-16 md:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Get In Touch
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
            Make an Enquiry
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Tell us what you are looking for and our property experts
            will contact you shortly.
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-xl md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-800">
                  Full Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-800">
                  Mobile Number <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-800">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                />
              </div>

              {/* Project */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-800">
                  Interested Project
                </label>

                <select
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-black"
                >
                  <option value="">Select Project</option>

                  {projects.map((project) => (
                    <option key={project} value={project}>
                      {project}
                    </option>
                  ))}
                </select>
              </div>

              {/* Property Type */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-800">
                  Property Type
                </label>

                <select
                  name="property_type"
                  value={form.property_type}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-black"
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
                <label className="mb-2 block text-sm font-medium text-gray-800">
                  Budget
                </label>

                <input
                  type="text"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  placeholder="e.g. ₹50 Lakh - ₹1 Crore"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-800">
                Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us what you are looking for..."
                rows={5}
                className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
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
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-black px-6 py-4 text-base font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Enquiry →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}<a
  href="#enquiry"
  className="inline-flex rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
>
  Make an Enquiry →
</a>