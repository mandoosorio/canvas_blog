package com.canvas.blog.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="posts")

public class Post {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="title")
	private String title;
	
	@Column(name="body")
	private String body;
	
	public Post() {
		
	}
	
	public Post(String title, String body) {
		super();
		this.title = title;
		this.body = body;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getPostTitle() {
		return title;
	}
	public void setPostTitle(String title) {
		this.title = title;
	}
	public String getPostBody() {
		return body;
	}
	public void setPostBody(String body) {
		this.body = body;
	}
}
