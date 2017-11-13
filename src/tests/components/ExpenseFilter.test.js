import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseFilter } from '../../components/ExpenseFilter';
import { filters, altFilters } from '../fixtures/filters';
import { wrap } from 'module';
import { sortBy } from '../../actions/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(
        <ExpenseFilter 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount = {sortByAmount}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
        />
    )
})

test('should render ExpenseFilter correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseFilter with alt data correctly', () => {
    wrapper.setProps({
        filters:altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

// text change
test('should handle text change', ()=>{
    const value = 'rico';
    wrapper.find('input').simulate('change', {
        target: {value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

//select change
test('should handle select change and sort by amount', ()=>{
    const value = 'amount'
    wrapper.find('select').simulate('change', {target:{value}})
    expect(sortByAmount).toHaveBeenCalled()
})

// Sort by date
test('should handle select change and sort by date', ()=>{
    const value = 'date'
    wrapper.setProps({filters:altFilters})
    wrapper.find('select').simulate('change', {target:{value}})
    expect(sortByDate).toHaveBeenCalled()
})


test('should handle date change', () => {
    const startDate = moment(0).add(4,'years');
    const endDate = moment(0).add(8,'years')
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle dateFocus change', () => {
    const calendarFocused = 'startDate'
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
   
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})