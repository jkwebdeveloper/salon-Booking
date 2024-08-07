'use client';
import React, { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import EditCardModal from "@/components/user/MyAccount/card/EditCardModal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { POST } from "@/app/api/post";
import { PageLoader } from "@/components";
import { v4 } from "uuid";
import { useSelector } from "react-redux";
import { GET } from "@/app/api/get";

const Card = () => {
  const user = useSelector((state) => state.userAuth.user) || '';
  const [addCard, setAddCard] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [editCard, setEditCard] = useState('');
  const [error, setError] = useState("");

  const getCards = async () => {
    setLoading(true);
    const resp = await GET.request({ url: "/user-list-card", token: user?.api_token });
    setLoading(false);
    if (resp && resp.status != 'Error' && resp.code == 200) {
      setCards(resp.data);
      return;
    }
    setError(resp.message);
  };

  const deleteCard = async (id) => {
    const resp = await POST.request({ url: "/delete-card", form: { id }, token: user?.api_token });
    if (resp && resp.code == 200) {
      setCards(cards.filter(card => card.id !== id));
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="p-3 space-y-4 bg-white rounded-md xl:p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl text-[#25324B] font-semibold">Profile</p>
          <p>Your saved credit and debit cards</p>
        </div>
        <Dialog open={addCard}>
          <DialogTrigger onClick={e => {
            setEditCard('');
            setAddCard(true);
          }} className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90">
            Add New Card
          </DialogTrigger>
          <DialogContent className="max-h-[90vh]" onInteractOutside={e => setAddCard(false)} close={setAddCard}>
            {editCard && <DialogTitle>Edit card</DialogTitle> || <DialogTitle>Add new card</DialogTitle>}
            <EditCardModal setAddCard={setAddCard} setCards={setCards} editCard={editCard} cards={cards} />
          </DialogContent>
        </Dialog>
      </div>
      {loading && <PageLoader width={50} height={50} /> ||
        <div className="grid items-center justify-center grid-cols-1 gap-5 py-5 lg:grid-cols-2">
          {cards.length > 0 && cards.map(card => (
            <div key={v4()} className="px-3 py-5 space-y-3 bg-white rounded-lg shadow-md ring-1 ring-neutral-200/70">
              <h1 className="text-2xl font-semibold uppercase">{card?.first_name} {card?.last_name}</h1>
              <div className="flex items-center justify-start gap-7">
                <p className="text-sm">{'**** **** **** ' + card?.card_number.slice(12, 16)}</p>
                <p className="text-sm">Expire on : {card?.expried_on}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#7f52861a] p-2 rounded-full">
                  <MdLocationPin className="text-lg text-primary_color" />
                </div>
                <div>
                  <p className="text-sm md:text-base">
                    {card?.address_line_one} {card?.address_line_two} {card?.city} {card?.postcode}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button type="button" variant="danger" className="" onClick={e => deleteCard(card?.id)}>
                  remove
                </Button>
                <Button type="button" variant="primary" className="px-10 uppercase" onClick={e => { setAddCard(true); setEditCard(card) }}>Edit</Button>
              </div>
            </div>
          )) || <p key={v4()} className="w-full col-span-2 pt-20 text-2xl font-semibold text-center text-primary"> Card Not Added.</p>}
          {/* <div className="px-3 py-5 space-y-3 bg-white rounded-lg shadow-md ring-1 ring-neutral-200/70">
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
              <Button type="button" variant="danger" className="">
                remove
              </Button>
              <Button type="button" variant="primary" className="px-10 uppercase" onClick={e => setAddCard(true)}>Edit</Button>
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
              <Button type="button" variant="danger" className="">
                remove
              </Button>
              <Button type="button" variant="primary" className="px-10 uppercase" onClick={e => setAddCard(true)}>Edit</Button>
            </div>
          </div> */}
        </div>}
    </div>
  );
};

export default Card;
