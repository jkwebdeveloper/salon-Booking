'use client';
import validateInput from "@/lib/validateinput";
import axios from "axios";
let serverURL = process.env.NEXT_PUBLIC_APIURL;

export const POST = {
  validateForm: async ({ form }) => {
    const validForm = await validateInput(form);
    if (validForm.length > 0) {
      validForm.forEach((input) => {
        input.classList.add("border-red-500", "text-red-500", 'invalid');
        input.addEventListener("input", () => {
          input.classList.remove("border-red-500", "text-red-500", 'invalid');
        });
        input.addEventListener("change", () => {
          input.classList.remove("border-red-500", "text-red-500", 'invalid');
        });
      });
      return false;
    }
    return true;
  },
  request: async ({ token, form, url, header, formState = null, rawdata = false, setFormState }) => {
    let formData;
    if (form && form.tagName == "FORM") {
      const valideData = await POST.validateForm({ form });
      if (!valideData) return false;

      formData = new FormData(form);
      for (const key of formData.keys()) formData.get(key).size == 0 && formData.delete(key);
    } else if (!Array.isArray(form) && !rawdata) {
      formData = new FormData();
      for (var key in form) formData.append(key, form[key]);
    } else {
      formData = form;
    }

    let requestHeader = { "Cache-Control": "no-cache", Pragma: "no-cache", Expires: "0" };

    if (token) requestHeader = { ...requestHeader, 'access-token': `${token}` };

    if (header) requestHeader = { ...requestHeader, ...header };

    // return false;
    formState && setFormState({ ...formState, loading: true });
    try {
      const { data } = await axios.post(serverURL + url, formData, {
        headers: requestHeader,
      });
      formState && (
        (data?.code == 200)
          ? setFormState({ ...formState, loading: false, success: data?.message })
          : setFormState({ ...formState, loading: false, error: data?.message })
      );
      return data;
    } catch (error) {
      const { data } = error.response;
      formState && ((data?.code) && setFormState({ ...formState, loading: false, error: data?.message, ffew: 'wefwe' }));
      return data;
    }
  },
};
