// 객실 예약 하기

import { useState } from "react";
import { SubTopArea } from "./SubTopArea";

// css
import "../../css/hotelapp.css";

// 제이쿼리
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

const RoomList = ({ rooms, onRoomSelect }) => {
    return (
        <div className="hoi">
            <div>
                <h2 style={{ fontSize: "30px" }}>※객실 목록※</h2>
                <ul style={{ fontSize: "30px" }}>
                    {rooms.map((room) => (
                        <li key={room.id} onClick={() => onRoomSelect(room)}>
                            {room.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const ReservationForm = ({ room, onReservation }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    const handleReservation = () => {
        onReservation(name, date);
        setName("");
        setDate("");
    };

    return (
        <div className="hoi">
            <div>
                <h2 style={{ fontSize: "40px" }}>객실 예약</h2>
                <p style={{ fontSize: "30px" }}>객실 번호: {room.id}</p>
                <label style={{ fontSize: "20px" }}>
                    이름:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label style={{ fontSize: "20px" }}>
                    예약일:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </label>
                <button onClick={handleReservation}>예약하기</button>
            </div>
        </div>
    );
};

export function HotelApp({ chgPg }) {
    const [selectedRoom, setSelectedRoom] = useState("");
    const [reservations, setReservations] = useState([]);

    const rooms = [
        {
            id: 1,
            name: "Deluxe room",
        },
        {
            id: 2,
            name: "Strip View Deluxe room",
        },
        {
            id: 3,
            name: "City View Deluxe room",
        },
    ];

    const handleRoomSelect = (room) => {
        setSelectedRoom(room);
    };

    const handleReservation = (name, date) => {
        const reservation = {
            id: reservations.length + 1,
            room: selectedRoom.name,
            name,
            date,
        };
        setReservations([...reservations, reservation]);
        setSelectedRoom(null);
    };

    return (
        <>
         <SubTopArea chgPg={chgPg} />

            <div className="hoi">
                <div>
                    <RoomList rooms={rooms} onRoomSelect={handleRoomSelect} />
                    {selectedRoom && <ReservationForm room={selectedRoom} onReservation={handleReservation} />}
                    <div>
                        <h2 style={{ fontSize: "30px" }}>예약 목록</h2>
                        <ul style={{ fontSize: "30px" }}>
                            {reservations.map((reservation) => (
                                <li key={reservation.id}>
                                    {`${reservation.name}님, 객실 ${reservation.room}을(를) ${reservation.date}일에 예약하셨습니다.`}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
} /// HotelApp ////////////////
