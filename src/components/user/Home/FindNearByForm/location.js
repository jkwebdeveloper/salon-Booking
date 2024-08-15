{/* <CiLocationOn className="text-2xl" /> */ }

import { Spinner } from "@/components";
import { useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { CiLocationOn } from "react-icons/ci";
import { useClickOutside } from '@mantine/hooks';

const Location = ({ setFormItems, formItems }) => {
     const { placePredictions, placesService, getPlacePredictions, isPlacePredictionsLoading } = useGoogle({ apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY });
     const [value, setValue] = useState({ text: formItems?.address, selected: false });
     const placeList = useClickOutside(() => setValue({ ...value, selected: true }));

     // const { inputRef } = usePlacesWidget({
     //      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
     //      onPlaceSelected: (place) => {
     //           console.log(place);
     //      },
     //      options: {
     //           types: [],
     //           fields: ["place_id", "geometry", "name", "formatted_address"]
     //      }
     // });

     return (
          <div className="relative min-w-[300px]">
               <div className="flex items-center gap-2">
                    <CiLocationOn className="text-2xl" />
                    <input
                         // ref={inputRef}
                         style={{ color: "black" }}
                         className="border-none input_field"
                         value={value?.text || formItems?.address}
                         placeholder="Search locations"
                         onChange={(evt) => {
                              getPlacePredictions({ input: evt.target.value });
                              setValue({ text: evt.target.value, selected: false });
                         }}
                         loading={isPlacePredictionsLoading}
                    />
               </div>
               {isPlacePredictionsLoading && <div ref={placeList} className="absolute flex items-center justify-center z-[9999] w-full p-5 mt-3 bg-white shadow-md rounded-b-xl left-7 top-full">
                    <Spinner show={true} width={40} height={40} />
               </div>
               }
               {(!isPlacePredictionsLoading && placePredictions?.length > 0 && !value?.selected) ? <div ref={placeList} className="absolute max-h-[330px] overflow-y-auto z-[9999] w-full px-3 mt-3 bg-white shadow-md rounded-b-xl left-7 top-full">
                    <div>
                         {placePredictions.map((item) => (
                              <div className="py-1.5 text-md border-b cursor-pointer text-neutral-500 font-normal" key={item.id} onClick={() => {
                                   placesService?.getDetails({ placeId: placePredictions[0].place_id, }, (placeDetails) => {
                                        setValue({ text: item?.description, selected: true });
                                        setFormItems({ ...formItems, address: item?.description, lat: placeDetails?.geometry?.location?.lat(), long: placeDetails?.geometry?.location?.lng() });
                                   });
                              }}>
                                   {item.description}
                              </div>
                         ))}
                    </div>
               </div> : null}
          </div>
     );
};

export default Location;