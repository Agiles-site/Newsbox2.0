package com.agiles.uniconnect.dto.request;

import com.agiles.uniconnect.model.User;

public record RoleRequestDTO(
        String roleType,
        User userId
) {}
