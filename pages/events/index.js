import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";

import EventsSearch from "../../components/events/events-search";
import EventList from "../../components/events/event-list";

const AllEventsPage = (props) => {
    const { events } = props;
    const router = useRouter();

    const findEventsHandler = (year, month) => {
        //constructing desired path
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    };

    return (
        <Fragment>
            <Head>
                <title>All Events</title>
                <meta name="description" content="events for developers" />
            </Head>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </Fragment>
    );
};

export async function getStaticProps() {
    const events = await getAllEvents();
    return {
        props: {
            events: events,
        },
        revalidate: 60,
    };
}

export default AllEventsPage;
