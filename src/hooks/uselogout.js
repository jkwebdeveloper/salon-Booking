import { POST } from '@/app/api/post';
import { logout } from '@/redux/features/userAuthSlice';
import { logout as logoutVendor } from '@/redux/features/vendorAuthSlice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

function uselogout() {
    const router = useRouter();
    const dispatch = useDispatch();

    const logoutUser = async ({ api_token = '', type = 'user', redirect_to }) => {
        let redirectURL = redirect_to;
        !redirectURL && type == 'vendor' && (redirectURL = '/vendor/login');
        !redirectURL && type == 'user' && (redirectURL = '/sign-in');
        if (api_token) {
            const resp = await POST.request({ url: type == 'vendor' && "/vendor/logout" || "/logout", token: api_token });
            dispatch(logout());
            dispatch(logoutVendor());
            router.push(redirectURL);
        }
    }
    return [logoutUser]
}

export default uselogout