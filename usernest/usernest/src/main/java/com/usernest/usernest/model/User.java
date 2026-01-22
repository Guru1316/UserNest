package com.usernest.usernest.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private Integer age;
    private String role;
    private Boolean active;
    public User() {}
    public User(String name, String email, Integer age, String role, Boolean active)
    {
        this.name = name;
        this.email = email;
        this.age = age;
        this.role = role;
        this.active = active;
    } 

    public Long getId()
    {
        return id;
    }
    public String getName()
    {
        return name;
    }
    public String getEmail()
    {
        return email;
    }
    public Integer getAge()
    {
        return age;
    }
    public String getRole()
    {
        return role;
    }
    public Boolean getActive()
    {
        return active;
    }

    public void setId(Long id)
    {
        this.id = id;
    }
    public void setName(String name)
    {
        this.name = name;
    }
    public void setEmail(String email)
    {
        this.email = email;
    }
    public void setAge(Integer age)
    {
        this.age = age;
    }
    public void setRole(String role)
    {
        this.role = role;
    }
    public void setActive(Boolean active)
    {
        this.active = active;
    }
}