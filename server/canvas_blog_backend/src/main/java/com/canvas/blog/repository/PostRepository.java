package com.canvas.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.canvas.blog.models.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long>{

}
