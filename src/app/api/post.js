import validateInput from "@/lib/validateinput";
import axios from "axios";
let serverURL = process.env.NEXT_PUBLIC_APIURL;

export const POST = {
  request: async ({ token, form, url, header }) => {
    console.log("POST request");
    let formData;
    if (form && form.tagName == "FORM") {
      const validForm = await validateInput(form);
      if (validForm.length > 0) {
        validForm.forEach((input) => {
          input.classList.add("border-red-500", "text-red-500");
          input.addEventListener("input", () => {
            input.classList.remove("border-red-500", "text-red-500");
          });
        });
        return false;
      }
      formData = new FormData(form);
      for (const key of formData.keys()) formData.get(key).size == 0 && formData.delete(key);
    } else {
      formData = new FormData();
      for (var key in form) formData.append(key, form[key]);
    }

    let requestHeader = {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
    };

    if (token) {
      requestHeader = {
        ...requestHeader,
        'access-token': `${token}`,
      };
    }
    if (header) {
      requestHeader = {
        ...requestHeader,
        ...header,
      };
    }
    // return false;
    try {
      const { data } = await axios.post(serverURL + url, formData, {
        headers: requestHeader,
      });
      return data;
    } catch (error) {
      const { data } = error.response;
      // console.log(error);
      return data;
    }
  },
};
