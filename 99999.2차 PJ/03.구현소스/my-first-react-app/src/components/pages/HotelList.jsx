// 호텔 객실 리스트
import React from "react";

// 제이쿼리
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export function HotelList({ roomSel }) {
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

    return (
        <div>
            <h2>Hotel Check List</h2>
            <ul>
                {rooms.map((v, i) => (
                    <li key={i} onClick={() => roomSel}>
                        {v.name}
                    </li>
                ))}
            </ul>
        </div>
    );
} //// HotelList ///////////////////////
