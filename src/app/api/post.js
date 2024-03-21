import axios from "axios";
let serverURL = process.env.NEXT_PUBLIC_APIURL;

export const POST = {
  request: async ({ token, form, url, header }) => {
    let formData;
    if (form && form.tagName == "FORM") {
      formData = new FormData(form);
    } else {
      formData = new FormData();
      for (var key in form) {
        formData.append(key, form[key]);
      }
    }

    let requestHeader = {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
    };

    if (token) {
      requestHeader = {
        ...requestHeader,
        Authorization: `Bearer ${token}`,
      };
    }
    if (header) {
      requestHeader = {
        ...requestHeader,
        ...header,
      };
    }

    try {
      const data = await axios.post(serverURL + url, formData, {
        headers: requestHeader,
      });
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
