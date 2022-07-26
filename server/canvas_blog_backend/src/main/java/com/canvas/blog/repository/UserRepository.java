package com.canvas.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.canvas.blog.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
