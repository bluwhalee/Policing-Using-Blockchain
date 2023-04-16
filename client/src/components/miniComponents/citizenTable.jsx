import "../../styles/Dashboards/firTable.css"

const CitizenTable = ({ citizenList }) => {
    return (
      <div>
        <h2>Citizen Table</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>CNIC</th>
              <th>Address</th>
              <th>Details</th>
              <th>See Cases</th>
            </tr>
          </thead>
          <tbody>
            {citizenList.map((citizen) => (
              <tr key={citizen.cnic}>
                <td>{citizen.name}</td>
                <td>{citizen.cnic}</td>
                <td>{citizen.address}</td>
                <td>{citizen.details}</td>
                <td>{citizen.seeCases}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default CitizenTable;
  