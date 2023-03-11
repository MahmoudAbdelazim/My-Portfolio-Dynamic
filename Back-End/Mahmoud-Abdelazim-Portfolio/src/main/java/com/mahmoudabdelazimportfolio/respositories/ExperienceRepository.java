package com.mahmoudabdelazimportfolio.respositories;

import com.mahmoudabdelazimportfolio.model.Experience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ExperienceRepository extends JpaRepository<Experience, Long> {
    Optional<Experience> findFirstByCompanyName(String companyName);
    List<Experience> findByOrderByDateToDesc();
}
