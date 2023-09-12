package com.example.be_pandahome.repository;

import com.example.be_pandahome.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IUserRepository extends JpaRepository<Users, Long> {
    @Query(nativeQuery = true, value = "select * from users as a where a.user_name = :userName and a.status = 0")
    Users getByUserNameAndStatusFalse(@Param("userName") String username);

    @Query(nativeQuery = true, value = "select * from users as a where a.user_name = :userName and a.status = 2")
    List<Users> getAllByUserNameAndStatus2(@Param("userName") String email);

    @Modifying
    @Transactional
    @Query(nativeQuery = true, value = "update users as u set u.status = 1 where u.status = 2")
    void setAllStatusToTrue();

    @Query(nativeQuery = true, value = "select * from users as a where a.user_name = :userName and a.status = 0")
    List<Users> getAllByUserNameAndStatusFalse(@Param("userName") String email);

    @Modifying
    @Transactional
    @Query(nativeQuery = true, value = "INSERT INTO users(user_name, password,email, verification_code, id_role,status) values (:email, :encoderPassword, :email, :randomCode, 2, 2)")
    void saveUser(@Param("email") String email, @Param("encoderPassword") String encoderPassword, @Param("randomCode") int randomCode);

    @Query(nativeQuery = true, value = "select * from users as u where u.user_name = :email and status = 2")
    Users getByUserNameAndStatus2(@Param("email") String email);
}
