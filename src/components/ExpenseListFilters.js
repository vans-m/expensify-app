import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters'
import DatePicker from 'react-datepicker'
import onDateChange from '../form-actions/manageOnDateChange'

export const ExpenseListFilters = ({ filters, dispatch }) => (
	<div className="filters-box">
		<div>
			<input
				placeholder="Search expenses"
				className="description-filter"
				value={filters.text}
				type="text"
				onChange={(e) => {
					dispatch(setTextFilter(e.target.value))
				}}
			/>
		</div>
		<div>
			<select
				data-testid="options"
				value={filters.sortBy}
				onChange={(e) => {
					e.target.value === 'date' ? dispatch(sortByDate()) : dispatch(sortByAmount())
				}}
			>
				<option value="amount">Amount</option>
				<option value="date">Date</option>
			</select>
		</div>
		<div className="range-picker">
			<div className="start-picker">
				<DatePicker
					selected={filters.startDate}
					onChange={(startDate) => onDateChange('start', startDate, dispatch)}
					dateFormat="dd/MM/yyyy"
					isClearable
					placeholderText="Select start date"
				/>
			</div>
			<span className="range-arrow">&#8594;</span>
			<div className="end-picker">
				<DatePicker
					selected={filters.endDate}
					onChange={(endDate) => onDateChange('end', endDate, dispatch)}
					dateFormat="dd/MM/yyyy"
					isClearable
					placeholderText="Select end date"
				/>
			</div>
		</div>
	</div>
)

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	}
}

export default connect(mapStateToProps)(ExpenseListFilters)
