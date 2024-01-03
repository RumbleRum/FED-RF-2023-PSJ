// 호텔 예약 시스템

import { useState } from "react";

// 제이쿼리
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export function HotelYeyak({ room, onReservation }) {
    // 객실이름
    const [name, setName] = useState("");
    // 날짜설정
    const [date, setDate] = useState("");

    const handleReservation = () => {
        onReservation(name, date);
    };

    return (
        <div>
            <h1>호텔 객실 예약</h1>
            <p>객실 예약 번호 : {room.id}</p>
            <label>
                회원 이름:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                예약 날짜:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <button onClick={handleReservation}>예약하기</button>
            <button onClick={onCancel}>취소</button>
        </div>
    );
} ///// HotelYeyak //////////////////////////
