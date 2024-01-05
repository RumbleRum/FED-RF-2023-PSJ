// 객실 예약 하기

import { useState } from "react";
import { SubTopArea } from "./SubTopArea";
import { DateRangePicker } from "./DateRangePicker";
import "react-datepicker/dist/react-datepicker.css";

// css
import "../../css/hotelapp.css";

// 제이쿼리
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

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
                <DateRangePicker />
                {/* <label style={{ fontSize: "20px" }}>
                    체크인:    
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </label>
                <label style={{ fontSize: "20px" }}>
                    체크아웃:   
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </label> */}
                <button onClick={handleReservation}>예약하기</button>
            </div>
        </div>
    );
};

export function HotelApp({ chgPg }) {
    const [selectedRoom, setSelectedRoom] = useState("");
    const [reservations, setReservations] = useState([]);

    ////// 날짜 가져오기 ///////////////////////////
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };
    const handleEndDateChange = (date) => {
        setEndDate(date);
    };
    ///////////////////////////////////////////////

    const rooms = [
        {
            id: 1,
            name: "Deluxe room",
            info: "149000",
            isrc: "../../../public/images/hotel/conrad1.jpg",
        },
        {
            id: 2,
            name: "Strip View Deluxe room",
            info: "289000",
            isrc: "../../../public/images/hotel/conrad2.jpg",
        },
        {
            id: 3,
            name: "City View Deluxe room",
            info: "528000",
            isrc: "../../../public/images/hotel/conrad3.jpg",
        },
    ];

    const RoomList = ({ rooms, onRoomSelect }) => {
        return (
            <div className="hoi">
                <div>
                    <ul style={{ fontSize: "40px" }}>
                        {rooms.map((room, i) => (
                            <li key={room.id} onClick={() => onRoomSelect(room)}>
                                {room.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    const handleRoomSelect = (room) => {
        setSelectedRoom(room);
    };

    const handleReservation = (name, date, startDate, endDate) => {
        const reservation = {
            id: reservations.length + 1,
            room: selectedRoom.name,
            name,
            startDate,
            date,
            endDate,
        };
        setReservations([...reservations, reservation]);
        setSelectedRoom(null);
    };

    return (
        <>
            <SubTopArea chgPg={chgPg} />
            <div className="hoi">
                <div className="res">
                    <h2 style={{ fontSize: "30px" }}>예약 목록</h2>
                    <ul style={{ fontSize: "30px" }}>
                        {reservations.map((reservation) => (
                            <li key={reservation.id}>
                                {`${reservation.name}님, 객실 ${reservation.room}을(를) ${reservation.date}부터 ~ ${reservation.date}일에 예약하셨습니다.`}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    {selectedRoom && <ReservationForm room={selectedRoom} onReservation={handleReservation} />}
                    <RoomList rooms={rooms} onRoomSelect={handleRoomSelect} />
                </div>
            </div>
        </>
    );
} /// HotelApp ////////////////
