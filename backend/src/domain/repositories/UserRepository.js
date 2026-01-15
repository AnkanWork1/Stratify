class UserRepository {
  async create(user) {
    throw new Error("UserRepository.create not implemented");
  }

  async findById(id) {
    throw new Error("UserRepository.findById not implemented");
  }

  async findByEmail(email) {
    throw new Error("UserRepository.findByEmail not implemented");
  }

  async update(user) {
    throw new Error("UserRepository.update not implemented");
  }
}

module.exports = UserRepository;
