package com.example.WorldBankData.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="views")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class ViewData {
    // View ID, used as the primary key, starts from 1
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String name;

    @Column
    private String chartType;

    @Column
    private String country;

    @Column
    private String indicator;

    @Column
    private Date startDate;

    @Column
    private Date endDate;
}
