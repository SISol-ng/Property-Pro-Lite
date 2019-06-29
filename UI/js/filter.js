/* Handling Side panel filter options expansion */
const expandTypeFilter = () => {
	if (document.getElementById('type-expand-icon').textContent === '+') {
		document.getElementById('filterByType').style.display='block';
		document.getElementById('type-expand-icon').textContent = '-';
	} else if (document.getElementById('type-expand-icon').textContent === '-') {
		document.getElementById('filterByType').style.display='none';
		document.getElementById('type-expand-icon').textContent = '+';
	}
}

const expandTermFilter = () => {
	if (document.getElementById('term-expand-icon').textContent === '+') {
		document.getElementById('filterByTerm').style.display='block';
		document.getElementById('term-expand-icon').textContent = '-';
	} else if (document.getElementById('term-expand-icon').textContent === '-') {
		document.getElementById('filterByTerm').style.display='none';
		document.getElementById('term-expand-icon').textContent = '+';
	}
}

const expandLocationFilter = () => {
	if (document.getElementById('loc-expand-icon').textContent === '+') {
		document.getElementById('filterByLocation').style.display='block';
		document.getElementById('loc-expand-icon').textContent = '-';
	} else if (document.getElementById('loc-expand-icon').textContent === '-') {
		document.getElementById('filterByLocation').style.display='none';
		document.getElementById('loc-expand-icon').textContent = '+';
	}
}

const expandPriceFilter = () => {
	if (document.getElementById('price-expand-icon').textContent === '+') {
		document.getElementById('filterByPrice').style.display='block';
		document.getElementById('price-expand-icon').textContent = '-';
	} else if (document.getElementById('price-expand-icon').textContent === '-') {
		document.getElementById('filterByPrice').style.display='none';
		document.getElementById('price-expand-icon').textContent = '+';
	}
}