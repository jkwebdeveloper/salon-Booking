import { useEffect } from "react";

const { useRouter } = require("next/navigation");
const { useDispatch } = require("react-redux");

const Logout = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'LOGOUT' });
        router.push('/');
    }, [dispatch]);
};

export default Logout;