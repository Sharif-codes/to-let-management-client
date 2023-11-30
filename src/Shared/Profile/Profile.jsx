import useAuth from "../../hooks/useAuth";


const Profile = () => {
    const { user } = useAuth()
    return (
        <div className='flex flex-col md:flex-row gap-5 m-10'>
            <div className='space-y-5 avatar w-36'>
                <img className='rounded-full' src={user.photoURL} alt="" />
                {/* <button className='btn btn-primary' disabled>Update rofile</button> */}
            </div>
            <div className='space-y-2'>
                <p>User Name:</p>
                <p className='text-blue-900 text-xl font-semibold'>{user.displayName}</p>
                <p>Email:</p>
                <p className='text-blue-900 text-xl font-semibold'>{user.email}</p>
            </div>
        </div>
    );
};

export default Profile;