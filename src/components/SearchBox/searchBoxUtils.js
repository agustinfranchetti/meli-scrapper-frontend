export const getSearchResults = async (searchTerm) => {
    const searchResults = [];
    await fetch(`http://127.0.0.1:8000/data/${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((item) => {
                searchResults.push(item);
            });
        }
    );
    return searchResults;
};
