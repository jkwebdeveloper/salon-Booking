import { POST } from "@/app/api/post";
import { Button, Error, Spinner } from "@/components";
import { cn } from "@/lib/utils";
import React from "react";
import { FaStar } from "react-icons/fa";
import { v4 } from "uuid";

const ReviewModal = ({ setReviewModal, details = { service_name: "Spa Life & Massagess", star: 4, ambience_star: 4.5, staff_star: 3, cleanliness_star: 4 } }) => {
  const { service_name, vendors_id } = details;

  const [formState, setFormState] = React.useState({
    loading: false,
    error: '',
    success: '',
  });

  const [ratings, setRatings] = React.useState({
    star: details?.star || 0,
    ambience_star: details?.ambience_star || 0,
    staff_star: details?.staff_star || 0,
    cleanliness_star: details?.cleanliness_star || 0,
    comment: ''
  });

  const handleRatings = (key, value) => {
    setRatings(p => ({ ...p, [key]: value + 1 }))
  }

  const addRatings = async (e) => {
    e.preventDefault();
    const resp = await POST.request({ url: '/add-user-review', form: ratings, rawdata: true, formState, setFormState });
    if (resp && resp?.code == 200) {
      setRatings({ star: 0, ambience_star: 0, staff_star: 0, cleanliness_star: 0, comment: 0 })
      setReviewModal(false);
    }
  }

  return (
    <form className="space-y-4">
      <p className="text-xl font-bold">{service_name}</p>
      <p className="text-lg font-semibold">How would you rate it?</p>
      <div className="flex items-center gap-3">
        {new Array(5).fill(0).map((_, i) => (
          <FaStar key={v4()} className={cn('cursor-pointer', ratings?.star > i ? 'text-[#FFCC00]' : 'text-[#D6D6D6]')} onMouseOver={e => handleRatings('star', i)} onClick={e => handleRatings('star', i)} />
        ))}
      </div>
      <p className="text-lg font-semibold">
        How would you rate these features?
      </p>
      <div>
        <p className="text-sm ">Ambiance</p>
        <div className="flex items-center gap-3">
          {new Array(5).fill(0).map((_, i) => (
            <FaStar key={v4()} className={cn('cursor-pointer', ratings?.ambience_star > i ? 'text-[#FFCC00]' : 'text-[#D6D6D6]')} onMouseOver={e => handleRatings('ambience_star', i)} onClick={e => handleRatings('ambience_star', i)} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm ">Staff</p>
        <div className="flex items-center gap-3">
          {new Array(5).fill(0).map((_, i) => (
            <FaStar key={v4()} className={cn('cursor-pointer', ratings?.staff_star > i ? 'text-[#FFCC00]' : 'text-[#D6D6D6]')} onMouseOver={e => handleRatings('staff_star', i)} onClick={e => handleRatings('staff_star', i)} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm ">Cleanliness</p>
        <div className="flex items-center gap-3">
          {new Array(5).fill(0).map((_, i) => (
            <FaStar key={v4()} className={cn('cursor-pointer', ratings?.cleanliness_star > i ? 'text-[#FFCC00]' : 'text-[#D6D6D6]')} onMouseOver={e => handleRatings('cleanliness_star', i)} onClick={e => handleRatings('cleanliness_star', i)} />
          ))}
        </div>
      </div>

      <textarea
        id="message"
        rows="4"
        className="input_field"
        placeholder="Write your thoughts here..."
        onInput={e => setRatings(p => ({ ...p, comment: e.target.value }))}
      ></textarea>
      <Button variant="primary" type="submit" className="md:w-full" disabled={formState?.loading} onClick={e => addRatings(e)}>
        <Spinner
          show={formState?.loading}
          width="25"
          height="25"
          text="Submit"
        />
      </Button>
      {formState?.error && (
        <Error error={formState?.error} />
      )}
    </form>
  );
};

export default ReviewModal;
