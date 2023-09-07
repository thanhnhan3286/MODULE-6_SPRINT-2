package com.example.be_pandahome.repository;

import com.example.be_pandahome.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<Users, Long> {
    @Query(nativeQuery = true, value = "select * from users as a where a.user_name = :userName and a.status = 0")
    Users getByUserNameAndStatusFalse(@Param("userName") String username);
}
