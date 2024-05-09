import * as userRepository from '../repositories/memory.repository.js';
export const getAllUsers = () => userRepository.getUsers();
export const getUserById = (id) => userRepository.findUserById(id);
export const createUser = (userData) => userRepository.addUser(userData);
export const updateUser = (id, updateData) => {
    const user = userRepository.findUserById(id);
    if (!user)
        return null;
    Object.assign(user, updateData);
    return user;
};
export const deleteUser = (id) => {
    userRepository.deleteUser(id);
};
//# sourceMappingURL=user.service.js.map