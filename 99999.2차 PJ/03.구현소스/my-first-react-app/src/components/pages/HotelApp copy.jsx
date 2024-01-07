// 객실 예약 하기

import { useEffect, useRef, useState } from "react";
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
    const nameHoi = useRef("내이름쓰세요");
    const date = useRef("2024-01-02");

    const handleReservation = () => {
        onReservation(nameHoi.current, date.current);
        nameHoi.current = "";
        date.current = "";
    };

    return (
        <div className="hoi">
            <div>
                <h2 style={{ fontSize: "40px" }}>객실 예약</h2>
                <p style={{ fontSize: "30px" }}>객실 번호: <span id="room-num"></span></p>
                <label style={{ fontSize: "20px" }}>
                    이름:
                    <input id="usr-name" type="text" defaultValue={nameHoi.current} onChange={(e) => nameHoi.current = e.target.value} />
                </label>
                <label style={{ fontSize: "20px" }}>
                    예약일:
                    <input id="usr-date" type="date" defaultValue={date.current} onChange={(e) => date.current = e.target.value} />
                </label>
                <button onClick={handleReservation}>예약하기</button>
            </div>
        </div>
    );
};

export function HotelApp({ chgPg }) {
    const selectedRoom = useRef("");
    const reservations = useRef([]);
    const nameHoi = useRef("내이름쓰세요");
    const date = useRef("2024-01-02");

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
        selectedRoom.current = room;
    };

    const handleReservation = (name, date) => {
        const reservation = {
            id: reservations.current.length + 1,
            room: selectedRoom.current.name,
            name,
            date,
        };
        reservations.current = [...reservations.current, reservation.current];
        selectedRoom.current = null;
    };

    useEffect(()=>{
        $('.hoi ul li').on('click',(e)=>{
            let cEle = $(e.currentTarget).index();
            // alert(cEle);
            $('#room-num').text(cEle);

        })
        $('.hoi button').on('click',()=>{
            nameHoi.current = $('#usr-name').val();
            date.current = $('#usr-date').val();
            alert(333);
        })
    },[])

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
                            {reservations.current.map((reservation) => (
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
