import React, { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import EditCardModal from "@/components/MyAccount/card/EditCardModal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { POST } from "@/app/api/post";
import { PageLoader } from "@/components";

const Card = () => {
  const [addCard, setAddCard] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  // [ { id: 1, name: "John Adam", cardNumber: "**** **** **** *0357", expire: "12/2029", location: "Barnack, Cambridge 181.2 miles" }
  const [error, setError] = useState("");

  const getCards = async () => {
    setLoading(true);
    const userLocal = localStorage.getItem("user");
    const user = userLocal && JSON.parse(userLocal);
    const resp = await POST.request({ url: "/user-list-card", token: user?.api_token });
    setLoading(false);
    if (resp && resp.status != 'Error' && resp.code == 200) {
      setCards(resp.data);
      return;
    }
    setError(resp.message);
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="p-3 space-y-4 bg-white rounded-md xl:p-5">
      <p className="text-xl text-[#25324B] font-semibold">Profile</p>
      <div className="flex items-center justify-between">
        <p>Your saved credit and debit cards</p>
        <Dialog open={addCard}>
          <DialogTrigger onClick={e => setAddCard(true)} className="flex items-center h-8 px-6 py-3 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90">
            Add New Card
          </DialogTrigger>
          <DialogContent className="max-h-[90vh]" onInteractOutside={e => setAddCard(false)} close={setAddCard}>
            <DialogTitle>Add new card</DialogTitle>
            <EditCardModal setAddCard={setAddCard} />
          </DialogContent>
        </Dialog>
      </div>
      {loading && <PageLoader width={50} height={50} /> ||
        <div className="grid items-center justify-center grid-cols-1 gap-5 py-5 lg:grid-cols-2">
          <div className="px-3 py-5 space-y-3 bg-white rounded-lg shadow-md ring-1 ring-neutral-200/70">
            <h1 className="text-2xl font-semibold uppercase">JOHN ADAM</h1>
            <div className="flex items-center justify-start gap-7">
              <p className="text-sm">**** **** **** *0357</p>
              <p className="text-sm">Expire on : 12/2029</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#7f52861a] p-2 rounded-full">
                <MdLocationPin className="text-lg text-primary_color" />
              </div>
              <div>
                <p className="text-sm md:text-base">
                  Barnack, Cambridge 181.2 miles
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button type="button" variant="outline" className="uppercase">
                remove
              </Button>
              <Button type="button" variant="primary" className="uppercase" onClick={e => setAddCard(true)}>Edit</Button>
            </div>
          </div>
          <div className="px-3 py-5 space-y-3 bg-white rounded-lg shadow-md ring-1 ring-neutral-200/70">
            <h1 className="text-2xl font-semibold uppercase">JOHN ADAM</h1>
            <div className="flex items-center justify-start gap-7">
              <p className="text-sm">**** **** **** *0843</p>
              <p className="text-sm">Expire on : 10/2032</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#7f52861a] p-2 rounded-full">
                <MdLocationPin className="text-lg text-primary_color" />
              </div>
              <div>
                <p className="text-sm md:text-base">
                  Barnack, Cambridge 181.2 miles
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button type="button" variant="outline" className="uppercase">
                remove
              </Button>
              <Button type="button" variant="primary" className="uppercase" onClick={e => setAddCard(true)}>Edit</Button>
            </div>
          </div>
        </div>}
    </div>
  );
};

export default Card;
