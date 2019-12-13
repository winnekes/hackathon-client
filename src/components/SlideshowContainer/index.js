import React, { Component } from 'react';
import { Zoom } from 'react-slideshow-image';

const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true,
};

export default class SlideshowContainer extends Component {
    render() {
        return (
            <div className="slide-container">
                {/*         <Zoom {...zoomOutProperties}>
                    {images.map((each, index) => (
                        <img key={index} style={{ width: '100%' }} src={each} />
                    ))}
                </Zoom> */}
            </div>
        );
    }
}

/* const mapStateToProps = (state, ownProps) => {
    const trip = state.trips.find(
        trip => trip.id === parseInt(ownProps.match.params.id)
    );
    if (trip) {
        return {
            user: state.user,
            trip,
            events: trip.events.map(event => ({
                id: event.id,
                title: event.title,
                start: event.startsAt,
                end: event.endsAt,
                ...event,
            })),
        };
    }
    return {};
};
export default connect(mapStateToProps, { getData, deleteData, postData })(
    SlideshowContainer
);
 */
