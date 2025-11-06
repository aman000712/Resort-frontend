// // import ExploreRoom from "@/Page Component/Rooms/ExploreRoom";
// import RoomBanner from "@/Page Component/Rooms/RoomBanner";
// import RoomDetails from "@/Page Component/Rooms/RoomDetails";

// export default function Rooms(){
//     return(
//         <div>
//             <RoomBanner/>
//             {/* <ExploreRoom/> */}
//             <RoomDetails/>
//         </div>
       
//     )
// }

"use client";

import { useState } from "react";
import RoomBanner from "@/Page Component/Rooms/RoomBanner";
import RoomDetails from "@/Page Component/Rooms/RoomDetails";
import DeluxeRoom from "@/Page Component/Rooms/DeluxeRoom";
// import StandardRoom from "@/Page Component/Rooms/StandardRoom";
// import SuiteRoom from "@/Page Component/Rooms/SuiteRoom";
// import PresidentialRoom from "@/Page Component/Rooms/PresidentialRoom";

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  // --- Render a specific room detail page ---
  if (selectedRoom === "deluxe") {
    return <DeluxeRoom onBack={() => setSelectedRoom(null)} />;
  }
//   if (selectedRoom === "standard") {
//     return <StandardRoom onBack={() => setSelectedRoom(null)} />;
//   }
//   if (selectedRoom === "suite") {
//     return <SuiteRoom onBack={() => setSelectedRoom(null)} />;
//   }
//   if (selectedRoom === "presidential") {
//     return <PresidentialRoom onBack={() => setSelectedRoom(null)} />;
//   }

  // --- Default view: show all rooms ---
  return (
    <div>
      <RoomBanner />
      <RoomDetails onSelectRoom={(roomType) => setSelectedRoom(roomType)} />
    </div>
  );
}
