package com.hh99_clone.hh99_clone.util;


import com.hh99_clone.hh99_clone.domain.Comment;
import org.springframework.data.jpa.domain.Specification;

public class CommentSpecs {

    public CommentSpecs() {
    }

    public static Specification<Comment> withArticle_id(Long articleId) {
        return ((root, query, builder) ->
                builder.equal(root.get("articleId"), articleId)
        );
    }
}
