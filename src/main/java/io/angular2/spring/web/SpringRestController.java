package io.angular2.spring.web;

import io.angular2.spring.model.User;
import io.angular2.spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Yvau on 1/18/2017.
 */
@RestController
public class SpringRestController {

    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/users")
    public List<User> getAllUsers() {

        return userRepository.findAll();
    }

    @PostMapping(value = "/users")
    public void postUser(User user) {
        userRepository.save(user);
        return ;
    }

    @GetMapping(value = "/user/{id}")
    public User getOneUser(@PathVariable Integer id) {

        return userRepository.findOne(id);
    }

    @DeleteMapping(value = "/user/{id}")
    public void deleteUser(@PathVariable Integer id) {
        userRepository.delete(id);
        return ;
    }
}
