class WorkspaceRepository {
  async create(workspace) {
    throw new Error("WorkspaceRepository.create not implemented");
  }

  async findById(id) {
    throw new Error("WorkspaceRepository.findById not implemented");
  }

  async findAll() {
    throw new Error("WorkspaceRepository.findAll not implemented");
  }
}

module.exports = WorkspaceRepository;
