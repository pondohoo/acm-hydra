import React, { Suspense, useEffect, useState } from "react";
const Col = React.lazy(() => import("react-bootstrap/Col"));
const Row = React.lazy(() => import("react-bootstrap/Row"));
const Event = React.lazy(() => import("./Event"));
import Events from "./data/Events.js";

const Upcoming = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		setEvents(
			Events.filter(event => {
				return event.start > new Date();
			}).slice(0, 3)
		);
	}, []);

	return (
		<div className='w-full mb-20 flex justify-content items-center flex-col'>
			<Suspense fallback={<div>Loading...</div>}>
				<p className='flex justify-center text-center text-acm-black font-lexend text-heading'>
					Upcoming Events
				</p>
				<br />
				<Row className='w-11/12'>
					{events.length ? (
						events.map((event, index) => (
							<Col className='p-3' md={6} lg={4} key={index}>
								<Event
									title={event.title}
									location={event.location}
									shadow={event.shadow}
									start={event.start}
									end={event.end}
									description={event.description}
								/>
							</Col>
						))
					) : (
						<Col className='flex justify-center text-center text-acm-black font-lexend p-3'>
							No upcoming events, please check back later!
						</Col>
					)}
				</Row>
			</Suspense>
		</div>
	);
};

export default Upcoming;
