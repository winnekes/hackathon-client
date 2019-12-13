import { actionCreator } from './dispatchHandler';

export const EVENTS_FETCHED = 'EVENT_FETCHED';
export const EVENT_EDITED = 'EVENT_EDITED';
export const EVENT_DELETED = 'EVENT_DELETED';
export const EVENT_CREATED = 'EVENT_CREATED';

export const IMAGE_UPLOADED = 'IMAGE_UPLOADED';
export const IMAGE_EDITED = 'IMAGE_EDITED';
export const IMAGE_DELETED = 'IMAGE_DELETED';

export const TRIPS_FETCHED = 'TRIP_FETCHED';
export const TRIP_EDITED = 'TRIP_EDITED';
export const TRIP_CREATED = 'TRIP_CREATED';
export const TRIP_DELETED = 'TRIP_DELETED';

export const MEMBER_ADDED = 'MEMBER_ADDED';

export const SLIDES_FETCHED = 'SLIDES_FETCHED';

export const eventsFetched = actionCreator(EVENTS_FETCHED);
export const eventEdited = actionCreator(EVENT_EDITED);
export const eventCreated = actionCreator(EVENT_CREATED);
export const eventDeleted = actionCreator(EVENT_DELETED);

export const imageUploaded = actionCreator(IMAGE_UPLOADED);
export const imageEdited = actionCreator(IMAGE_EDITED);
export const imageDeleted = actionCreator(IMAGE_DELETED);

export const tripsFetched = actionCreator(TRIPS_FETCHED);
export const tripEdited = actionCreator(TRIP_EDITED);
export const tripCreated = actionCreator(TRIP_CREATED);
export const tripDeleted = actionCreator(TRIP_DELETED);

export const memberAdded = actionCreator(MEMBER_ADDED);

export const slidesFetched = actionCreator(SLIDES_FETCHED);
