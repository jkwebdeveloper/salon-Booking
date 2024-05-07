import axios from "axios";

let serverURL = process.env.NEXT_PUBLIC_APIURL;

export const GET = {
  request: async ({ url, token = "", method }) => {
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
    try {
      const { data } = await axios.get(serverURL + url, { headers: requestHeader });
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
