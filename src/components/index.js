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

//Home components
import Herosection from "@/components/Home/HeroSection";
const Pampertree = dynamic(() => import("@/components/Home/Pampertree"), { loading: () => loader });
const Featured = dynamic(() => import("@/components/Home/Featured"), { loading: () => loader });
const Treatments = dynamic(() => import("@/components/Home/Treatments"), { loading: () => loader });
const Gifts = dynamic(() => import("@/components/Home/Gifts"), { loading: () => loader });
const Location = dynamic(() => import("@/components/Home/Location"), { loading: () => loader });
const Groupon = dynamic(() => import("@/components/Home/Groupon"), { loading: () => loader });
const PamperTeam = dynamic(() => import("@/components/Home/PamperTeam"), { loading: () => loader });
const Offers = dynamic(() => import("@/components/Home/Offers"), { loading: () => loader });
const PopularSalon = dynamic(() => import("@/components/Home/PopularSalon"), { loading: () => loader });
const DownloadApp = dynamic(() => import("@/components/Home/DownloadApp"), { loading: () => loader });
const Testimonials = dynamic(() => import("@/components/Home/Testimonials"), { loading: () => loader });
const Business = dynamic(() => import("@/components/Home/Business"), { loading: () => loader });
const FindNearByForm = dynamic(() => import("@/components/Home/FindNearByForm"), { loading: () => loader });
import SearchInput from "@/components/Home/FindNearByForm/searchinput";

//My Account components
const MainDetail = dynamic(() => import("@/components/MyAccount/MainDetail"), { loading: () => loader });
const MainMenu = dynamic(() => import("@/components/MyAccount/MainMenu"), { loading: () => loader });
const Profile = dynamic(() => import("@/components/MyAccount/profile"), { loading: () => loader });
const MyBooking = dynamic(() => import("@/components/MyAccount/MyBooking"), { loading: () => loader });
const Card = dynamic(() => import("@/components/MyAccount/card"), { loading: () => loader });
const Wallet = dynamic(() => import("@/components/MyAccount/Wallet"), { loading: () => loader });
const ReferFriend = dynamic(() => import("@/components/MyAccount/ReferFriend"), { loading: () => loader });
const ChangePassword = dynamic(() => import("@/components/MyAccount/ChangePassword"), { loading: () => loader });

export { PageLoader, Spinner, Button, Label, Banner, Error, SuccessPopup, Calendar };

export { Herosection, Pampertree, Featured, Treatments, Gifts, Location, Groupon, PamperTeam, Offers, PopularSalon, DownloadApp, Testimonials, Business, FindNearByForm, MainDetail, MainMenu, Card, Wallet, Profile, MyBooking, ReferFriend, ChangePassword, SearchInput };