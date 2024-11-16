import { useState, useContext } from "react";
import AppContext from "../data/AppContext";

const CreateForm = () => {
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const { dispatch } = useContext(AppContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    if (data.get("taskName").charAt(0) !== data.get("taskName").charAt(0).toUpperCase()) {
      setError("Nazwa zadania musi zaczynać się od dużej litery!");
      return;
    }

    setError("");
    setIsSending(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    dispatch({
      type: "add",
      data: {
        taskName: data.get("taskName"),
        id: Date.now(),
      },
    });

    setIsSending(false);
    e.target.reset();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white text-center">
              <h3>Dodaj nowe zadanie</h3>
            </div>
            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="taskName" className="form-label">
                    Nazwa zadania
                  </label>
                  <input
                    type="text"
                    id="taskName"
                    name="taskName"
                    className="form-control"
                    placeholder="Wpisz nazwę zadania"
                    required
                    minLength="3"
                    maxLength="30"
                  />
                </div>

                {error && <div className="alert alert-danger">{error}</div>}

                <div className="d-flex justify-content-between">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSending}
                  >
                    {isSending ? "Zapisywanie..." : "Zapisz"}
                  </button>
                  <button type="reset" className="btn btn-secondary">
                    Wyczyść
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
