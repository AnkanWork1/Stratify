class BoardRepository {
  async create(board) {
    throw new Error("BoardRepository.create not implemented");
  }

  async findById(id) {
    throw new Error("BoardRepository.findById not implemented");
  }

  async findByWorkspace(workspaceId) {
    throw new Error("BoardRepository.findByWorkspace not implemented");
  }
}

module.exports = BoardRepository;
