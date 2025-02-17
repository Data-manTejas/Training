import React from 'react';


const Form = () => {
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>React Form with Vite</h2>
      <form>
        <div style={{ marginBottom: "15px" }}>
          <label>First Name:</label>
          <input type="text" name="firstName" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Last Name:</label>
          <input type="text" name="lastName" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Age:</label>
          <input type="number" name="age" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Gender:</label>
          <div style={{ marginTop: "5px" }}>
            <label>
              <input type="radio" name="gender" value="male" /> Male
            </label>
            <label style={{ marginLeft: "10px" }}>
              <input type="radio" name="gender" value="female" /> Female
            </label>
          </div>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Skills:</label>
          <select name="skills" style={{ width: "100%", padding: "8px", marginTop: "5px" }}>
            <option value="">Select a skill</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input type="email" name="email" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Address:</label>
          <textarea name="address" style={{ width: "100%", padding: "8px", marginTop: "5px" }} rows="3"></textarea>
        </div>

        <div style={{ textAlign: "center" }}>
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
