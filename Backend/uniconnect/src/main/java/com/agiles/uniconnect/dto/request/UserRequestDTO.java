package com.agiles.uniconnect.dto.request;

import com.agiles.uniconnect.model.*;

import java.time.LocalDateTime;
import java.util.Set;

public record UserRequestDTO(
        String username,
        String firstName,
        String lastName,
        String email,

        Set<StudyGroup> studyGroupIds,
        Set<JobPosting> jobPostingIds,
        Set<Tutoring> tutoringIds,
        Set<ForumPost> forumPostIds,
        Set<Achievement> achievementIds,
        Set<Role> roleIds
) {
}
