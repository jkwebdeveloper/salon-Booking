'use client';
import dynamic from "next/dynamic";

//Global components
const PageLoader = dynamic(() => import("@/components/ui/pageloader"));
const loader = <PageLoader show={true} width='35' height='35' text="Request" />;
const Spinner = dynamic(() => import("@/components/ui/spinner"));
const Button = dynamic(() => import("@/components/ui/button"));
const Label = dynamic(() => import("@/components/ui/form/label"));
import Banner from "@/components/global/banner";
const Error = dynamic(() => import("@/components/ui/form/error"));
const SuccessPopup = dynamic(() => import("@/components/global/successpopup"));
const Calendar = dynamic(() => import("@/components/ui/calendar"));
const CardMultiServices = dynamic(() => import("@/components/global/card_multiservices"));

//Home components
const Herosection = dynamic(() => import("@/components/user/Home/HeroSection"), { loading: () => loader });
const Pampertree = dynamic(() => import("@/components/user/Home/Pampertree"), { loading: () => loader });
const Featured = dynamic(() => import("@/components/user/Home/Featured"), { loading: () => loader });
const Treatments = dynamic(() => import("@/components/user/Home/Treatments"), { loading: () => loader });
const Gifts = dynamic(() => import("@/components/user/Home/Gifts"), { loading: () => loader });
const Location = dynamic(() => import("@/components/user/Home/Location"), { loading: () => loader });
const Groupon = dynamic(() => import("@/components/user/Home/Groupon"), { loading: () => loader });
const PamperTeam = dynamic(() => import("@/components/user/Home/PamperTeam"), { loading: () => loader });
const Offers = dynamic(() => import("@/components/user/Home/Offers"), { loading: () => loader });
const PopularSalon = dynamic(() => import("@/components/user/Home/PopularSalon"), { loading: () => loader });
const DownloadApp = dynamic(() => import("@/components/user/Home/DownloadApp"), { loading: () => loader });
const Testimonials = dynamic(() => import("@/components/user/Home/Testimonials"), { loading: () => loader });
const Business = dynamic(() => import("@/components/user/Home/Business"), { loading: () => loader });
const FindNearByForm = dynamic(() => import("@/components/user/Home/FindNearByForm"), { loading: () => loader });
const SearchInput = dynamic(() => import("@/components/user/Home/FindNearByForm/searchinput"), { loading: () => loader });

//My Account components
const MainDetail = dynamic(() => import("@/components/user/MyAccount/MainDetail"), { loading: () => loader });
const MainMenu = dynamic(() => import("@/components/user/MyAccount/MainMenu"), { loading: () => loader });
const Profile = dynamic(() => import("@/components/user/MyAccount/profile"), { loading: () => loader });
const MyBooking = dynamic(() => import("@/components/user/MyAccount/MyBooking"), { loading: () => loader });
const Card = dynamic(() => import("@/components/user/MyAccount/card"), { loading: () => loader });
const Wallet = dynamic(() => import("@/components/user/MyAccount/Wallet"), { loading: () => loader });
const ReferFriend = dynamic(() => import("@/components/user/MyAccount/ReferFriend"), { loading: () => loader });
const ChangePassword = dynamic(() => import("@/components/user/MyAccount/ChangePassword"), { loading: () => loader });

export { PageLoader, Spinner, Button, Label, Banner, Error, SuccessPopup, Calendar, CardMultiServices };

export { Herosection, Pampertree, Featured, Treatments, Gifts, Location, Groupon, PamperTeam, Offers, PopularSalon, DownloadApp, Testimonials, Business, FindNearByForm, MainDetail, MainMenu, Card, Wallet, Profile, MyBooking, ReferFriend, ChangePassword, SearchInput };