// import React, { Component } from 'react';
// import planeBG from "../assets/images/planebg1.jpg";
// import Header from './Header';
// import Footer from './Footer';
// import BookingService from '../services/BookingService';

// class Tickets extends Component {
//     state ={multiple_ticket:[]}
//     constructor(props){
//         super(props)
//         this.service = new BookingService();
//         this.tickets = []
//         if(!localStorage.getItem('user'))
//         {
//             this.props.history.push('/login')
//         }
//         else{
//             this.service.getTickets().then(response => {
//                 console.log("Tickets page : " +response)
//                 this.tickets = (response.data)
//                 console.log("Tickets: "+ this.tickets)
//             });
//         }
        
//     }

//     componentDidMount(){
        
//     }

//     /** 
//      * stores ticket in local storage and redirects to Ticket component
//     */
//     showTicket(x) {
//         console.log(x)
//         localStorage.setItem('view-ticket',JSON.stringify(x))
//         this.props.history.push('/ticket')
//     }
    
//     render(){
//         if(!this.tickets){return null}

//         const flightList = this.tickets.map((x)=>
//                 <tr key={x.ticketNumber}>
//                     <td>{x.ticketNumber}</td>
//                     <td>{x.booking.flight.source}</td>
//                     <td>{x.booking.flight.destination}</td>
//                     <td>{x.booking.flight.travelDate}</td>
//                     <td>{x.booking.bookingDate}</td>
//                     <td><button className="btn btn-outline-dark" onClick={() => this.showTicket(x)}>View Ticket</button></td>
//                 </tr>
//         )

//         return (
//             <div class='pt-5'>
//             <Header />  
            
//         <div class='pt-5' style={{backgroundImage: `url(${planeBG})`,overflow: 'hidden', height: '700px'}}>
        
//             <div class="row mb-4">
//                 <div class="col-lg-12 mx-auto text-center">
//                 <h1 class="display-6" style={{color:'white', fontWeight:'50pt'}}>My Bookings</h1>
//                 </div>
//             </div> 

// 			<div class="row">
// 				<div class="col-md-8 mx-auto">
// 					<div class="card ">
// 					    <div class="card-header">
//                             <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
//                                 <div class="tab-content">
//                                     <div class="tab-pane fade show active pt-3">
//                                         <table class="table table-striped">
//                                         <tr class="thead-dark">
//                                             <th>Ticket Number</th>
//                                             <th>Source</th>
//                                             <th>Destination</th>
//                                             <th>Travel Date</th>
//                                             <th>Booking Date</th>
//                                             <th>Details</th>
//                                         </tr>
//                                             {flightList}
//                                         </table>
                                            
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
// 	    </div>
        
//         </div>
//         );
//     }
// }

// export default Tickets;
// import React, { Component } from 'react';
// import planeBG from "../assets/images/planebg1.jpg";
// import Header from './Header';
// import Footer from './Footer';
// import BookingService from '../services/BookingService';

// class Tickets extends Component {
//     state = { tickets: [] };

//     constructor(props) {
//         super(props);
//         this.service = new BookingService();

//         if (!localStorage.getItem('user')) {
//             this.props.history.push('/login');
//         } else {
//             this.fetchTickets();
//         }
//     }

//     fetchTickets() {
//         this.service.getTickets().then((response) => {
//             // Initially set the booking status to "YES" for all tickets
//             const ticketsWithStatus = response.data.map((ticket) => ({
//                 ...ticket,
//                 booking: {
//                     ...ticket.booking,
//                     status: 'YES',
//                 },
//             }));
//             this.setState({ tickets: ticketsWithStatus });
//         });
//     }

//     showTicket(x) {
//         localStorage.setItem('view-ticket', JSON.stringify(x));
//         this.props.history.push('/ticket');
//     }

//     cancelBooking(ticket) {
//         // Update the booking status to "NO" and disable the cancel button
//         const updatedTickets = this.state.tickets.map((t) => {
//             if (t.ticketNumber === ticket.ticketNumber) {
//                 t.booking.status = 'NO';
//             }
//             return t;
//         });
//         this.setState({ tickets: updatedTickets });
//     }

//     render() {
//         const { tickets } = this.state;

//         const ticketList = tickets.map((x) => (
//             <tr key={x.ticketNumber}>
//                 <td>{x.ticketNumber}</td>
//                 <td>{x.booking.flight.source}</td>
//                 <td>{x.booking.flight.destination}</td>
//                 <td>{x.booking.flight.travelDate}</td>
//                 <td>{x.booking.bookingDate}</td>
//                 <td>{x.booking.status}</td>
//                 <td>
//                     {x.booking.status === 'YES' && (
//                         <button
//                             className="btn btn-danger"
//                             onClick={() => this.cancelBooking(x)}
//                             disabled={x.booking.status === 'NO'}
//                         >
//                             Cancel
//                         </button>
//                     )}
//                 </td>
//                 <td>
//                     <button
//                         className="btn btn-outline-dark"
//                         onClick={() => this.showTicket(x)}
//                     >
//                         View Ticket
//                     </button>
//                 </td>
//             </tr>
//         ));

//         return (
//             <div class='pt-5'>
//                 <Header />

//                 <div class='pt-5' style={{ backgroundImage: `url(${planeBG})`, overflow: 'hidden', height: '700px' }}>

//                     <div class="row mb-4">
//                         <div class="col-lg-12 mx-auto text-center">
//                             <h1 class="display-6" style={{ color: 'white', fontWeight: '50pt' }}>My Bookings</h1>
//                         </div>
//                     </div>

//                     <div class="row">
//                         <div class="col-md-8 mx-auto">
//                             <div class="card ">
//                                 <div class="card-header">
//                                     <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
//                                         <div class="tab-content">
//                                             <div class="tab-pane fade show active pt-3">
//                                                 <table class="table table-striped">
//                                                     <thead class="thead-dark">
//                                                         <tr>
//                                                             <th>Ticket Number</th>
//                                                             <th>Source</th>
//                                                             <th>Destination</th>
//                                                             <th>Travel Date</th>
//                                                             <th>Booking Date</th>
//                                                             <th>Booking Status</th>
//                                                             <th>Action</th>
//                                                             <th>Details</th>
//                                                         </tr>
//                                                     </thead>
//                                                     <tbody>
//                                                         {ticketList}
//                                                     </tbody>
//                                                 </table>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//             </div>
//         );
//     }
// }

// export default Tickets;


import React, { Component } from 'react';
import planeBG from "../assets/images/planebg1.jpg";
import Header from './Header/Header';
import Footer from './Footer';
import BookingService from '../services/BookingService';

// ... (Previous code)

class Tickets extends Component {
    state = { tickets: [] };

    constructor(props) {
        super(props);
        this.service = new BookingService();

        if (!localStorage.getItem('user')) {
            this.props.history.push('/login');
        } else {
            this.fetchTickets();
        }
    }

    fetchTickets() {
        this.service.getTickets().then((response) => {
            const storedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
            const updatedTickets = response.data.map((ticket) => {
                const storedTicket = storedTickets.find((t) => t.ticketNumber === ticket.ticketNumber);
                if (storedTicket) {
                    ticket.booking.status = storedTicket.booking.status;
                } else {
                    // Initialize with "YES" if not found in storage
                    ticket.booking.status = 'YES';
                }
                return ticket;
            });
            this.setState({ tickets: updatedTickets });
        });
    }

    showTicket(x) {
        localStorage.setItem('view-ticket', JSON.stringify(x));
        this.props.history.push('/ticket');
    }

    cancelBooking(ticket) {
        // Update the booking status in the component's state
        const updatedTickets = this.state.tickets.map((t) => {
            if (t.ticketNumber === ticket.ticketNumber) {
                t.booking.status = 'NO';
            }
            return t;
        });
        this.setState({ tickets: updatedTickets });

        // Update the booking status in localStorage
        const storedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
        const updatedStoredTickets = storedTickets.map((t) => {
            if (t.ticketNumber === ticket.ticketNumber) {
                t.booking.status = 'NO';
            }
            return t;
        });
        localStorage.setItem('tickets', JSON.stringify(updatedStoredTickets));
    }

    logout() {
        // Clear the user's data when they log out
        localStorage.removeItem('user');
        localStorage.removeItem('tickets');
        this.props.history.push('/login');
    }

    render() {
        const { tickets } = this.state;

        const ticketList = tickets.map((x) => (
            <tr key={x.ticketNumber}>
                <td>{x.ticketNumber}</td>
                <td>{x.booking.flight.source}</td>
                <td>{x.booking.flight.destination}</td>
                <td>{x.booking.flight.travelDate}</td>
                <td>{x.booking.bookingDate}</td>
                <td>{x.booking.status}</td>
                <td>
                    {x.booking.status === 'YES' && (
                        <button
                            className="btn btn-danger"
                            onClick={() => this.cancelBooking(x)}
                            disabled={x.booking.status === 'NO'}
                        >
                            Cancel
                        </button>
                    )}
                </td>
                <td>
                    <button
                        className="btn btn-outline-dark"
                        onClick={() => this.showTicket(x)}
                    >
                        View Ticket
                    </button>
                </td>
            </tr>
        ));

        return (
            <div class='pt-5'>
                <Header />

                <div class='pt-5' style={{ backgroundImage: `url(${planeBG})`, overflow: 'hidden', height: '700px' }}>

                    <div class="row mb-4">
                        <div class="col-lg-12 mx-auto text-center">
                            <h1 class="display-6" style={{ color: 'white', fontWeight: '50pt' }}>My Bookings</h1>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-8 mx-auto">
                            <div class="card ">
                                <div class="card-header">
                                    <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                                        <div class="tab-content">
                                            <div class="tab-pane fade show active pt-3">
                                                
                                                <table class="table table-striped">
                                                    <thead class="thead-dark">
                                                        <tr>
                                                            <th>Ticket Number</th>
                                                            <th>Source</th>
                                                            <th>Destination</th>
                                                            <th>Travel Date</th>
                                                            <th>Booking Date</th>
                                                            <th>Booking Status</th>
                                                            <th>Action</th>
                                                            <th>Details</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {ticketList}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Tickets;



