import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="mt-5 mb-5">
      <div className="card card-container container-sm py-5 mb-5">
        <div className="title text-danger text-center mt-3">
          <h3 className="fw-bold mt-5">Contact me</h3>
        </div>
        <form
          className="row m-4 g-4 d-flex justify-content-center"
          action="/Components/home"
        >
          <div className="col-md-4">
            <label for="validationDefault01" class="form-label text-light">
              First name
            </label>
            <input
              type="text"
              className="form-control form-input border-danger bg-dark text-light"
              id="validationDefault01"
              placeholder="Justin"
              required
            ></input>
          </div>
          <div className="col-md-4">
            <label for="validationDefault02" className="form-label text-light">
              Last name
            </label>
            <input
              type="text"
              className="form-control form-input border-danger bg-dark text-light"
              id="validationDefault02"
              placeholder="Bieber"
              required
            ></input>
          </div>

          <div class="mb-3 col-8">
            <label for="exampleFormControlInput1" class="form-label text-light">
              Email address
            </label>
            <input
              type="email"
              class="form-control form-input border-danger bg-dark text-light"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            ></input>
          </div>

          <div class="mb-3 col-8">
            <label for="validationTextarea" class="form-label text-light">
              Message
            </label>
            <textarea
              class="form-control form-input border-danger bg-dark text-light"
              id="validationTextarea"
              placeholder="Type a message for me."
              required
            ></textarea>
            <div class="invalid-feedback">Type a message for me.</div>
          </div>

          <div className="col-8">
            <a
              className="btn btn-danger"
              href="mailto:sajidaunnisa78@gmail.com"
              type="submit"
            >
              Message Me
            </a>
          </div>
        </form>

        <div className=" ps-5 m-5">
          <h4 className="text-danger mb-5">Contact me at :</h4>
          <div className="d-flex ms-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-envelope-fill text-danger ms-5 mt-1"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
            <h5 className="text-light ms-3">sajidaunnisa78@gmail.com</h5>
          </div>
          <div className="d-flex ms-5 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-telephone-fill text-danger ms-5 mt-1"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
            <h5 className="text-light ms-3">+91 6300786270</h5>
          </div>
          <div className="d-flex ms-5 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-geo-alt-fill text-danger ms-5 mt-1"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <h5 className="text-light ms-3">Hyderabad</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
