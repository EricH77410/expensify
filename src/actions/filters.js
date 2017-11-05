// SET_TEXT_FILTER
export const setTextFilter = (term='') => {
    return {
        type: 'SET_TEXT_FILTER',
        term
    }
}
// SORT_BY_DATE
export const sortByDate = () => {
    return {
        type:'SORT_BY_DATE'
    }
}
// SORT_BY_AMOUNT
export const sortByAmount = () => {
    return {
        type:'SORT_BY_AMOUNT'
    }
}

// SORT_BY (rico)
export const sortBy = (term='') => {
    return {
        type:'SORT_BY',
        term
    }
}
// SET_START_DATE
export const setStartDate = (date) => {
    return {
        type:'SET_START_DATE',
        date
    }
}
// SET_END_DATE
export const setEndDate = (date) => {
    return {
        type:'SET_END_DATE',
        date
    }
}