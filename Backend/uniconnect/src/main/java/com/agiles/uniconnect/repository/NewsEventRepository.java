package com.agiles.uniconnect.repository;

import com.agiles.uniconnect.model.NewsEvent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsEventRepository extends JpaRepository<NewsEvent, Long> {
}
