import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters'
import DatePicker from 'react-datepicker'
import onDateChange from '../form-actions/manageOnDateChange'

export const ExpenseListFilters = ({ filters, dispatch }) => {
	return (
		<div className="content-container data-input">
			<div className="input-group">
				<div className="input-group__item">
					<input
						placeholder="Search expenses"
						className="text-input"
						value={filters.text}
						type="text"
						onChange={(e) => {
							dispatch(setTextFilter(e.target.value))
						}}
					/>
				</div>
				<div className="input-group__item">
					<select
						className="select"
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
				<div className="input-group__item">
					<div className="range-picker">
						<div className="start-picker">
							<DatePicker
								selected={filters.startDate ? new Date(filters.startDate) : null}
								onChange={(startDate) => onDateChange('start', startDate, dispatch)}
								dateFormat="dd/MM/yyyy"
								isClearable
								placeholderText="Select start date"
							/>
						</div>
						<span className="range-arrow">&#10230;</span>
						<div className="end-picker">
							<DatePicker
								selected={filters.endDate ? new Date(filters.endDate) : null}
								onChange={(endDate) => onDateChange('end', endDate, dispatch)}
								dateFormat="dd/MM/yyyy"
								isClearable
								placeholderText="Select end date"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	}
}

export default connect(mapStateToProps)(ExpenseListFilters)
