"use client";
import { useState } from "react";

export default function AddJobPage() {

  const [form, setForm] = useState({
    title: "",
    job_type: "govt",
    department: "",
    category: "",
    education: "",
    total_posts: "",
    location: "",
    last_date: "",
    age_limit: "",
    short_desc: "",
    full_desc: "",
    notification_pdf: "",
    apply_link: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:8000/add-job/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        education: form.education.split(","),
      }),
    });

    const data = await res.json();
    alert(data.message || "Job Added");
  };

  return (
    <main className="max-w-3xl mx-auto p-6 md:p-10">

      <h1 className="text-3xl font-bold mb-6">
        Add New Vacancy
      </h1>

      <form onSubmit={handleSubmit} className="grid gap-3">

        <input name="title" placeholder="Job Title" onChange={handleChange} className="border p-3 rounded"/>

        <select name="job_type" onChange={handleChange} className="border p-3 rounded">
          <option value="govt">Government</option>
          <option value="private">Private</option>
          <option value="upcoming">Upcoming</option>
          <option value="result">Result</option>
          <option value="admit">Admit Card</option>
          <option value="answer">Answer Key</option>
        </select>

        <input name="department" placeholder="Department" onChange={handleChange} className="border p-3 rounded"/>
        <input name="category" placeholder="Category" onChange={handleChange} className="border p-3 rounded"/>
        <input name="education" placeholder="Education (comma separated)" onChange={handleChange} className="border p-3 rounded"/>

        <input name="location" placeholder="Location" onChange={handleChange} className="border p-3 rounded"/>
        <input name="age_limit" placeholder="Age Limit" onChange={handleChange} className="border p-3 rounded"/>
        <input name="total_posts" placeholder="Total Posts" onChange={handleChange} className="border p-3 rounded"/>

        <input type="date" name="last_date" onChange={handleChange} className="border p-3 rounded"/>

        <textarea name="short_desc" placeholder="Short Description" onChange={handleChange} className="border p-3 rounded"/>
        <textarea name="full_desc" placeholder="Full Description" onChange={handleChange} className="border p-3 rounded"/>

        <input name="notification_pdf" placeholder="Notification PDF URL" onChange={handleChange} className="border p-3 rounded"/>
        <input name="apply_link" placeholder="Apply Link" onChange={handleChange} className="border p-3 rounded"/>

        <button className="bg-black text-white py-3 rounded mt-3">
          Publish Job
        </button>

      </form>

    </main>
  );
}
