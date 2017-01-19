package io.angular2.spring.web;

import io.angular2.spring.model.User;
import io.angular2.spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Yvau on 1/18/2017.
 */
@RestController
public class SpringRestController {

    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/users")
    public List<User> getUser() {

        return userRepository.findAll();
    }
}
