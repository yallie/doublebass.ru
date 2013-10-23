/* Creates a link with the current date in it */

function newPageLink(baseUrl) {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	return "<a title='Create a new post' href='" + baseUrl + yyyy + "-" + mm + "-" + dd + "-newpost.md" + "'>";
}

