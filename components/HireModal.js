"use client";

import { useState } from "react";

const technologies = [
  "Vue js",
  "React js",
  "Node js",
  "React Native",
  "Angular js",
  "Python",
];

const durations = [
  { id: "gridRadios1", label: "0 - 3", value: "0 - 3" },
  { id: "gridRadios2", label: "3 - 6", value: "3 - 6" },
  { id: "gridRadios3", label: "6 - 12", value: "6 - 12" },
  { id: "gridRadios4", label: "12 +", value: "12 +" },
];

export default function HireModal() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/hire-developer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: data.get("fullname"),
          email: data.get("email"),
          number: data.get("number"),
          technology: data.get("technology"),
          duration: data.get("duration"),
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        setStatus(result.message || "An error occurred, please try again !");
        return;
      }

      setStatus("Message sent successfully!");
      form.reset();
    } catch {
      setStatus("An error occurred, please try again !");
    } finally {
      setSending(false);
    }
  }

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Hire Developer
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <p>Do you want to hire dedicated sources on a contract basis ?</p>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="full-name" className="col-form-label">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="full-name"
                      name="fullname"
                      placeholder="Enter Full Name"
                      required
                    />
                  </div>
                  &nbsp;
                  <div className="form-group">
                    <label htmlFor="phone-number" className="col-form-label">
                      Phone Number*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone-number"
                      name="number"
                      placeholder="Ex.+9156234785"
                      required
                    />
                  </div>
                  &nbsp;
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="email" className="col-form-label">
                      Email*
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your Email"
                      required
                    />
                  </div>
                  &nbsp;
                  <div className="form-group">
                    <label htmlFor="technology" className="col-form-label">
                      Technology*
                    </label>
                    <br />
                    <select
                      id="technology"
                      name="technology"
                      className="form-control"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select Technology
                      </option>
                      {technologies.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <label htmlFor="duration" className="col-form-label">
                  Duration(In Months)*
                </label>
              </div>
              <br />
              <div className="row">
                <div className="col-6">
                  {durations.slice(0, 2).map((item) => (
                    <div className="form-check" key={item.id}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="duration"
                        id={item.id}
                        value={item.value}
                        required
                      />
                      <label className="form-check-label" htmlFor={item.id}>
                        {item.label}
                      </label>
                      &nbsp;
                    </div>
                  ))}
                </div>
                <div className="col-6">
                  {durations.slice(2).map((item) => (
                    <div className="form-check" key={item.id}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="duration"
                        id={item.id}
                        value={item.value}
                        required
                      />
                      <label className="form-check-label" htmlFor={item.id}>
                        {item.label}
                      </label>
                      &nbsp;
                    </div>
                  ))}
                </div>
              </div>
              {status ? (
                <p
                  className="mt-3"
                  style={{
                    color: status.includes("successfully") ? "#28a745" : "#dc3545",
                  }}
                >
                  {status}
                </p>
              ) : null}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
