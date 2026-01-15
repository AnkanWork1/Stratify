class CardRepository {
  async create(card) {
    throw new Error("CardRepository.create not implemented");
  }

  async findById(id) {
    throw new Error("CardRepository.findById not implemented");
  }

  async findByList(listId) {
    throw new Error("CardRepository.findByList not implemented");
  }
}

module.exports = CardRepository;
