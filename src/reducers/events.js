import { EVENTS_FETCHED } from '../actions';

export default function(state = [], action = {}) {
    switch (action.type) {
        case EVENTS_FETCHED:
            return action.payload.map(shift => ({
                id: shift.id,
                title: shift.shiftModel.name,
                start: shift.startsAt,
                end: shift.endsAt,
                note: shift.note,
                color: shift.shiftModel.color,
            }));

        default:
            return state;
    }
}
