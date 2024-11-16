import { useNavigate } from "react-router-dom";

const Lab4Page = () => {
  const navigate = useNavigate(); 

  const handleRedirect = () => {
    navigate("/lab4/add"); 
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f8f9fa" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: "20px", color: "#343a40" }}>Laboratorium 4</h1>
        <button 
          onClick={handleRedirect} 
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Dodaj
        </button>
      </div>
    </div>
  );
};

export default Lab4Page;
