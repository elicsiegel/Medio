export const sendSearchQuery = searchQuery => {
  return $.ajax({
    url: "api/searches",
    data: {query: searchQuery}
  });
};