import {setStartDate,setEndDate,sortByDate,sortByAmount, setTextFilter} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action event', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
    type:'SET_START_DATE',
    startDate: moment(0)
    });
});

test('should generate set end date action event', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
    type:'SET_END_DATE',
    endDate: moment(0)
    });
});

test('should generate set textfilter object with text value', () => {
    const text = 'Some text';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    });
});

test('should generate set textfilter object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate set sortByAmount action object', ()=> {
    expect(sortByAmount()).toEqual({ type:'SORT_BY_AMOUNT'});
});

test('should generate set sortByDate action object', ()=> {
    expect(sortByDate()).toEqual({ type:'SORT_BY_DATE'});
});
