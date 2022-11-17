function toggleBookmark(cards, id) {
  const resCards = cards.map((card) => {
    return card.id === id ? { ...card, bookmarked: !card.bookmarked } : card;
  });
  return resCards;
}

export { toggleBookmark };
