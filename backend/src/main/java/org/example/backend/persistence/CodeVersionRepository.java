package org.example.backend.persistence;

import org.example.backend.entity.CodeVersion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CodeVersionRepository extends JpaRepository<CodeVersion, Long> {
}
