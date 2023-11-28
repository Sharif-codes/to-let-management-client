import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Appartment from "../Pages/Appartment/Appartment";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/Dashboard/UserProfile/UserProfile";
import Anouncement from "../Pages/Dashboard/Anouncement/Anouncement";
import Adminprofile from "../Pages/Dashboard/AdminProfile/Adminprofile";
import AdminRoute from "./AdminRoute";
import MemberProfile from "../Pages/Dashboard/MemberProfile/MemberProfile";
import MemberRoute from "./MemberRoute";
import ManageMember from "../Pages/Dashboard/ManageMember/ManageMember";
import AgreementRequest from "../Pages/Dashboard/AgreementRequest/AgreementRequest";
import MemberPayment from "../Pages/Dashboard/MemberPayment/MemberPayment";
import PaymentGateway from "../Pages/PaymentGateway/PaymentGateway";
import CouponManagement from "../Pages/Dashboard/CouponManagement/CouponManagement";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

export const router= createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/apartment",
                element: <Appartment></Appartment>
            }
        ]
    },
    {
        path: "/signUp",
        element: <SignUp></SignUp>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "userProfile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "anouncement",
                element:<Anouncement></Anouncement>
            },
            // admin routes
            {
                path:"adminProfile",
                element: <AdminRoute><Adminprofile></Adminprofile></AdminRoute>

            },
            {
                path: "manageMember",
                element: <AdminRoute><ManageMember></ManageMember></AdminRoute>
            },
            {
                path: "agreementRequest",
                element: <AdminRoute><AgreementRequest></AgreementRequest></AdminRoute>

            },
            {
                path:"manageCoupon",
                element: <AdminRoute><CouponManagement></CouponManagement></AdminRoute>
            },
            //member route
            {
                path: "memberProfile",
                element: <MemberRoute><MemberProfile></MemberProfile></MemberRoute>
            },
            {
                path: "memberPayment",
                element: <MemberRoute><MemberPayment></MemberPayment></MemberRoute>
            },
            {
                path: "payment",
                element: <MemberRoute><PaymentGateway></PaymentGateway></MemberRoute>
            },
            {
                path: "paymentHistory",
                element: <MemberRoute><PaymentHistory></PaymentHistory></MemberRoute>
            }
        ]
    }
])