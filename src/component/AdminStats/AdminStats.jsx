import useApartment from "../../hooks/useApartment";


const AdminStats = () => {
    const data = useApartment()
    const totalRoom = data?.total
    const availableRooms = data?.available
    const bookedRooms= data?.booked

    const availableRoomsPercentage= parseFloat(((totalRoom - bookedRooms)/totalRoom)*100)
    const bookedRoomPercentage= parseFloat(((totalRoom - availableRooms)/totalRoom)*100)
    const totalUser= data?.user
    const totalMember= data?.member
    return (
        <div className="stats shadow">

            <div className="stat">
                <div className="stat-figure text-primary mt-2">
                    
                </div>
                <div className="stat-title mb-2">Total Rooms</div>
                <div className="stat-value text-primary">{totalRoom}</div>
                <div className="stat-desc"></div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    
                </div>
                <div className="stat-title">Available Rooms</div>
                <div className="stat-value text-secondary">{availableRoomsPercentage}%</div>
                <div className="stat-desc"></div>
            </div>
            <div className="stat">
                <div className="stat-figure text-secondary">
                    
                </div>
                <div className="stat-title">Booked Rooms</div>
                <div className="stat-value text-secondary">{bookedRoomPercentage}%</div>
                <div className="stat-desc"></div>
            </div>
            <div className="stat">
                <div className="stat-figure text-secondary">
                    
                </div>
                <div className="stat-title">Users</div>
                <div className="stat-value text-accent">{totalUser}</div>
                <div className="stat-desc"></div>
            </div>
            <div className="stat">
                <div className="stat-figure text-secondary">
                    
                </div>
                <div className="stat-title">Members</div>
                <div className="stat-value text-accent">{totalMember}</div>
                <div className="stat-desc"></div>
            </div>


        </div>
    );
};

export default AdminStats;