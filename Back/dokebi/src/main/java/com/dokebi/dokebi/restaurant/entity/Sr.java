package com.dokebi.dokebi.restaurant.entity;

import com.dokebi.dokebi.vip.entity.Vip;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "Sr")
@Entity
public class Sr {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int srId;

    @ManyToOne()
    private Vip vip;

    @ManyToOne()
    private Restaurant restaurant;
}