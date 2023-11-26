import Profile from "../../../Shared/Profile/Profile";


const MemberProfile = () => {
   
    return (
        <div >
            <p className='text-3xl'>My Profile</p>
            <Profile></Profile>

            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Apartment no.</th>
                            <th>block</th>
                            <th>floor</th>
                            <th>room no</th>
                            <th>Rent price</th>
                            <th>Agreement Accept date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MemberProfile;