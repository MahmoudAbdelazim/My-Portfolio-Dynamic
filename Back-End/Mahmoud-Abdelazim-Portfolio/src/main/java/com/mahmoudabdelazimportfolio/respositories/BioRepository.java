package com.mahmoudabdelazimportfolio.respositories;

import com.mahmoudabdelazimportfolio.model.Bio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BioRepository extends JpaRepository<Bio, Long> {
}
