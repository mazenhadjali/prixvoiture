
import { useEffect, useState } from "react";
import axiosInstance from "../axios-instance";
import { AxiosResponse } from "axios";
import User from "../interfaces/userInterface";
import { GET_ALL_USERS } from "../Apis";
import Role from "../interfaces/roleInterface";
import { Link } from "react-router-dom";
import { CREATE_USER } from "../routeConstants";

function UsersPage() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosInstance.get(GET_ALL_USERS).then((response: AxiosResponse) => {
            setUsers(response.data)
        })
    }, [])


    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap justify-between items-center my-3">
                <h1 className="text-2xl font-bold mb-4 text-main flex items-center">List of Users</h1>
                <Link to={CREATE_USER}>Create new User</Link>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-black uppercase bg-gray-100 ">
                    <tr className="">
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">FULL NAME</th>
                        <th scope="col" className="px-6 py-3">ROLES</th>
                        <th scope="col" className="px-6 py-3 hidden md:table-cell">Username</th>
                        <th scope="col" className="px-6 py-3 hidden md:table-cell">Tel</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user: User) =>
                        <tr className="" key={user.id} style={{ cursor: "pointer" }}>
                            <td className="px-6 py-4">#{user.id}</td>
                            <td className="px-6 py-4 font-medium text-main whitespace-nowrap">{user.firstname + " " + user.lastname}</td>
                            <td className="px-6 py-4">{user.roles.map((el: Role, index) => (<span key={index}>* {el.name}</span>))}</td>
                            <td className="px-6 py-4 hidden md:table-cell"> {user.username} </td>
                            <td className="px-6 py-4 hidden md:table-cell"> {user.tel} </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default UsersPage;