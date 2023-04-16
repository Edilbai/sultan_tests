import React from 'react'
import ReactPaginate from 'react-paginate'
import './Filter.css'

const Pagination = ({ onChangePage }) => {
	return (
		<div>
			<ReactPaginate
				data-testid='pagination'
				className='pages d-flex j-center'
				breakLabel='...'
				nextLabel='>'
				onPageChange={event => onChangePage(event.selected + 1)}
				pageRangeDisplayed={9}
				pageCount={2}
				previousLabel='< '
				renderOnZeroPageCount={null}
			/>
		</div>
	)
}

export default Pagination
