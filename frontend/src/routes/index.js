import HomePage from "../pages/HomePage/HomePage"
import ProductPage from "../pages/ProductPage/ProductPage"
import CartPage from "../pages/CartPage/CartPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx"
import SupportPage from "../pages/SupportPage/SupportPage.jsx"
import LoginPage from "../pages/LoginPage/LoginPage.jsx"
import SignUpPage from "../pages/SignUpPage/SignUpPage.jsx"
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage.jsx"
import PaymentPage from "../pages/PayMentPage/PayMentPage.jsx"
import AdminProductPage from "../pages/AdminProductPage/AdminProductPage.jsx"
import AdminBrandPage from "../pages/AdminBrandPage/AdminBrandPage.jsx"
import AdminUserPage from "../pages/AdminUserPage/AdminUserPage.jsx"
import AdminOrderPage from "../pages/AdminOrderPage/AdminOrderPage.jsx"

export const routes=[
    {
        path:'/login',
        page:LoginPage,
        isShowHeader:false,
        isAdminPage: false
    },
    {
        path:'/signup',
        page:SignUpPage,
        isShowHeader:false,
        isAdminPage: false
    },
    {
        path:'/',
        page:HomePage,
        isShowHeader:true,
        isAdminPage: false
    },
    {
        path:'/home',
        page:HomePage,
        isShowHeader:true,
        isAdminPage: false
    },
    {
        path:'/product',
        page:ProductPage,
        isShowHeader:true,
        isAdminPage: false
    },
    {
        path:'/product-detail',
        page:ProductDetailPage,
        isShowHeader:true,
        isAdminPage: false
    },
    {
        path:'/cart',
        page:CartPage,
        isShowHeader:true,
        isAdminPage: false
    },
    {
        path:'/support',
        page:SupportPage,
        isShowHeader:true,
        isAdminPage: false
    },
    {
        path:'/support/:id',
        page:SupportPage,
        isShowHeader:true,
        isAdminPage: false
    },
    {
        path:'/payment',
        page: PaymentPage,
        isShowHeader:true,
        isAdminPage: false
    },
    {
        path:'/admin/product',
        page: AdminProductPage,
        isShowHeader:true,
        isAdminPage: true
    },
    {
        path:'/admin/brand',
        page: AdminBrandPage,
        isShowHeader:true,
        isAdminPage: true
    },
    {
        path:'/admin/user',
        page: AdminUserPage,
        isShowHeader:true,
        isAdminPage: true
    },
    {
        path:'/admin/order',
        page: AdminOrderPage,
        isShowHeader:true,
        isAdminPage: true
    },
    {
        path:'*',
        page:NotFoundPage
    },
    
]