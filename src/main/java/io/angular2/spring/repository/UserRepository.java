package io.angular2.spring.repository;

import io.angular2.spring.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Yvau on 1/18/2017.
 */
public interface UserRepository extends JpaRepository<User, Integer> {

}
