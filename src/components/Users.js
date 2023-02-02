import './css/users.css'
function Users() {
    const data = [
        { name: "Anom", age: 19, gender: "Male" },
        { name: "Megha", age: 19, gender: "Female" },
        { name: "Subham", age: 25, gender: "Male" },
        { name: "Subham", age: 25, gender: "Male" },
        { name: "Subham", age: 25, gender: "Male" },
        { name: "Subham", age: 25, gender: "Male" },
        { name: "Subham", age: 25, gender: "Male" },
        { name: "Subham", age: 25, gender: "Male" },
        { name: "Subham", age: 25, gender: "Male" },
        { name: "Subham", age: 25, gender: "Male" },
    ]
    return (
        <div className="user-main">
            <div className="main-title">
                <h1 className="title">Users</h1>
            </div>
            <div className="user-cnt">
                <div className="user-tbl">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                        {data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.name}</td>
                                    <td>{val.age}</td>
                                    <td>{val.gender}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
}
export default Users