import { useEffect } from "react";

const { useRouter } = require("next/navigation");
const { useDispatch } = require("react-redux");

const logout = () => {
    useEffect(() => {
        const router = useRouter();
        const dispatch = useDispatch();
        dispatch({ type: 'LOGOUT' });
        router.push('/');
    }, []);
};

export default logout;