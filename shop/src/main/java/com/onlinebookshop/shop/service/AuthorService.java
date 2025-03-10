package com.onlinebookshop.shop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlinebookshop.shop.model.Author;
import com.onlinebookshop.shop.repository.AuthorRepository;

@Service
public class AuthorService {
	@Autowired
    private final AuthorRepository authorRepository;

    public AuthorService(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    public void addAuthor(Author author) {
    	authorRepository.save(author);
    }
    public List<Author> getAllAuthors() {
        return authorRepository.findAll();
    }

    public Author getAuthorById(int id) {
        return authorRepository.findById(id);
    }

    

    public int updateAuthor(Author author) {
        return authorRepository.update(author);
    }

    public int deleteAuthor(int id) {
        return authorRepository.delete(id);
    }
}
