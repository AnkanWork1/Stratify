class ActivityRepository {
  async log(activity) {
    throw new Error("ActivityRepository.log not implemented");
  }

  async findByUser(userId) {
    throw new Error("ActivityRepository.findByUser not implemented");
  }

  async findByWorkspace(workspaceId) {
    throw new Error("ActivityRepository.findByWorkspace not implemented");
  }
}

module.exports = ActivityRepository;
