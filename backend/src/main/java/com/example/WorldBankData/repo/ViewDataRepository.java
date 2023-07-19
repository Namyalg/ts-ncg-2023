package com.example.WorldBankData.repo;

import com.example.WorldBankData.model.ViewData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ViewDataRepository extends JpaRepository<ViewData, Long> {

}
