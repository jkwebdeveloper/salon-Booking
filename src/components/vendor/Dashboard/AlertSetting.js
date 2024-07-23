import { POST } from "@/app/api/post";
import { Error, Spinner, Success } from "@/components";
import Button from "@/components/ui/button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/features/vendorAuthSlice";

const Alertsetting = () => {
  const dispatch = useDispatch();
  const vendor = useSelector((state) => state.vendorAuth.vendor);
  const [formState, setFormState] = React.useState({
    loading: false,
    error: "",
    success: "",
  });

  const updateAlertSetting = async (e) => {
    e.preventDefault();
    const resp = await POST.request({
      url: "/vendor/alerts-notification-status",
      form: e.target,
      token: vendor.api_token,
      formState,
      setFormState,
    });
    if (resp && resp.code === 200) {
      dispatch(login(resp.data));
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-2xl font-semibold">Alerts setting</p>
      <form
        className="w-full p-3 space-y-4 bg-white rounded-xl"
        onSubmit={(e) => updateAlertSetting(e)}
      >
        <p className="text-xl font-semibold">Push notification</p>
        <li class="w-full list-none">
          <div class="flex items-center gap-3">
            <input
              id="sms"
              type="checkbox"
              className="hidden peer"
              onChange={(e) =>
                e.target.checked
                  ? (e.target.nextElementSibling.value = 1)
                  : (e.target.nextElementSibling.value = 0)
              }
              defaultChecked={vendor?.is_sms_notification == 1 ? true : false}
            />
            <input
              type="hidden"
              name="is_sms_notification"
              value={vendor?.is_sms_notification || 0}
            />
            <label
              htmlFor="sms"
              className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-primary_color border border-gray-400 rounded overflow-hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full fill-white"
                viewBox="0 0 520 520"
              >
                <path
                  d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                  data-name="7-Check"
                  data-original="#000000"
                />
              </svg>
            </label>
            Notification via SMS
          </div>
        </li>
        <li class="w-full list-none">
          <div class="flex items-center gap-3">
            <input
              id="email"
              type="checkbox"
              className="hidden peer"
              onChange={(e) =>
                e.target.checked
                  ? (e.target.nextElementSibling.value = 1)
                  : (e.target.nextElementSibling.value = 0)
              }
              defaultChecked={vendor?.is_email_notification == 1 ? true : false}
            />
            <input
              type="hidden"
              name="is_email_notification"
              value={vendor?.is_email_notification || 0}
            />
            <label
              htmlFor="email"
              className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-primary_color border border-gray-400 rounded overflow-hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full fill-white"
                viewBox="0 0 520 520"
              >
                <path
                  d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                  data-name="7-Check"
                  data-original="#000000"
                />
              </svg>
            </label>
            Notification via Email
          </div>
        </li>
        <Button type="submit" variant="primary" disabled={formState?.loading}>
          <Spinner
            show={formState?.loading}
            width="25"
            height="25"
            text="Save"
          />
        </Button>
        {formState?.error && <Error error={formState?.error} />}
        {formState?.success && <Success message={formState?.success} />}
      </form>
    </div>
  );
};

export default Alertsetting;
