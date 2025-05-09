package com.agiles.uniconnect.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@MappedSuperclass
public class Category {
    private String categoryName;
    private String description;
}
