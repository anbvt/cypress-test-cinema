import "./ticket.css"
import {FaRegClock} from "react-icons/fa";
import {useEffect} from "react";
import {NumberUtils} from "@/util/NumberUtils";
import {DateUtils} from "@/util/DateUtils";

interface TicketProps {
    tickets: ticketBillDetailsPage[];
}

const Ticket = (props: TicketProps) => {
    const tickets = props.tickets;
    
    return (
        <div className="section mb-6">
            <div className="text-center">
                <h2 className="pb-1">Chi tiết <i className='uil uil-bus color-yellow'></i> vé</h2>
                <div className="lg:grid lg:grid-cols-3 lg:gap-4 m-auto">
                    {
                        tickets.map((ticket, index) => {
                            return (
                                <section key={index}>
                                    <input className="checkbox-ticket" type="radio" name="ticket"
                                           id={`ticket-${index}`}/>
                                    <label htmlFor={`ticket-${index}`}>
							<span className="top-dots">
								<span className="section dots">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
								</span>
							</span>
                                        <span className="ticket-id">
								Mã vé: {ticket.id}
							</span>
                                        <span className="price mt-2 pb-4 mb-4">
								{NumberUtils.formatCurrency(ticket.totalPrice)}<sup></sup>
							</span>
                                        <span className="section dot">
								{/*<span></span>*/}
								{/*<span></span>*/}
								{/*<span></span>*/}
								{/*<span></span>*/}
								{/*<span></span>*/}
								{/*<span></span>*/}
								{/*<span></span>*/}
								{/*<span></span>*/}
								{/*<span></span>*/}
								{/*<span></span>*/}
								{/*<span></span>*/}
								{/*<span></span>*/}
								{/*<span></span>*/}
								{/*<span></span>*/}
								{/*<span></span>*/}
								{/*<span></span>*/}
								{/*<span></span>*/}
							<div></div>
                                        </span>
                                        <span className="section pt-6 text-neutral-900 font-bold">
								Vị trí: {ticket.seat}
							</span>
                                        <span className="section text-center text-neutral-900 font-bold">
                                            Loại: {ticket.seatType}
								</span>
                                        <span className="bottom-dots">
								<span className="section dots">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
								</span>
							</span>
                                    </label>
                                </section>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Ticket;