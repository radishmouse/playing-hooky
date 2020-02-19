export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

function calculateDateStamp() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

export function actionIncrement() {
    return ({
        type: INCREMENT,
        payload: {
            datestamp: calculateDateStamp()
        }
    });
}

export function actionDecrement() {
    return ({
        type: DECREMENT,
        payload: {
            datestamp: calculateDateStamp()
        }
    });
}
