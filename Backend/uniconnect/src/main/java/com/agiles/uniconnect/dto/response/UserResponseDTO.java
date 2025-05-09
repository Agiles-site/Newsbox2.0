package com.agiles.uniconnect.dto.response;

import java.time.LocalDateTime;

public interface UserResponseDTO {
    String getUsername();
    String getFirstName();
    String getLastName();
    String getEmail();
    LocalDateTime getJoinDate();
    LocalDateTime getLastLogin();
}
