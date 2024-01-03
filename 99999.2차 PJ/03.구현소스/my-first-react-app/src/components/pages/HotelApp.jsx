// 객실 예약 하기

import { useState } from "react";
import { HotelList } from "./HotelList";
import { HotelYeyak } from "./HotelYeyak";

// 제이쿼리
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export function HotelApp() {
    const [selRoom, setSelRoom] = useState(null);

    const [reservation, setReservation] = useState(null);

    const handleSelRoom = () => {
        setSelRoom(room);
        setReservation(null);
    };
    const handleReservation = (name, date) => {
        console.log(`${name}님이 선택하신 객실 ${selRoom.name}을 ${date}일에 예약되었습니다!!`);
        setReservation({ name, date });
    };

    return (
        <div>
            <h1>★Hotel Room Service★</h1>
            {selRoom ? (
                <HotelYeyak room={selRoom} onReservation={handleReservation} onCancel={() => setSelRoom(null)} />
            ) : (
                <HotelList onSelRoom={handleSelRoom} />
            )}
            {reservation && (
                <div>
                    <h2>예약 완료!!</h2>
                    <p>
                        {reservation.name}님이 객실{selRoom.name}을 {reservation.date}일에 예약하셨습니다!
                    </p>
                </div>
            )}
        </div>
    );
}; /// HotelApp ////////////////
