import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageMember = () => {
  const axiosSecure = useAxiosSecure();
  const { data: member = [], refetch } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const res = await axiosSecure.get('/members');
      return res.data;
    },
  });

  const handleMemberRemove = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Remove User",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.patch(`/memberRemove/${email}`);
        console.log(res.data);
        refetch();
        Swal.fire({
          title: "Removed!",
          text: "The Member is demoted to user now",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto max-w-screen-lg mx-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {member.map((item, idx) => (
            <tr key={item._id}>
              <th>{idx + 1}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button
                  onClick={() => handleMemberRemove(item.email)}
                  className="btn btn-primary"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMember;
