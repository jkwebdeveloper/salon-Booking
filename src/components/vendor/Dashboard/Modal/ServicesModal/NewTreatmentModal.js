import React, { useEffect } from "react";
import { GET } from "@/app/api/get";
import { POST } from "@/app/api/post";
import { Error, Spinner } from "@/components";
import Button from "@/components/ui/button";
import Label from "@/components/ui/form/label";
import useCategory from "@/hooks/usecategory";
import { useSelector } from "react-redux";
import uselogout from "@/hooks/uselogout";

const NewTreatmentModal = ({ setAddtreatment, vendorServices }) => {
  const existingCats = vendorServices.data.map(service => service?.categories_id);
  const [logoutUser] = uselogout();
  const [formState, setFormState] = React.useState({ loading: false, error: "", success: "" });
  const mainCat = useCategory();
  const vendor = useSelector((state) => state.vendorAuth.vendor);

  const addServiceGroup = async (e) => {
    e.preventDefault();
    const resp = await POST.request({ url: '/vendor/add-service-group', form: e.target, token: vendor?.api_token, formState, setFormState });
    if (resp && resp?.code == 200) {
      setAddtreatment(false);
    } else if (resp && resp?.code == 401) {
      logoutUser({ api_token: vendor?.api_token, type: 'vendor' });
    }

  };

  return (
    mainCat.loading
    && <div className="w-full center min-h-[100px]">
      <Spinner show={mainCat?.loading} width={50} height={50} />
    </div>
    || <form className="space-y-3" onSubmit={e => addServiceGroup(e)}>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="first_name" text="Select Treatment" />
        <select className="w-full p-2 text-black bg-transparent border" name="categories_id">
          {mainCat.data.map((cat) => (
            <option key={'maincat' + cat.id} value={cat.id} disabled={existingCats.includes(cat.id)}>
              {cat.title}
            </option>
          ))}
        </select>
      </div>
      <Button type="submit" variant="primary" disabled={formState?.loading}>
        <Spinner
          show={formState?.loading}
          width="25"
          height="25"
          text="Save"
        />
      </Button>
      {formState.error && <Error error={formState.error} />}
    </form>
  );
};

export default NewTreatmentModal;
