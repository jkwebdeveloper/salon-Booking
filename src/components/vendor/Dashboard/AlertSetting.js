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
    const resp = await POST.request({ url: '/vendor/alerts-notification-status', form: e.target, token: vendor.api_token, formState, setFormState });
    if (resp && resp.code === 200) {
      dispatch(login(resp.data));
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-2xl font-semibold">Alerts setting</p>
      <form className="w-full p-3 space-y-4 bg-white rounded-xl" onSubmit={e => updateAlertSetting(e)}>
        <p className="text-xl font-semibold">Push notification</p>
        <li class="w-full list-none">
          <div class="flex items-center">
            <input
              id="sms"
              type="checkbox"
              onChange={e => e.target.checked ? e.target.nextElementSibling.value = 1 : e.target.nextElementSibling.value = 0}
              defaultChecked={vendor?.is_sms_notification == 1 ? true : false}
            />
            <input type="hidden" name="is_sms_notification" value={vendor?.is_sms_notification || 0} />
            <label
              htmlFor="sms"
              class="w-full ms-2 text-sm font-medium text-gray-900 "
            >
              Notification via SMS
            </label>
          </div>
        </li>
        <li class="w-full list-none">
          <div class="flex items-center">
            <input
              id="email"
              type="checkbox"
              onChange={e => e.target.checked ? e.target.nextElementSibling.value = 1 : e.target.nextElementSibling.value = 0}
              defaultChecked={vendor?.is_email_notification == 1 ? true : false}
            />
            <input type="hidden" name="is_email_notification" value={vendor?.is_email_notification || 0} />
            <label
              htmlFor="email"
              class="w-full ms-2 text-sm font-medium text-gray-900 "
            >
              Notification via Email
            </label>
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
