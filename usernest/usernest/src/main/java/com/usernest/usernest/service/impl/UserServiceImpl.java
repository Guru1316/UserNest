package com.usernest.usernest.service.impl;

import com.usernest.usernest.model.User;
import com.usernest.usernest.repository.UserRepository;
import com.usernest.usernest.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    @Override
    public User createUser(User user)
    {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers()
    {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id)
    {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User updateUser(Long id, User user)
    {
        User existing = userRepository.findById(id).orElse(null);
        if(existing != null)
        {
            existing.setName(user.getName());
            existing.setEmail(user.getEmail());
            existing.setAge(user.getAge());
            existing.setRole(user.getRole());
            existing.setActive(user.getActive());
            return userRepository.save(existing);
        }
        return null;
    }

    @Override
    public void delete(Long id)
    {
        userRepository.deleteById(id);
    }
}